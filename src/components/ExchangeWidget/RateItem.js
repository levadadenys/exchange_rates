import React from 'react';

export default ({ currency, rate, onRefresh }) =>
  <div className='exchange-widget__rate-item'>
    <p className='card-text'>
      {currency}
    </p>
    <p className='card-text'>
      {rate}
    </p>
    <button
      className='exchange-widget__btn exchange-widget__btn---outline-primary btn btn-outline-primary'
      type='button'
      onClick={onRefresh}
    >
      Refresh
    </button>
  </div>