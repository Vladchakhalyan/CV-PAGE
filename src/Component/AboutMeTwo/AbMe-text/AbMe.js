export default function AbMe() {
  return (
    <>
      <div className="aboutme">
        <div className="aboutme-text">
          <h2>
            About<span> Me</span>
          </h2>
          <p>
            Proin volutpat mauris ac pellentesque pharetra. Suspendisse congue
            elit vel odio suscipit, sit amet tempor nisl imperdiet. Quisque ex
            justo, faucibus ut mi in, condimentum finibus dolor. Aliquam vitae
            hendrerit dolor, eget imperdiet mauris. Maecenas et ante id ipsum
            condimentum dictum et vel massa. Ut in imperdiet dolor, vel
            consectetur dui.
          </p>
        </div>
        <div className="aboutme-text2">
          <p>
            <span style={{ color: "#04b4e0" }}>
              <b>Age</b>{" "}
            </span>{" "}
            32
          </p>
          <p>
            <span style={{ color: "#04b4e0" }}>
              <b>Residence</b>{" "}
            </span>{" "}
            USA
          </p>
          <p>
            <span style={{ color: "#04b4e0" }}>
              <b>Address</b>{" "}
            </span>{" "}
            88 Some Street, Some Town
          </p>
          <p>
            <span style={{ color: "#04b4e0" }}>
              <b>e-mail</b>{" "}
            </span>{" "}
            email@example.com
          </p>
        </div>
      </div>
      <div className="aboutme2">
        <h2>
          What <span style={{ color: "#04b4e0" }}>I do</span>
        </h2>
        <div className="cont">
          <div className="aboutme-text3">
            <span>
              <i class="fas fa-store-alt"></i>
            </span>
            <h3>Ecommerce</h3>
            <p>
              Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
              tortor bibendum massa, sit amet ultricies ex lectus scelerisque
              nibh. Ut non sodales.
            </p>
          </div>
          <div className="aboutme-text3">
            <span>
              <i class="fas fa-pencil-alt"></i>
            </span>
            <h3>Copywriting</h3>
            <p>
              Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
              tortor bibendum massa, sit amet ultricies ex lectus scelerisque
              nibh. Ut non sodales.
            </p>
          </div>
        </div>
        <div className="cont">
          <div className="aboutme-text3">
            <span>
              <i class="fas fa-laptop"></i>
            </span>
            <h3>Web Design</h3>
            <p>
              Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
              tortor bibendum massa, sit amet ultricies ex lectus scelerisque
              nibh. Ut non sodales.
            </p>
          </div>
          <div className="aboutme-text3">
            <span>
              <i class="fas fa-flag"></i>
            </span>
            <h3>Management</h3>
            <p>
              Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
              tortor bibendum massa, sit amet ultricies ex lectus scelerisque
              nibh. Ut non sodales.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
