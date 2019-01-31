import config from './../../config/config'
import * as EXCHANGE_TYPES from '../types/exchangeTypes';

export default {
  [EXCHANGE_TYPES.GET_EXCHANGE_RATES_REQUEST]: {
    // free API usage plan doesn't allow us to specify the base currency. However it is possible, you just need to upgrade to basic usage plan at least.
    // to add this functionality add this code to the query string: >> &base=${base} <<
    path: ({base, symbols}) => (`/latest?access_key=${config.API_KEY}&symbols=${symbols}`),
    method: 'get',
    successType: EXCHANGE_TYPES.GET_EXCHANGE_RATES_SUCCESS,
    failType: EXCHANGE_TYPES.GET_EXCHANGE_RATES_FAIL,
  },
};
