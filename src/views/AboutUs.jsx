import {} from 'react';

const AboutUs = () => {
  const teamImages = [
    'https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fHww', 
    'https://t3.ftcdn.net/jpg/03/28/19/46/360_F_328194664_RKSHvMLgHphnD1nwQYb4QKcNeEApJmqa.jpg',
    'https://media.istockphoto.com/id/507995592/photo/pensive-man-looking-at-the-camera.jpg?s=612x612&w=0&k=20&c=fVoaIqpHo07YzX0-Pw51VgDBiWPZpLyGEahSxUlai7M=', 
  ];

  return (
    <section className="container mt-4">
      <h2 className="mb-3">Our mission</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc.
      </p>

      <h2 className="mb-3 mt-5">Our history</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc.
      </p>

      <h2 className="mb-3 mt-5">Our team</h2>
      <div className="row g-4">
         {/*  Member 1  */}
        <div className="col-md-4">
          <div className="team-card text-center border p-3" style={{ borderRadius: '8px' }}>
            <div
              className="mb-3"
              style={{
                height: '200px',
                width: '200px',
                borderRadius: '50%', 
                backgroundImage: `url(${teamImages[0]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                margin: '0 auto', 
              }}
            ></div>
            <div>
              <h5 className="mb-1">Tahsin Tajware</h5>
              <p className="m-0">Director</p>
            </div>
          </div>
        </div>
        {/*  Member 2 */}
        <div className="col-md-4">
          <div className="team-card text-center border p-3" style={{ borderRadius: '8px' }}>
            <div
              className="mb-3"
              style={{
                height: '200px',
                width: '200px',
                borderRadius: '50%', 
                backgroundImage: `url(${teamImages[1]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                margin: '0 auto', 
              }}
            ></div>
            <div>
              <h5 className="mb-1">Sonod Sadman</h5>
              <p className="m-0">Director</p>
            </div>
          </div>
        </div>
        {/*  Member 3 */}
        <div className="col-md-4">
          <div className="team-card text-center border p-3" style={{ borderRadius: '8px' }}>
            <div
              className="mb-3"
              style={{
                height: '200px',
                width: '200px',
                borderRadius: '50%', 
                backgroundImage: `url(${teamImages[2]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                margin: '0 auto', 
              }}
            ></div>
            <div>
              <h5 className="mb-1">Tamim Iqbal</h5>
              <p className="m-0">Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
