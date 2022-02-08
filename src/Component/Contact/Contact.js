import './Contact.css';
import 'animate.css';

export default function Contact() {
  return (
    <section className='contact animate__animated animate__fadeInTopRight'>
      <div className='contact2'>
        <h1>Contact</h1>
        <div className='contact3'>
          <div className='contact4'>
            <div className='contact4-box'>
              <i class='fas fa-map-marker-alt'></i>
              <b>
                {' '}
                <p>San Francisco</p>
              </b>
            </div>
            <div className='contact4-box'>
              <i class='fas fa-phone'></i>
              <b>
                {' '}
                <p>415-832-2000</p>
              </b>
            </div>
            <div className='contact4-box'>
              <i class='fas fa-envelope'></i>
              <b>
                {' '}
                <p>alex@example.com</p>
              </b>
            </div>
            <div className='contact4-box'>
              <i class='fas fa-check-circle'></i>
              <b>
                {' '}
                <p>Freelance Available</p>
              </b>
            </div>
          </div>
          <div className='contact5'>
            <h2>
              How Can I<span style={{ color: '#04b4e0' }}> Help You?</span>
            </h2>
            <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d388865.68042967917!2d44.72208129101563!3d40.40855995000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40401e104b16f05f%3A0xe99c44b82afe72b1!2z0JPQtdCz0LDQvNGB0LrQuNC5INGF0YDQtdCx0LXRgg!5e0!3m2!1sru!2s!4v1631399067911!5m2!1sru!2s'></iframe>
            <div className='contact6'>
              <div className='contact7'>
                <input type='text' placeholder='Full Name' />
                <input type='text' placeholder='Email Address' />
                <input type='text' placeholder='Subject' />
              </div>
              <textarea placeholder='Message' />
            </div>
            <div className='butends'>
              <b>Send message</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
