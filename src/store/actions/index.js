import { GET_EXCHANGE_RATES_REQUEST, } from './../types/exchangeTypes';

export const getNewExchangeData = (base, symbols) => ({
  type: GET_EXCHANGE_RATES_REQUEST,
  payload: {
    base,
    symbols,
  },
});
