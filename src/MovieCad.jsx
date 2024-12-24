import { useState, useEffect } from "react";


const MovieCad = () => {
  const [data, setData] = useState(['']);

  // Correct: Only call fetch once on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyapi.online/api/movies")
        // console.log(response)
        // .then(res =>{
        //     console.log(res)
        //     setData(res)
        // })
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once
  console.log( data);
  return (
    <div>
      <div className="bg-slate-500 p-4 flex justify-center items-center">
      <h1>Movie Information</h1>
      </div>
      <div>
      {data ? <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.map((movie) =>  
          <div className="bg-slate-400 p-4" key={movie.id}>
           <img src={movie.image} alt="Images Not Fond" />
            <div>
              <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer">
                <button className="btn">Go to New Site</button>
              </a>
            </div>
            <h2>Movie Name : {movie.movie}</h2>
            <p>Rating : {movie.rating}</p>
          </div>
        )}
      </div> : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default MovieCad;
