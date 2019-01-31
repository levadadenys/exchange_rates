import React from 'react';

export default ({ currency, rate, onRefresh }) =>
  <div>
    {currency}
    {rate}
    <button onClick={onRefresh}> Refresh</button>
  </div>