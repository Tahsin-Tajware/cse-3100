import { useEffect, useState } from 'react';

const AboutUs = () => {
  const [teamImages, setTeamImages] = useState([]);

  useEffect(() => {
    // Fetching random male profile images for team members from Random User API
    const fetchTeamImages = async () => {
      try {
        const responses = await Promise.all(
          Array(3).fill(0).map(() =>
            fetch('https://randomuser.me/api/?gender=male').then(res => res.json())
          )
        );
        const images = responses.map(response => response.results[0].picture.large); // Fetching the profile image
        setTeamImages(images);
      } catch (error) {
        console.error('Error fetching team images:', error);
      }
    };

    fetchTeamImages();
  }, []);

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
