import { useEffect, useState } from "react";

const useGetGenres = () => {
  const [genres, setGenres] = useState([]);
//   const API_URL = `https://api.themoviedb.org/3/genre/movie/list?language=en`
  const API_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key={9d88e942649d06a8e29f9c68d6153ba1} &language=en`;
  const options = {method: 'GET', headers: {accept: 'application/json'}};
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(API_URL,options);
        const data = await response.json();
        setGenres(data.genres);
        console.log(data)
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, [API_URL]);

  return genres;
};

export default useGetGenres;





// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));