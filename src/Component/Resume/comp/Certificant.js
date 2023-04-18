import logo from '../../img/client-1.png';

export default function Certificate() {
  return (
    <div className='certificates'>
      <h3>Certificates</h3>
      <div className='c-box'>
        <div className='box1'>
          <p>
            <img src={logo} />
          </p>
          <div className='span'>
            <div>
              <h5>Psyhology of Intertnation Design</h5>
              <span>Membership ID: XXXX</span>
            </div>
          </div>
        </div>
        <div className='box1'>
          <p>
            <img src={logo} />
          </p>
          <div className='span'>
            <div>
              <h5>Psyhology of Intertnation Design</h5>
              <span>Membership ID: XXXX</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
