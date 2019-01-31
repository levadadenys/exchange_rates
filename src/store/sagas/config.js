import config from './../../config/config'
import * as EXCHANGE_TYPES from '../types/exchangeTypes';

export default {
  [EXCHANGE_TYPES.GET_EXCHANGE_RATES_REQUEST]: {
    path: ({base, symbols}) => (`/latest?access_key=${config.API_KEY}&base=${base}&symbols=${symbols}`),
    method: 'get',
    successType: EXCHANGE_TYPES.GET_EXCHANGE_RATES_SUCCESS,
    failType: EXCHANGE_TYPES.GET_EXCHANGE_RATES_FAIL,
  },
};
