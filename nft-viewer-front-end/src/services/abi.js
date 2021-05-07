// docs: https://etherscan.io/apis#contracts

const apiKey = process.env.REACT_APP_ETHERSCAN_API_KEY;
const getURL = (address) => `
  https://api.etherscan.io/api?module=contract&action=getabi&address=${address}&apikey=${apiKey}
`;

const get = async (address) => {
  try {
    console.log('api key', apiKey);
    const response = await fetch(getURL(address));
    const json = await response.json();
    const parsed = JSON.parse(json.result);
    console.log(parsed);
    return parsed;
  } catch (e) {
    console.log("error getting contract ABI", e);
    return null;
  }
};

const API = {
  get,
};

export default API;
