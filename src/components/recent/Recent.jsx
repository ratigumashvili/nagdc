import { Link } from "react-router-dom"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Data from "../../data"
import RecentItem from "./RecentItem"
import "./recent.scss"

const Recent = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style }} onClick={onClick} />;
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style }} onClick={onClick} />;
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="recent">
      <div className="container">
        <div className="last-records">
          <h3 className="last-records-title">ბოლოს დამატებული ჩანაწერები</h3>
          <Link to="/list" className="all-records">
            ყველა ჩანაწერი
          </Link>
        </div>
        <Slider {...settings}>
          {Data.map((item) => (
            <RecentItem
              key={item.id}
              poster={item.poster}
              title={item.title}
              director={item.director}
              operator={item.operator}
              published={item.published}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Recent;
