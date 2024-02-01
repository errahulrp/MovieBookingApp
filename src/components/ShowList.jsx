import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ShowList = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(response => response.json())
            .then(data => setShows(data))
            .catch(error => console.error('Error fetching shows:', error));
    }, []);

    return (
        <div>
            <h1 className='flex justify-center p-5 font-serif text-6xl'> Book Your Movie Now...</h1>
            <div className="flex justify-center gap-9 flex-wrap">
                {shows.map(show => (
                    <div className="col-md-4 mb-4" key={show.show.id}>
                        <Link to={`/show/${show.show.id}`}>
                            <div className="w-48 h-80 rounded-xl bg-gradient-to-tr to-[#8ecae6] from-[#023047] ">
                                <img src={show.show.image ? show.show.image.medium : ''} className="p-5 rounded-3xl" alt={show.show.name} />
                                <div className="flex justify-center font-serif text-lg text-white">
                                    <h5 className="mt-2">{show.show.name}</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShowList;
