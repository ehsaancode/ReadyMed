import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute ">
                  <h4>Supercharged for Pros</h4>
                  <h5>Airpods</h5>
                  <p>Starting from 999</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex gap-10 flex-wrap justify-content-between align-items-center">
                <div className="small-banner  position-relative">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute ">
                    <h4>New arrivals</h4>
                    <h5>Macbook AIR</h5>
                    <p>Starting from 999</p>
                    {/* <Link className="button">BUY NOW</Link> */}
                  </div>
                </div>
                <div className="small-banner  position-relative">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute ">
                    <h4>New arrivals</h4>
                    <h5>Headsets</h5>
                    <p>Starting from 999</p>
                    {/* <Link className="button">BUY NOW</Link> */}
                  </div>
                </div>

                <div className="small-banner  position-relative">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute ">
                    <h4>New arrivals</h4>
                    <h5>Ipads</h5>
                    <p>Starting from 999</p>
                    {/* <Link className="button">BUY NOW</Link> */}
                  </div>
                </div>

                <div className="small-banner  position-relative">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute ">
                    <h4>New arrivals</h4>
                    <h5>Apple watches</h5>
                    <p>Starting from 999</p>
                    {/* <Link className="button">BUY NOW</Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="column-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className=" d-flex gap-15 align-items-center">
                  <img src="/images/service.png" alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">All orders over 500</p>
                  </div>
                </div>
                <div className=" d-flex gap-15 align-items-center">
                  <img src="/images/service-02.png" alt="services" />
                  <div>
                    <h6>Exciting Offers</h6>
                    <p className="mb-0">Save upto 40%</p>
                  </div>
                </div>
                <div className=" d-flex gap-15 align-items-center">
                  <img src="/images/service-03.png" alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className=" d-flex gap-15 align-items-center">
                  <img src="/images/service-04.png" alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Lowest in the market</p>
                  </div>
                </div>
                <div className=" d-flex gap-15 align-items-center">
                  <img src="/images/service-05.png" alt="services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% protected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Camera</h6>
                    <p>20 items</p>
                  </div>
                  <img src="images/camera.jpg" alt ="" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>TVs</h6>
                    <p>30 items</p>
                  </div>
                  <img src="images/tv.jpg" alt ="" />
                </div>
      
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>music</h6>
                    <p>20 items</p>
                  </div>
                  <img src="images/headphone.jpg" alt ="" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>gaming</h6>
                    <p>20 items</p>
                  </div>
                  <img src="images/laptop.jpg" alt ="" />
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Camera</h6>
                    <p>20 items</p>
                  </div>
                  <img src="images/camera.jpg" alt ="" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>TVs</h6>
                    <p>30 items</p>
                  </div>
                  <img src="images/tv.jpg" alt ="" />
                </div>
      
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>music</h6>
                    <p>20 items</p>
                  </div>
                  <img src="images/headphone.jpg" alt ="" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>gaming</h6>
                    <p>20 items</p>
                  </div>
                  <img src="images/laptop.jpg" alt ="" />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper bg-white card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="brand" />
                    
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brand" />
                    
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brand" />
                    
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brand" />
                    
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brand" />
                    
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brand" />
                    
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brand" />
                    
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brand" />
                    
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collections</h3>
            </div>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
// 2.55