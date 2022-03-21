import React from 'react';
import MainLayout from './MainLayout';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import NewProduct from '../components/NewProduct';
import MyPoint from '../components/MyPoint';
import Category from '../components/Category';
import AllProduct from '../components/AllProduct';

function Home(props) {
  const { data } = props.products;
  return (
    <MainLayout>
      <Header isEmptyCart={props.isEmptyCart} />
      <Carousel />
      <MyPoint />
      <NewProduct data={data} />
      <Category />
      <AllProduct data={data} />
    </MainLayout>
  );
}

export default Home;
