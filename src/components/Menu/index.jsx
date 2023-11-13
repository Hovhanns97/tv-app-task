import React from 'react';

// import Search from '/src/assets/icons/ICON - Search.png';
import Search from '/src/assets/icons/ICON - Search.png';
import HomePage from '/src/assets/icons/Group 46.png';
import WatchLater from '/src/assets/icons/Group 47.png';
import Genres from '/src/assets/icons/Group 53.png';
import Movies from '/src/assets/icons/Group 54.png';
import TVShows from '/src/assets/icons/Group 56.png';

import UserPhoto from '/src/assets/user-photo.avif';

import './style.css';

const MenuComponent = () => {
  return (
    <div className='navbar'>
      <ul className='navbar-nav'>
        <div className='nav-item user-info'>
          <div className='content'>
            <img src={UserPhoto} />
            <h1>Daniel</h1>
          </div>
        </div>
        <li className='nav-item'>
          <a href='#' className='nav-link'>
            <img src={Search} />
            <span className='link-text'>Search</span>
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' className='nav-link active'>
            <img src={HomePage} />
            <span className='link-text'>Home</span>
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' className='nav-link'>
            <img src={TVShows} />
            <span className='link-text'>TV Shows</span>
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' className='nav-link'>
            <img src={Movies} />
            <span className='link-text'>Movies</span>
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' className='nav-link'>
            <img src={Genres} />
            <span className='link-text'>Genres</span>
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' className='nav-link'>
            <img src={WatchLater} />
            <span className='link-text'>Watch Later</span>
          </a>
        </li>

        <div className='nav-item settings-block'>
          <ul>
            <li>Language</li>
            <li>Get Help</li>
            <li>Exit</li>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default MenuComponent;
