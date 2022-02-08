import Education from './comp/Education';
import Skils from './comp/Skils';
import './Resume.css';
import Certificate from './comp/Certificant';
import 'animate.css';

export default function Resume() {
  return (
    <section className='resume animate__animated animate__fadeInLeftBig'>
      <div className='resume2'>
        <div style={{ width: '80%', display: 'flex', justifyContent: 'start' }}>
          <h1>Resume</h1>
        </div>
        <div className='items'>
          <Education />
          <Skils />
        </div>
        <Certificate />
      </div>
    </section>
  );
}
