import './Blog.css';
import 'animate.css';
import person from '../img/pers.jpg';
import person2 from '../img/pers2.jpg';
import person3 from '../img/pers3.jpg';
import person4 from '../img/pers4.jpg';
import { useEffect, useState } from 'react';

export default function Blog(props) {
  let [state, setstate] = useState([
    { name: 'Why I Switched to Sketch For UI Design', img: person, id: 1 },
    {
      name: 'Best Practices for Animated Progress Indicators',
      img: person2,
      id: 2,
    },
    {
      name: 'Designing the Perfect Feature Comparison Table',
      img: person3,
      id: 3,
    },
    { name: 'An Overview of E-Commerce Platforms', img: person4, id: 4 },
  ]);

  let [state2, setstate2] = useState([...state]);

  return (
    <section className='blog animate__animated animate__rotateIn'>
      <div className='blog2'>
        <h1>Blog</h1>
        <div className='blog3'>
          {state.map((m) => {
            return (
              <div className='blog4'>
                <div className='blog4-img'>
                  <img
                    src={m.img}
                    alt=''
                    onClick={() => {
                      props.history.push({
                        pathname: '/book/' + m.name,
                        img: m.img,
                      });
                    }}
                  />
                  <i class='far fa-bookmark'></i>
                </div>
                <div className='blog4-text'>
                  {' '}
                  <p>{m.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
