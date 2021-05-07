import React, { useState } from "react";
import Header from "src/components/Header";
import Web3Provider from "src/providers/Web3Provider";
import STATUS from "src/constants/status";
import View from "src/components/View";

const defaultContractAddress = "0x06012c8cf97bead5deae237070f9587f8e7a266d";

function App() {
  const [status, setStatus] = useState(STATUS.loading);
  const [contractAddress, setContractAddress] = useState(
    defaultContractAddress
  );
  const [account, setAccount] = useState();

  return (
    <div>
      <h1>NFT Viewer</h1>
      <Header
        status={status}
        account={account}
        contractAddress={contractAddress}
      />
      <Web3Provider setStatus={setStatus}>
        <View
          setAccount={setAccount}
          setContractAddress={setContractAddress}
          contractAddress={contractAddress}
        />
      </Web3Provider>
    </div>
  );
}

export default App;
