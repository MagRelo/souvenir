import store from './store';

const onePragma = Math.pow(10, 18);

// export function getServerData() {
//   return async function(dispatch) {
//     try {
//       // get server data
//       const data = await fetch('/api/setup').then(result => result.json());

//       // filter user bids
//       const userAddress = store.getState().web3.accounts[0];
//       const userBids = data.bids.filter(bid => bid.userAddress === userAddress);

//       // combine data objects
//       const payload = Object.assign({}, data.auction, {
//         allBids: data.bids,
//         userBids: userBids,
//         marketDay: data.days
//       });

//       return dispatch({
//         type: 'UPDATE_DATA',
//         payload: payload
//       });
//     } catch (error) {
//       console.log(error);
//       dispatch({
//         type: 'FAIL',
//         payload: error
//       });
//     }
//   };
// }

// export function getContractData() {
//   return async function(dispatch) {
//     const web3 = store.getState().web3.instance;
//     const userAddress = store.getState().web3.accounts[0];

//     try {
//       const {
//         MonetaryPolicyContract,
//         BondAuctionContract,
//         PriceFeedContract
//       } = await initContracts(web3);

//       const result = await Promise.all([
//         MonetaryPolicyContract.bondsLength(),
//         MonetaryPolicyContract.circulatingSupply(),
//         MonetaryPolicyContract.availableWithdrawals(userAddress),
//         MonetaryPolicyContract.day(),
//         BondAuctionContract.ordersLength(),
//         MonetaryPolicyContract.getBalance(),
//         PriceFeedContract.priceInCents()
//       ]);

//       // convert 'bigNumber' types to number
//       const formattedResults = result.map(
//         input => (typeof input === 'object' ? input.toNumber() : input)
//       );

//       return dispatch({
//         type: 'UPDATE_DATA',
//         payload: {
//           bonds: formattedResults[0],
//           circulatingSupply: Number(
//             formattedResults[1] / onePragma
//           ).toLocaleString(),
//           availableWithdrawls: formattedResults[2],
//           day: formattedResults[3],
//           orders: formattedResults[4],
//           balance: Number(formattedResults[5] / onePragma).toLocaleString(),
//           price: formattedResults[6]
//         }
//       });
//     } catch (error) {
//       console.log(error);
//       dispatch({
//         type: 'FAIL',
//         payload: error
//       });
//     }
//   };
// }

export function placeBid(futureTokens, value) {
  return async function(dispatch) {
    try {
      const userAddress = store.getState().web3.accounts[0];
      const BondAuctionContract = store.getState().web3.bondAuction;

      // execute transaction through MetaMask
      await BondAuctionContract.methods
        .bid((1 + futureTokens) * onePragma)
        .send({
          value: value * onePragma,
          from: userAddress
        });
    } catch (error) {
      console.log(error);
      dispatch({
        type: 'FAIL',
        payload: error
      });
    }
  };
}

export function cancelBid(index) {
  return async function(dispatch) {
    try {
      const userAddress = store.getState().web3.accounts[0];
      const BondAuctionContract = store.getState().web3.bondAuction;

      // execute transaction through MetaMask
      await BondAuctionContract.methods.cancelBid(index).send({
        from: userAddress
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: 'FAIL',
        payload: error
      });
    }
  };
}

export function withdraw() {
  return async function(dispatch) {
    const userAddress = store.getState().web3.accounts[0];
    const MonetaryPolicyContract = store.getState().web3.monetaryPolicy;

    try {
      const metaMaskResult = await MonetaryPolicyContract.methods
        .withdraw()
        .send({
          from: userAddress
        });
      console.log(metaMaskResult);
    } catch (error) {
      console.log(error);
      dispatch({
        type: 'FAIL',
        payload: error
      });
    }
  };
}

export function setPriceVote(nextPrice) {
  return async function(dispatch) {
    const userAddress = store.getState().web3.accounts[0];
    const PriceFeedContract = store.getState().web3.priceFeed;

    try {
      const metaMaskResult = await PriceFeedContract.methods
        .vote(nextPrice)
        .send({
          from: userAddress
        });

      console.log(metaMaskResult);
    } catch (error) {
      console.log(error);
      dispatch({
        type: 'FAIL',
        payload: error
      });
    }
  };
}

export function cancelPriceVote() {
  return async function(dispatch) {
    // const PriceFeedContract = store.getState().web3.priceFeed;

    try {
      // const metaMaskResult = await PriceFeedContract.methods
      //   .vote(nextPrice)
      //   .send({
      //     from: userAddress
      //   });
      // console.log(metaMaskResult);
    } catch (error) {
      console.log(error);
      dispatch({
        type: 'FAIL',
        payload: error
      });
    }
  };
}

export function registerCandidate(data) {
  return async function(dispatch) {
    const userAddress = store.getState().web3.accounts[0];
    const electionContract = store.getState().web3.election;

    console.log(data);

    try {
      const metaMaskResult = await electionContract.methods
        .registerCandidate(data.name, data.depositContract)
        .send({
          from: userAddress
        });
      console.log(metaMaskResult);
    } catch (error) {
      console.log(error);
      dispatch({
        type: 'FAIL',
        payload: error
      });
    }
  };
}

export function unregisterCandidate() {
  return async function(dispatch) {
    const userAddress = store.getState().web3.accounts[0];
    const electionContract = store.getState().web3.election;

    try {
      const metaMaskResult = await electionContract.methods
        .unregisterCandidate()
        .send({
          from: userAddress
        });
      console.log(metaMaskResult);
    } catch (error) {
      console.log(error);
      dispatch({
        type: 'FAIL',
        payload: error
      });
    }
  };
}

export function setElectionVote(candidate) {
  return async function(dispatch) {
    const userAddress = store.getState().web3.accounts[0];
    const electionContract = store.getState().web3.election;

    try {
      const metaMaskResult = await electionContract.methods
        .vote(candidate.value)
        .send({
          from: userAddress
        });
      console.log(metaMaskResult);
    } catch (error) {
      console.log(error);
      dispatch({
        type: 'FAIL',
        payload: error
      });
    }
  };
}

export function cancelElectionVote() {
  return async function(dispatch) {
    const userAddress = store.getState().web3.accounts[0];
    const electionContract = store.getState().web3.election;

    try {
      const metaMaskResult = await electionContract.methods.cancelVote().send({
        from: userAddress
      });
      console.log(metaMaskResult);
    } catch (error) {
      console.log(error);
      dispatch({
        type: 'FAIL',
        payload: error
      });
    }
  };
}

export function resign() {
  return async function(dispatch) {
    const userAddress = store.getState().web3.accounts[0];
    const electionContract = store.getState().web3.election;

    try {
      const metaMaskResult = await electionContract.methods.resign().send({
        from: userAddress
      });
      console.log(metaMaskResult);
    } catch (error) {
      console.log(error);
      dispatch({
        type: 'FAIL',
        payload: error
      });
    }
  };
}

export function searchNameAvailable() {
  return async function(dispatch) {
    console.log('searchNameAvailable');

    // const userAddress = store.getState().web3.accounts[0];
    // const MonetaryPolicyContract = store.getState().web3.monetaryPolicy;

    // try {
    //   const metaMaskResult = await MonetaryPolicyContract.methods
    //     .updateSupply()
    //     .send({
    //       from: userAddress
    //     });

    //   console.log(metaMaskResult);
    // } catch (error) {
    //   console.log(error);
    //   dispatch({
    //     type: 'FAIL',
    //     payload: error
    //   });
    // }
  };
}

export function bidOnName() {
  return async function(dispatch) {
    console.log('bidOnName');

    // const userAddress = store.getState().web3.accounts[0];
    // const MonetaryPolicyContract = store.getState().web3.monetaryPolicy;

    // try {
    //   const metaMaskResult = await MonetaryPolicyContract.methods
    //     .updateSupply()
    //     .send({
    //       from: userAddress
    //     });

    //   console.log(metaMaskResult);
    // } catch (error) {
    //   console.log(error);
    //   dispatch({
    //     type: 'FAIL',
    //     payload: error
    //   });
    // }
  };
}

export function addReverse() {
  return async function(dispatch) {
    console.log('addReverse');

    // const userAddress = store.getState().web3.accounts[0];
    // const MonetaryPolicyContract = store.getState().web3.monetaryPolicy;

    // try {
    //   const metaMaskResult = await MonetaryPolicyContract.methods
    //     .updateSupply()
    //     .send({
    //       from: userAddress
    //     });

    //   console.log(metaMaskResult);
    // } catch (error) {
    //   console.log(error);
    //   dispatch({
    //     type: 'FAIL',
    //     payload: error
    //   });
    // }
  };
}

export function purchaseName() {
  return async function(dispatch) {
    const userAddress = store.getState().web3.accounts[0];
    const MonetaryPolicyContract = store.getState().web3.monetaryPolicy;

    try {
      const metaMaskResult = await MonetaryPolicyContract.methods
        .updateSupply()
        .send({
          from: userAddress
        });

      console.log(metaMaskResult);
    } catch (error) {
      console.log(error);
      dispatch({
        type: 'FAIL',
        payload: error
      });
    }
  };
}

// Dev functions -----------
// -------------------------

export function updateSupply() {
  return async function(dispatch) {
    const userAddress = store.getState().web3.accounts[0];
    const MonetaryPolicyContract = store.getState().web3.monetaryPolicy;

    try {
      const metaMaskResult = await MonetaryPolicyContract.methods
        .updateSupply()
        .send({
          from: userAddress
        });

      console.log(metaMaskResult);
    } catch (error) {
      console.log(error);
      dispatch({
        type: 'FAIL',
        payload: error
      });
    }
  };
}
