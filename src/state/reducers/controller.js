const testSamples = [
  { name: '1', sound: '' },
  { name: '2', sound: '' },
  { name: '3', sound: '' },
  { name: '4', sound: '' },
  { name: '5', sound: '' },
  { name: '6', sound: '' },
  { name: '7', sound: '' },
  { name: '8', sound: '' },
  { name: '9', sound: '' },
  { name: '10', sound: '' },
  { name: '11', sound: '' },
  { name: '12', sound: '' },
  { name: '13', sound: '' },
  { name: '14', sound: '' },
  { name: '15', sound: '' },
  { name: '16', sound: '' }
];

const initialState = {
  samples: testSamples
};

const controllerReducer = (state = initialState, action) => {
  if (action.type === 'UPDATE_DATA') {
    return Object.assign({}, state, {
      votes: action.payload.votes,
      validators: action.payload.validators
    });
  }
  return state;
};

export default controllerReducer;
