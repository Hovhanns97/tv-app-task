import React, { useEffect, useState } from 'react';
// import movieTitle from '/src/assets/FeaturedTitleImage.png';
import movieTitle from '/src/assets/FeaturedTitleImage.png';
import './style.css';

import PlayIcon from '/src/assets/play-solid.svg';
import movieBanner from '/src/assets/FeaturedCoverImage.png';
import Trandings from '../Trendings';
import { useAppStore } from '../../zustand/store';
import { convertDuration } from '../../utils';

const Feautured = () => {
  const [timerEnds, setTimerEnds] = useState(false);
  const trendings = useAppStore((state) => state.trendings);
  const feautured = useAppStore((state) => state.feautered);

  const timerFunction = () => {
    setTimeout(() => setTimerEnds(true), 5000);

    clearTimeout();
  };

  useEffect(() => {
    setTimerEnds(false);
    timerFunction();
  }, [feautured]);

  return (
    <div className='videoContainer'>
      {timerEnds && feautured && feautured.VideoUrl && (
        <video src={feautured.VideoUrl} autoPlay loop muted />
      )}
      <div
        className='main'
        style={{
          backgroundImage:
            timerEnds && feautured.VideoUrl ? 'none' : `url('${movieBanner}')`,
        }}
      >
        {feautured && (
          <div className='heading'>
            <h1>{feautured.Category}</h1>
            <img src={movieTitle} />
            <div className='movie_info'>
              <span>{feautured.ReleaseYear}</span>
              <span>{feautured.MpaRating}</span>
              <span>{convertDuration(feautured.Duration)}</span>
            </div>
            <div className='description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              veniam animi doloribus natus non ducimus officia provident ipsam
              voluptas eum necessitatibus, nesciunt neque, accusamus atque.
            </div>
            <div className='btn-group'>
              <button className=' btn btn-white'>
                <img src={PlayIcon} />
                Play
              </button>
              <button className='btn btn-primary'>More Info</button>
            </div>
          </div>
        )}

        {trendings && <Trandings data={trendings} />}
      </div>
    </div>
  );
};

export default Feautured;
