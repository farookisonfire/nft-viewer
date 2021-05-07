import React, { useEffect, useContext, useState } from 'react';
import abiService from 'src/services/abi';
import { Web3Context } from 'src/providers/Web3Provider';

const View = ({ setAccount, contractAddress, setContractAddress }) => {
  const [contract, setContract] = useState();
  const [kitty, setKitty] = useState();
  const web3js = useContext(Web3Context);
  const [abi, setABI] = useState();
  const [abiPending, setABIPending] = useState(false);

  useEffect(() => {
    async function getContractABI(address) {
      if (!abi && !abiPending) {
        setABIPending(true);
        setABI(await abiService.get(address));
      } else if (abi && web3js) {
        setABIPending(false);
        const contract = new web3js.eth.Contract(abi, address);
        setContract(contract);
        const kitty = await contract.methods.getKitty(25).call()
        setKitty(kitty);
        console.log('KITTY -->', kitty);
      }
    }

    getContractABI(contractAddress);
  }, [contractAddress, web3js, abi])

  return (
    <div>
      View...
    </div>
  )
}

export default View;
