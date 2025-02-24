import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carousel.css";
import img from "../../assets/carousel-img.png"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";

const projects = [
  {
    title: "2ndamendmentguns",
    category: "Store Design & Development",
    salesIncrease: "80%",
    conversionIncrease: "120%",
    orderIncrease: "140%",
    image: img, 
  },
  {
    title: "Another Brand",
    category: "UI/UX & Development",
    salesIncrease: "75%",
    conversionIncrease: "110%",
    orderIncrease: "130%",
    image: img,
  },
];

const EcommerceCarousel = () => {
    const swiperRef = useRef(null);
  
    return (
      <section className="ecommerce-carousel">
        <h2>Building The Best Of E-Commerce</h2>
        <p>See what we’ve achieved for brands like yours</p>
  
        <div className="carousel-wrapper">
          <button className="nav-button prev" onClick={() => swiperRef.current?.slidePrev()}>
          <IoIosArrowBack />
          </button>
  
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="carousel-container"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="slide">
                <div className="content">
                  <div className="text-section">
                    <h3>{project.title}</h3>
                    <span className="category">{project.category}</span>
                    <div className="metrics">
                      <div>
                        <strong>{project.salesIncrease}</strong>
                        <p>Increase in Sales</p>
                      </div>
                      <hr />
                      <div>
                        <strong>{project.conversionIncrease}</strong>
                        <p>Increase in Conversion Rate</p>
                      </div>
                      <hr />
                      <div>
                        <strong>{project.orderIncrease}</strong>
                        <p>Increase in Order Value</p>
                      </div>
                    </div>
                    <button className="carousel-button">VIEW CASE STUDY</button>
                  </div>
                  <hr />
                  <div className="image-section">
                    <img src={project.image} alt={project.title} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
  
          <button className="nav-button next" onClick={() => swiperRef.current?.slideNext()}>
          <IoIosArrowForward />
          </button>
        </div>
  
        <button className="view-all">VIEW ALL WORK <MdArrowOutward /></button>
      </section>
    );
  };
  
  export default EcommerceCarousel;