import io from 'socket.io-client';
import store from '../store';

let serverSocket = null;

export async function initSockets() {
  serverSocket = io('/');
  serverSocket.on('connect', data => {
    console.log('socket connected');
  });

  serverSocket.on('server-update', updateServerData);
  serverSocket.on('reconnecting', reconnectError);
  serverSocket.on('error', socketError);
  serverSocket.on('disconnect', socketError);
  serverSocket.on('connect_failed', socketError);
  serverSocket.on('reconnect_failed', socketError);

  return true;
}

// socket handlers
async function updateServerData(data) {
  return store.dispatch({
    type: 'UPDATE_DATA',
    payload: data
  });
}

function socketError(error) {
  console.error('socket error!', error);
}

function reconnectError(data) {
  if (data > 5) {
    serverSocket.disconnect();
    console.log('disconnecting');
  } else {
    console.log('reconnection attempts: ', data);
  }
}
