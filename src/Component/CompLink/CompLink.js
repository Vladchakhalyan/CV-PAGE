import '../CompLink/CompLink.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function CompLink(props) {
  let [clas, setclas] = useState(false);

  return (
    <section className='link'>
      <div className='icon-link'>
        <NavLink exact to='/' activeClassName='cl-home'>
          <i class='fas fa-home'></i>
        </NavLink>
        <NavLink
          to='/AbouteMe'
          activeClassName='cl-abouteme'
          onClick={() => {
            setclas(true);
          }}
        >
          <i class='fas fa-user'></i>
        </NavLink>
        <NavLink to='/cowboy' activeClassName='cl-cowboy'>
          <i class='fas fa-hat-cowboy'></i>
        </NavLink>
        <NavLink to='/briefcase' activeClassName='cl-briefcase'>
          <i class='fas fa-briefcase'></i>
        </NavLink>
        <NavLink to='/book' activeClassName='cl-book'>
          <i class='fas fa-book'></i>
        </NavLink>
        <NavLink exact to='envelope' activeClassName='cl-envelope'>
          <i class='fas fa-envelope'></i>
        </NavLink>
      </div>
      <div className='link-Change'>

      </div>
    </section>
  );
}
