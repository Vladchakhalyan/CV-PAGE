import img1 from '../../../img/client-2.png';
import img2 from '../../../img/client-3.png';
import img3 from '../../../img/download.png';
import img4 from '../../../img/client-5.png';
import img5 from '../../../img/client-6.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Change } from '../../../../stayle';

export default function AbMeimg() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className='aboutme3'>
      <div className='aboutme-text4'>
        <h3 className='aboutme3-h3'>Cilents</h3>
        <p className='aboutme3-p'></p>
      </div>
      <div className='aboutme3-imgs'>
        <Change>
          <Slider {...settings}>
            <img src={img1} />
            <img src={img2} />
            <img src={img3} />
            <img src={img4} />
            <img src={img5} />
            <img src={img3} />
            <img src={img1} />
          </Slider>
        </Change>
      </div>
    </div>
  );
}
