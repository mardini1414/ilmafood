import React, { useEffect } from 'react';
import { Carousel as myCarousel } from 'bootstrap';
import imgSlide1 from '../../images/img-slide1.webp';
import imgSlide2 from '../../images/img-slide2.webp';
import imgSlide3 from '../../images/img-slide3.webp';

function Carousel() {
  useEffect(() => {
    const myCarouselEl = document.getElementById('myCarouselEl');
    new myCarousel(myCarouselEl, {
      interval: 3000,
      wrap: true,
    });
  }, []);

  return (
    <>
      <div
        id="myCarouselEl"
        className="carousel slide px-2"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex justify-content-evenly align-items-center bg-mygradient rounded">
              <h6 className="text-light">Diskon sampai 70%</h6>
              <img src={imgSlide1} width={100} alt="slide1" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-evenly align-items-center bg-mygradient rounded">
              <h6 className="text-light ms-4">
                Banyak pilihannya menu untukmu.
              </h6>
              <img
                src={imgSlide2}
                width={100}
                alt="slide2"
                className="me-2 mt-2"
              />
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-evenly align-items-center bg-mygradient rounded">
              <h6 className="text-light ms-4">Temukan minuman favoritmu</h6>
              <img src={imgSlide3} width={100} alt="slide3" className="mb-2" />
            </div>
          </div>
        </div>
        <div className="carousel-indicators">
          <div
            data-bs-target="#myCarouselEl"
            data-bs-slide-to={0}
            className="indicator active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <div
            className="indicator"
            data-bs-target="#myCarouselEl"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <div
            className="indicator"
            data-bs-target="#myCarouselEl"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
      </div>
    </>
  );
}

export default Carousel;
