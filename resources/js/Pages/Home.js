import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainLayout from './MainLayout';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import NewProduct from '../components/NewProduct';
import MyPoint from '../components/MyPoint';
import Category from '../components/Category';
import AllProduct from '../components/AllProduct';
import { debounce } from 'lodash';

function Home(props) {
  const [data, setData] = useState(props.products);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.onscroll = debounce(async (e) => {
      let offsetHeight = document.documentElement.offsetHeight;
      let scrollTop = document.documentElement.scrollTop;
      let pixel = offsetHeight - scrollTop - window.innerHeight;
      if (pixel < 10) {
        try {
          setIsLoading(true);
          const res = await axios.get(data.next_page_url);
          setData({
            ...res.data,
            data: [...data.data, ...res.data.data],
          });
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
          console.log('hahaha ' + error);
        }
      }
    }, 100);
  }, [data.next_page_url]);

  return (
    <MainLayout>
      <Header isEmptyCart={props.isEmptyCart} />
      <Carousel />
      <MyPoint />
      <NewProduct data={data.data} />
      <Category />
      <AllProduct data={data.data} isLoading={isLoading} />
    </MainLayout>
  );
}

export default Home;
