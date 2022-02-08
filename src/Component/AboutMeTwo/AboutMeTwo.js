import './AboutMeTwo.css';
import AbMe from './AbMe-text/AbMe';
import AbMeimg from './AbMe-text/AbMe-img/AbMe-img';
import AbMeFour from './AbMe-text/AbMe-Four';
import AbMeFive from './AbMeFive';
import 'animate.css';
import AbMeSaven from './AbMe-text/AbMeSaven';
import { Change } from '../../stayle';

export default function AboutMeTwo(props) {
  return (
    <section className='item-aboutme animate__animated animate__backInDown'>
      <div className='item-aboutme2'>
        <AbMe />
        <AbMeSaven />
        <AbMeimg />
        <AbMeFour />
        <AbMeFive />
      </div>
    </section>
  );
}
