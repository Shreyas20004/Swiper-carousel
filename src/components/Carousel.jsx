/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination, Navigation, Keyboard} from "swiper/modules"
import Card from "./Card"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"

const Carousel = ({ items }) => {
  return (
    <div className="relative w-full ">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        slidesPerGroup={1}
        loop={true}
        autoplay={{ delay:500 }}
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
        keyboard={{
          enabled: true, 
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Keyboard]}
        
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
        className="mySwiper"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="swiper-slide">
            <Card title={item.title} description={item.description} img={item.img} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev xs:!w-4 xs:!h-4 lg:!w-9 xs:text-sm  sm:!w-6 lg:!h-9  sm:!h-6 !bg-gray-500 !rounded-full !text-white after:!text-lg overflow-hidden absolute"></div>
      <div className="swiper-button-next xs:!w-4 xs:!h-4 lg:!w-9 xs:text-sm  sm:!w-6 lg:!h-9  sm:!h-6 !bg-gray-500 !rounded-full !text-white after:!text-lg overflow-hidden absolute"></div>
    </div>
  )
}

export default Carousel

