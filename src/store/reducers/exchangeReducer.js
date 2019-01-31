import * as EXCHANGE_TYPES from '../types/exchangeTypes';
import moment from 'moment';

const initialState = {
  base: 'RUB',
  date: +moment.utc(),
  rates: {
    'GBP': 0.72007,
    'JPY': 107.346001,
    'EUR': 0.813399,
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
