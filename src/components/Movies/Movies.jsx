import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MoviesList } from '../MoviesList';
import { useSearchParams } from 'react-router-dom'; 

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = '0faef55576804b8824855a6bbe4c2da0';

function Movies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams(); 

  useEffect(() => {
    const query = searchParams.get('query');

    if (!query)return; 

  axios
      .get(BASE_URL, {
        params: {
          api_key: API_KEY,
          query: query,
        },
      })
      .then((response) => {
        const results = response.data.results;
        setSearchResults(results);
      })
      .catch((error) => {
        console.error('Error while searching for movies:', error);
      });

  }, [searchParams]);



  const handleSubmit = (e) => {
    e.preventDefault();
if(!searchTerm){alert('write text');return}
    setSearchParams({ query: searchTerm });
  };

  return (
    <div>
      <h1>Search movies</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="searchInput"
          name="searchInput"
          placeholder="Enter a keyword"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button type="submit" className="button-search">
          Search
        </button>
      </form>
      <MoviesList movies={searchResults} />
    </div>
  );
}

export default Movies;