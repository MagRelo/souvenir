const initialState = {
  web3Ready: false,
  accountsReady: false,
  contractsReady: false,
  showTip: false,
  instance: null,
  accounts: [],
  network: '',
  balance: 0,
  monetaryPolicy: null,
  priceFeed: null,
  bondAuction: null,
  election: null
};

const web3Reducer = (state = initialState, action) => {
  if (action.type === 'WEB3_INITIALIZED') {
    return Object.assign({}, state, {
      web3Ready: true,
      accountsReady: !!action.payload.accounts.length,
      instance: action.payload.instance,
      accounts: action.payload.accounts,
      network: action.payload.network,
      balance: action.payload.balance
    });
  }

  if (action.type === 'UPDATE_DATA') {
    return Object.assign(
      {},
      state,
      { contractsReady: true },
      action.payload.contracts
    );
  }

  if (action.type === 'CONTRACTS_INITIALIZED') {
    return Object.assign({}, state, {
      contractsReady: true,
      monetaryPolicy: action.payload.monetaryPolicy,
      priceFeed: action.payload.priceFeed,
      bondAuction: action.payload.bondAuction,
      election: action.payload.election
    });
  }

  if (action.type === 'SHOW_TIP') {
    return Object.assign({}, state, action.payload);
  }

  return state;
};

export default web3Reducer;
