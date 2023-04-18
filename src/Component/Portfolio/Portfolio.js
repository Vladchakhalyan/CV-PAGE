import './Portfolio.css';
import 'animate.css';
import { useState } from 'react';
import imgs from '../img/1.jpg';
import imgs2 from '../img/2.jpg';
import imgs3 from '../img/3.jpg';
import imgs4 from '../img/4.jpg';
import imgs5 from '../img/5.jpg';
import imgs6 from '../img/6.jpg';
export default function Portfolio() {
  let [state, setstate] = useState([
    { name: 'SoundCloud Audio', img: imgs, id: 1 },
    { name: 'Detailed Project 2', img: imgs2, id: 2 },
    { name: 'Vimeo Video 1', img: imgs3, id: 3 },
    { name: 'Detailed Project 1', img: imgs4, id: 4 },
    { name: 'Mockup Design 1', img: imgs5, id: 5 },
    { name: 'YouTube Video 1', img: imgs6, id: 6 },
  ]);

  let [state2, setstate2] = useState([...state]);
  let [state3, setstate3] = useState([...state]);
  let [myimg, setmyimg] = useState(false);

  return (
    <section className='portfolio resume animate__animated animate__flipInY'>
      <div className='portfolio2'>
        <h1>Portfolio</h1>
      </div>
      <div className='filter'>
        <p onClick={() => setstate2(state)}>All</p>
        <p
          onClick={() =>
            setstate2(state.filter((f) => f.id === 2 || f.id === 3))
          }
        >
          Detailed
        </p>
        <p onClick={() => setstate2(state.filter((f) => f.id === 5))}>
          Mockups
        </p>
        <p onClick={() => setstate2(state.filter((f) => f.id === 1))}>
          SoundCloud
        </p>
        <p onClick={() => setstate2(state.filter((f) => f.id === 3))}>
          Vimeo Videos
        </p>
        <p onClick={() => setstate2(state.filter((f) => f.id === 6))}>
          YouTube Videos
        </p>
      </div>
      <div className='portfolio-box'>
        {state2.map((m) => {
          return (
            <div className='box1 animate__animated animate__backInUp'>
              <div style={{ overflow: 'hidden', width: '100%', height: '86%' }}>
                {' '}
                <img
                  src={m.img}
                  onClick={() => setstate3({ ...m }, setmyimg(true))}
                  alt=''
                />
              </div>
              <p style={{ marginTop: '5px' }}>
                <b> {m.name}</b>
              </p>
            </div>
          );
        })}
        <img
          src={state3.img}
          className={`${
            !myimg
              ? 'm-img2'
              : 'm-img box1 animate__animated animate__fadeInDown'
          } `}
          onClick={() => setmyimg(false)}
          alt=''
        />
      </div>
    </section>
  );
}
