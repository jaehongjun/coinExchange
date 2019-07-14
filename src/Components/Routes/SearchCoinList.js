import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div``;
export default () => {
  const dispatch = useDispatch();
  const { buyList, sellList } = useSelector(state => state);
  return (
    <Container>
      <button onClick={() => dispatch({ type: 'SEARCH_MAIN' })}>
        SEARCH_MAIN
      </button>
      <button
        onClick={() => dispatch({ type: 'INCREMENT_ASYNC', payload: '4' })}
      >
        INCREMENT_ASYNC
      </button>
      <div>
        {buyList &&
          buyList.map((data, index) => (
            <>
              <strong>BuyList</strong>
              <ul key={index}>
                <li>{data.qty}</li>
                <li>{data.price}</li>
              </ul>
            </>
          ))}
      </div>
      <div>
        {sellList &&
          sellList.map((data, index) => (
            <>
              <strong>sellList</strong>
              <ul key={index}>
                <li>{data.qty}</li>
                <li>{data.price}</li>
              </ul>
            </>
          ))}
      </div>
    </Container>
  );
};
