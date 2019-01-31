import * as EXCHANGE_TYPES from '../types/exchangeTypes';
import moment from 'moment';

const initialState = {
  base: 'EUR',
  date: moment.utc().format('YYYY-MM-DD'),
  rates: {
    'USD': 0,
    'GBP': 0,
  },
  isLoading: false,
};

export function exchangeReducer (
  state = initialState, { type, payload = { rates: [] } }) {
  switch (type) {
    case EXCHANGE_TYPES.GET_EXCHANGE_RATES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case EXCHANGE_TYPES.GET_EXCHANGE_RATES_SUCCESS:
      return {
        ...state,
        date: payload.date,
        rates: { ...state.rates, ...payload.rates },
        isLoading: false,
      };
    case EXCHANGE_TYPES.GET_EXCHANGE_RATES_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
