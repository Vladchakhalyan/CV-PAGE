import './AboutMe.css';
import me from '../img/main_photo.jpg';
import 'animate.css';

export default function AboutMe(props) {
  return (
    <section className='item'>
      <div className='item-img'>
        <img src={me} />
        <span></span>
      </div>
      <b>
        {' '}
        <h2 className='item-h2'>Alex Smith</h2>
      </b>
      <b>
        <h3 className='item-h3'>Web Designer</h3>
      </b>
      <div className='item-icon'>
        <p>
          <b>
            {' '}
            <i class='fab fa-linkedin-in'></i>
          </b>
        </p>
        <p>
          {' '}
          <b>
            {' '}
            <i class='fab fa-facebook-f'></i>
          </b>
        </p>
        <p>
          <b>
            {' '}
            <i class='fab fa-twitter'></i>
          </b>
        </p>
      </div>
      <div className='item-but'>
        <p>
          <b>Download CV</b>
        </p>
      </div>
      <p className='p-end'>© 2020 All rights reserved.</p>
    </section>
  );
}
