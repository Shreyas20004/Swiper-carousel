/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules"
import Card from "./Card"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"

const Carousel = ({ items }) => {
  return (
    <div className="relative w-full py-20 ">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        pagination={{ clickable: true}}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        breakpoints={{
          272: {
            slidesPerView: 1,

          },
          640: {
            slidesPerView: 2,

          },
          1024: {
            slidesPerView: 3,

          },
        }}
        className="mySwiper w-[80%] "
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="swiper-slide">
            <Card title={item.title} description={item.description} img={item.img} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev xs:!w-4 xs:!h-4 lg:!w-9 xs:text-sm  sm:!w-6 lg:!h-9  sm:!h-6 !bg-gray-500 !rounded-full !text-white after:!text-lg"></div>
      <div className="swiper-button-next xs:!w-4 xs:!h-4 lg:!w-9 xs:text-sm  sm:!w-6 lg:!h-9  sm:!h-6 !bg-gray-500 !rounded-full !text-white after:!text-lg "></div>
    </div>
  )
}

export default Carousel

