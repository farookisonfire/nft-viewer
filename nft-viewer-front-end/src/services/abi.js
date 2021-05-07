// docs: https://etherscan.io/apis#contracts

import mockABI from "src/services/mockABI";

const url =
  "https://api.etherscan.io/api?module=contract&action=getabi&address=";

const get = async (address) => {
  try {
    // const response = await fetch(`${url}${address}`);
    // const json = await response.json();
    // const parsed = JSON.parse(json.result);
    // console.log(parsed);
    // return parsed;
    return Promise.resolve(mockABI);
  } catch (e) {
    console.log("error getting contract ABI", e);
    return null;
  }
};

const API = {
  get,
};

export default API;
