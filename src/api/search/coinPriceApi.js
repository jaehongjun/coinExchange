import axios from 'axios';

export const coinList = (baseCoinCode = '1') => {
  const result = axios.get(
    `https://www.velic.io/cexp/v1/trade/hoga/list?baseCoinCode=${baseCoinCode}&mtchCoinCode=3`,
  );
  return result;
};
