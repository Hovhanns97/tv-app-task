import React, { useEffect } from 'react';
import Feautured from '../Feautured';
import { useAppStore } from '../../zustand/store';
import MenuComponent from '../Menu';

const HomePageComponent = () => {
  const setTrendings = useAppStore((state) => state.setTrendings);
  const setFeautured = useAppStore((state) => state.setFeautured);
  const fetchData = async () => {
    const data = await import('../../../db.json');

    const selectedMovie = sessionStorage.getItem('selected_movie');

    if (data) {
      let results = data.TendingNow.sort(
        (item_1, item_2) =>
          new Date(item_1.Date).getTime() - new Date(item_2.Date).getTime(),
      );

      let sorted_by_selected = results.sort((item) => {
        if (item.Id === selectedMovie) return -1;
      });
      setTrendings(sorted_by_selected);
    }
    setFeautured(data.Featured);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <MenuComponent />
      <Feautured />
    </>
  );
};

export default HomePageComponent;
