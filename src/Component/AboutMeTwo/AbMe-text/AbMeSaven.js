import person from '../../img/person.jpg';
import person2 from '../../img/person2.jpg';
import person3 from '../../img/person3.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Change } from '../../../stayle';

export default function AbMeSaven() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className='aboutme6'>
      <div className='change-box'>
        <h3>Testimonials</h3>
        <p></p>
      </div>
      <div className='aboutme6-box'>
        <Change>
          <Slider {...settings}>
            <div className='box1'>
              <img src={person3} />
              <p>
                Vivamus at molestie dui, eu ornare
                <br /> orci. Curabitur vel egestas dolor.
                <br /> Nulla condimentum nunc sit amet
                <br /> urna tempus finibus. Duis mollis leo <br /> id ligula
                pellentesque, at vehicula dui ultrices.
              </p>
              <div
                style={{
                  width: '212px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '10px',
                }}
              >
                <div className='boxend'>
                  <h3>Kristin Carroll</h3>
                  <span>Helping Hand</span>
                </div>
                <div>
                  <i class='fas fa-quote-right'></i>
                </div>
              </div>
            </div>
            <div className='box1'>
              <img src={person} />
              <p>
                Vivamus at molestie dui, eu ornare
                <br /> orci. Curabitur vel egestas dolor.
                <br /> Nulla condimentum nunc sit amet
                <br /> urna tempus finibus. Duis mollis leo <br /> id ligula
                pellentesque, at vehicula dui ultrices.
              </p>
              <div
                style={{
                  width: '212px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '10px',
                }}
              >
                <div className='boxend'>
                  <h3>Robert Watkins</h3>
                  <span>Endicott Shoes</span>
                </div>
                <div>
                  <i class='fas fa-quote-right'></i>
                </div>
              </div>
            </div>
            <div className='box1'>
              <img src={person2} />
              <p>
                Vivamus at molestie dui, eu ornare
                <br /> orci. Curabitur vel egestas dolor.
                <br /> Nulla condimentum nunc sit amet
                <br /> urna tempus finibus. Duis mollis leo <br /> id ligula
                pellentesque, at vehicula dui ultrices.
              </p>
              <div
                style={{
                  width: '212px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '10px',
                }}
              >
                <div className='boxend'>
                  <h3>Julia Hickman</h3>
                  <span>Omni Source</span>
                </div>
                <div>
                  <i class='fas fa-quote-right'></i>
                </div>
              </div>
            </div>
          </Slider>
        </Change>
      </div>
    </div>
  );
}
