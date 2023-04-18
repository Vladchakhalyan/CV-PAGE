import './RBlog.css';
import 'animate.css';

export default function RBlog(props) {
  {
    console.log({ ...props });
  }
  return (
    <div className='rblog animate__animated animate__rollIn'>
      <div className='rblog2'>
        <div className='rblogimg'>
          <img src={props.location.img}></img>
        </div>
        <div className='rblog3'>
          <h2>{props.match.params.name}</h2>
          <p>
            Nulla nulla nisl, sodales ac nulla ac, consequat vulputate purus.
            Curabitur tincidunt ipsum vel nibh rutrum accumsan. Nunc ullamcorper
            posuere leo, vitae aliquet risus pharetra in. Integer turpis eros,
            iaculis et mi non, pulvinar egestas leo. Etiam sagittis ex turpis,
            vitae cursus tortor interdum eu. Quisque ultrices nunc eget erat
            vestibulum euismod. Ut mauris nisi, facilisis at arcu nec, facilisis
            porttitor lorem. Vivamus vitae neque molestie, porta libero sed,
            tincidunt leo. In nec posuere odio, id rhoncus lorem. Proin id erat
            ut dolor condimentum viverra. Praesent viverra sed dolor ac luctus.
            Praesent placerat id lorem quis lacinia.
          </p>
          <div className='bb'>
            <p></p>
            Maecenas id finibus felis. Etiam vitae nibh et felis efficitur
            pellentesque. Mauris suscipit sapien nunc, a lacinia nibh feugiat
            ut. In hac habitasse platea dictumst. Larry L. Johnson
          </div>
          <p>
            Etiam interdum vulputate risus, vitae elementum neque consectetur
            sed. Donec at risus dui. Ut in suscipit neque. Vestibulum sit amet
            lobortis magna, commodo venenatis ante. Cras molestie, ex a auctor
            lacinia, risus est aliquam risus, sit amet semper purus tortor id
            ante. Donec lacus ipsum, porttitor et libero a, fringilla auctor
            quam. Sed in nisl id libero tincidunt aliquet. Aenean dui ipsum,
            auctor ut leo ut, semper dignissim lacus. Suspendisse faucibus
            viverra consequat. Maecenas efficitur massa vel eros sagittis
            dapibus. Nam lobortis mi in turpis hendrerit eleifend. Nulla non
            massa felis.
          </p>
          <p>
            Donec sit amet dolor ante. Vivamus vel massa accumsan, faucibus quam
            quis, convallis velit. Aliquam erat volutpat. Integer imperdiet diam
            quis arcu venenatis, quis sagittis nibh rhoncus. Donec non nisi
            scelerisque, sodales metus quis, accumsan mauris. Curabitur volutpat
            risus rutrum erat condimentum tristique. Nullam at felis diam.
            Quisque dictum felis non ante pretium mollis. Aliquam turpis neque,
            varius nec diam a, aliquam pulvinar diam. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Sed ipsum libero, aliquet
            sed bibendum faucibus, semper a dui.
          </p>
          <div className='rblogend'>
            <p
              style={{
                color: '#ffffff91',
                fontSize: '15px',
                marginLeft: '5px',
              }}
            >
              <i class='far fa-clock'></i> March 16,2020 |{' '}
              <i class='fas fa-user'></i>
            </p>
            <p className='mp'>
              <p>
                <i class='fab fa-facebook-f'></i>
              </p>
              <p>
                <i class='fab fa-twitter'></i>
              </p>
              <p>
                <i class='fab fa-linkedin-in'></i>
              </p>
            </p>
          </div>
          <div className='fs'>
            <p>animate</p>
            <p>bar</p>
            <p>desgin</p>
            <p>progress</p>
            <p>ui</p>
          </div>
        </div>
      </div>
    </div>
  );
}
