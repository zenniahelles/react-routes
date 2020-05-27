import React, { useState, useEffect } from 'react';

export default function Movies(props) {

    const [apiData, setApiData] = useState(null);

    async function getMovie() {
        const fetchHeaders = new Headers();
        fetchHeaders.append('Accept', 'application/json');
        try {
            console.log(apiData)
            const request = await fetch('https://ghibliapi.herokuapp.com/films', { headers: fetchHeaders });
            const response = await request.json();
            setApiData(response);
        } catch (error) {
            console.log('getMovie -> Error', error);
        }
    }

    useEffect(() => {
        getMovie()
    }, [])

    return (
        <div>
            <h2>Movies</h2>
            <section>
                <p>This is the React Movies page.</p>
                
                <br />
{/*indsæt .slice(0,5) efter apiData og før map for at bestemme hvor mange film skal vises. Her er det 5.*/}
                {
                    apiData && apiData.length > 0 && apiData.slice(0, 5).map((item, i) =>
                        <div key={item.title}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <p>Director: {item.director}</p>
                            <p>Producer: {item.producer}</p>
                            <p>Release date: {item.release_date}</p>
                            <p>Rotten Tomato score: {item.rt_score}</p>
                            <br />
                        </div>
                    )
                }

            </section>
        </div>
    )
}