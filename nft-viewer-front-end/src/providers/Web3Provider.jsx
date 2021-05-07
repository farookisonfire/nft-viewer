import React, { useEffect, useRef } from "react";
import Web3 from "web3";
import STATUS from 'src/constants/status';

export const Web3Context = React.createContext();

const Web3Provider = ({ children, setStatus }) => {
  const web3Ref = useRef();
  const setWeb3Ref = (web3js) => web3Ref.current = web3js;

  useEffect(() => {
    if (window.web3) {
      const web3js = new Web3(window.web3.currentProvider);
      setWeb3Ref(web3js);
      debugger;
      setStatus(STATUS.connected);
    } else {
      setStatus(STATUS.unsupported);
    }
  }, []);

  return <Web3Context.Provider value={web3Ref.current}>{children}</Web3Context.Provider>;
};

export default Web3Provider;
