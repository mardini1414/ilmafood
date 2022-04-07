import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainLayout from './MainLayout';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import NewProduct from '../components/NewProduct';
import Announcement from '../components/Announcement';
import Category from '../components/Category';
import AllProduct from '../components/AllProduct';
import { debounce } from 'lodash';
import Auth from '../components/Auth';
import HotProduct from '../components/HotProduct';

function Home(props) {
  const { hot_product } = props;
  const [data, setData] = useState(props.products);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isApiSubscribed = true;
    window.onscroll = debounce(async (e) => {
      let offsetHeight = document.documentElement.offsetHeight;
      let scrollTop = document.documentElement.scrollTop;
      let pixel = offsetHeight - scrollTop - window.innerHeight;
      if (pixel < 10) {
        try {
          if (isApiSubscribed) {
            setIsLoading(true);
            const res = await axios.get(data.next_page_url);
            setData({
              ...res.data,
              data: [...data.data, ...res.data.data],
            });
            setIsLoading(false);
          }
        } catch (error) {
          setIsLoading(false);
        }
      }
    }, 100);
    return () => {
      isApiSubscribed = false;
      window.removeEventListener('scroll', debounce);
    };
  }, [data.next_page_url]);

  return (
    <MainLayout>
      <Header isEmptyCart={props.isEmptyCart} />
      <Carousel />
      <Announcement />
      <Auth user={props.user} />
      <NewProduct data={data.data} />
      <Category />
      <HotProduct data={hot_product.data} />
      <AllProduct data={data.data} isLoading={isLoading} />
    </MainLayout>
  );
}

export default Home;
