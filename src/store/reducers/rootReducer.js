import { combineReducers } from 'redux';
// import { reducer as reduxForm } from 'redux-form';
import { exchangeReducer } from './exchangeReducer';

export default combineReducers ({
  exchange: exchangeReducer,
  // form: reduxForm
});