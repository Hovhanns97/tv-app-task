import React from 'react';
import './style.css';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { responsive } from '../../utils';
import { useAppStore } from '../../zustand/store';

const Trandings = (props) => {
  const setFeautured = useAppStore((state) => state.setFeautured);

  const onTrendingClick = (item) => {
    setFeautured(item);
    sessionStorage.setItem('selected_movie', item.Id);
  };

  return (
    <div className='carousel-container'>
      <h1>Tranding Now</h1>
      <Carousel responsive={responsive}>
        {props.data &&
          props.data.map((item) => (
            <div
              className='carousel-item'
              key={item.Id}
              onClick={() => onTrendingClick(item)}
            >
              <img src={`/src/assets/${item.CoverImage}`} />
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default Trandings;
