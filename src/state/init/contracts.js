import store from '../store';

// setup contracts with web3
export async function initContracts() {
  const unsubscribe = store.subscribe(async () => {
    const state = store.getState();
    const contractsReady = state.web3.contractsReady;
    const web3 = state.web3.instance;
    const mpAddress = state.web3.mp_address;
    const mpArtifact = state.web3.mp_artifact;
    const pfAddress = state.web3.pf_address;
    const pfArtifact = state.web3.pf_artifact;
    const baAddress = state.web3.ba_address;
    const baArtifact = state.web3.ba_artifact;
    const electionArtifact = state.web3.election_artifact;
    const electionAddress = state.web3.election_address;

    if (contractsReady) {
      const MonetaryPolicyContract = await new web3.eth.Contract(
        mpArtifact.abi,
        mpAddress
      );
      const PriceFeedContract = new web3.eth.Contract(
        pfArtifact.abi,
        pfAddress
      );
      const BondAuctionContract = new web3.eth.Contract(
        baArtifact.abi,
        baAddress
      );
      const ElectionContract = new web3.eth.Contract(
        electionArtifact.abi,
        electionAddress
      );

      store.dispatch({
        type: 'CONTRACTS_INITIALIZED',
        payload: {
          monetaryPolicy: MonetaryPolicyContract,
          priceFeed: PriceFeedContract,
          bondAuction: BondAuctionContract,
          election: ElectionContract
        }
      });

      console.log('contracts init');

      return unsubscribe();
    }
  });
}

export default initContracts;
