import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Birman' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Persian' },
  { name: 'Luna', age: '4', breed: 'Siamese' },
  { name: 'Simba', age: '2', breed: 'Abyssinian' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
     // Fetch cat images from an API endpoint and assign it to the featuredCats list
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json()))
        );
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
        setFilteredCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  // Filter cats based on breed and search term
  useEffect(() => {
    const filtered = cats.filter(
      (cat) =>
        (selectedBreed === '' || cat.breed === selectedBreed) &&
        (searchTerm === '' || cat.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredCats(filtered);
  }, [selectedBreed, searchTerm, cats]);

  return (
    <section className="container mt-4">
    
      <h2 className="text-center mb-3">Available Cats</h2>

      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-3 pb-3 border-bottom shadow-sm">
  
        <div className="mb-2 mb-md-0">
          <label htmlFor="breedFilter" className="form-label mb-1">
            Select Breed:
          </label>
          <select
            id="breedFilter"
            className="form-select"
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
            style={{ width: '250px' }}
          >
            <option value="">All Breeds</option>
            <option value="Sphynx">Sphynx</option>
            <option value="Birman">Birman</option>
            <option value="Bengal">Bengal</option>
            <option value="Persian">Persian</option>
            <option value="Siamese">Siamese</option>
            <option value="Abyssinian">Abyssinian</option>
          </select>
        </div>

       
        <div>
          <label htmlFor="nameSearch" className="form-label mb-1">
            Search by Name:
          </label>
          <input
            type="text"
            id="nameSearch"
            className="form-control"
            placeholder="Enter cat name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '250px' }}
          />
        </div>
      </div>
      <div className="row g-4">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-6 col-md-4 col-lg-3">
            <div
              className="p-3"
              style={{
                border: '1px solid #ddd',
                borderRadius: '12px',
                textAlign: 'center',
                height: '250px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                style={{
                  borderRadius: '8px',
                  height: '150px',
                  objectFit: 'cover',
                  marginBottom: '8px',
                }}
              />
              <div>
                <h5 style={{ marginBottom: '4px', fontWeight: 'bold' }}>{cat.name}</h5>
                <p style={{ margin: '0', fontSize: '0.9rem' }}>Age: {cat.age}</p>
                <p style={{ margin: '0', fontSize: '0.9rem', color: '#555' }}>Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
