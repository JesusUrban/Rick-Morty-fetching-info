import React, { useEffect, useState } from 'react';
import useFetch from './hooks/useFetch';
import CardInfo from './components/CardInfo';
import ResidenceList from './components/ResidenceList';
import Search from './components/Search';
import './App.css';

function App() {
  const [location, setLocation] = useFetch();

  const [locationId, setLocationId] = useState(1);

 
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); 

  useEffect(() => {
    setLocation(`https://rickandmortyapi.com/api/location/${locationId}`);
  }, [locationId, setLocation]);


        const totalResidents = location?.residents?.length || 0;
        const totalPages = Math.ceil(totalResidents / itemsPerPage);

        const currentResidents = location?.residents?.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        );

        const handlePageChange = (direction) => {
          if (direction === 'next' && currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
          } else if (direction === 'prev' && currentPage > 1) {
            setCurrentPage(currentPage - 1);
          }
        };

  return (
    <div>
      <div className="hero">
        <div className="image"></div>
      </div>

      <div className="container">
        <Search setLocationId={setLocationId} />

        <CardInfo location={location} />

        
        <ResidenceList residents={currentResidents} />



        {/* Pagination Controls */}
        <div className="pagination__controls">
          <button  className='pagination__buttons'
            onClick={() => handlePageChange('prev')}
            disabled={currentPage === 1}
          >
            Previous
            
          </button>

          <span> Page <strong> {currentPage} </strong> of <strong>{totalPages}</strong> </span>

          <button className='pagination__buttons'
            onClick={() => handlePageChange('next')}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>


      </div>
    </div>
  );
}

export default App;
