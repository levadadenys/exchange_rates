import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import RateItem from './RateItem';
import { getNewExchangeData } from './../../store/actions';

function ExchangeWidget (props) {
  const {
    exchange: {
      base,
      date,
      rates,
      isLoading,
    },
    dispatch,
  } = props;
  const visibleRates = Object.keys(rates);
  const getSomeRate = (symbols) => dispatch(getNewExchangeData(base, symbols));

  useEffect(() => {
    const refreshInterval = setInterval(
      () => dispatch(getNewExchangeData(base, visibleRates)),
      10000);
    return () => clearInterval(refreshInterval);
  });

  return (
    <div className='exchange_widget'>
      <div>
        {moment(date)
          .format('YYYY-MM-DD')}
      </div>
      <div>
        {base}
      </div>
      {visibleRates
        .map(key =>
          <RateItem
            key={key}
            currency={key}
            rate={rates[key]}
            onRefresh={() => getSomeRate(key)}
          />,
        )}
      <div onClick={() => getSomeRate('CAD,JPY')}>Show
        More
      </div>
      <div>
        {isLoading && 'Please wait...'}
      </div>
    </div>
  );
}

export default connect(state => ({ exchange: state.exchange }))(ExchangeWidget);
