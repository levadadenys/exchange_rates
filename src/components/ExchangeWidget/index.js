import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import RateItem from './RateItem';
import { getNewExchangeData } from './../../store/actions';

function ExchangeWidget (props) {
  const {
    exchange: {
      base,
      rates,
      isLoading,
    },
    dispatch,
  } = props;
  const visibleRates = Object.keys(rates);
  const getSomeRate = (symbols) => dispatch(getNewExchangeData(base, symbols));

  useEffect(() => {
    const refreshInterval = setInterval(function getRates() {
      dispatch(getNewExchangeData(base, visibleRates));
      return getRates;
    }(),
      10000);
    return () => clearInterval(refreshInterval);
  }, [Object.keys(rates).length]);

  return (
    <div className='exchange_widget card'>
      <div className='exchange-widget__header card-header'>
        <h5>
          RUB
        </h5>
      </div>
      <div className='exchange-widget__body card-body'>
        {
          visibleRates.filter(rateKey => rateKey !== 'RUB')
            .map(key =>
              <RateItem
                key={key}
                currency={key}
                rate={(rates[key] * rates['RUB']).toFixed(2)}
                onRefresh={() => getSomeRate(key)}
              />,
            )
        }
        {
          visibleRates.length < 4 && !isLoading &&
          <button
            className="exchange-widget__btn exchange-widget__btn--primary btn btn-primary"
            type='button'
            onClick={() => getSomeRate('CAD,JPY')}
          >
            Show more
          </button>
        }

        {
          isLoading &&
          <p className='mt-1 text-muted'>
            Please wait...
          </p>
        }


      </div>
    </div>
  );
}

export default connect(state => ({ exchange: state.exchange }))(ExchangeWidget);
