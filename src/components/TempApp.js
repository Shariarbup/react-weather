import React, { useEffect, useState } from 'react';
import './css/style.css';
function TempApp() {

    const [city, setCity]= useState(null);
    const [search, setSearch]= useState('Dhaka');
    useEffect(()=>{
        const fetchApi = async()=>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7255f39d262e505ec5c7fc6fb1b9f7a8`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
            // console.log(response);
        }
        fetchApi();
    }, [search])
    return (
        <>
           <div className="box">
                <div className="inputData">
                    <input type="search"
                    className="inputField"
                    value={search}
                    onChange={(event)=>{
                        setSearch(event.target.value);
                    }}
                    />
                    
                </div>  

                {
                    !city ? (
                        <p className="errorMsg">No Data Found.</p>
                    ) : (
                        <div>
                         <div className="info">
                            <h2 className="location">
                                <i className="fas fa-street-view">{search}</i>
                            </h2>
                            <h1 className="temp">
                                {city.temp} °C
                            </h1>
                            <h3 className="tempmin_max">Min: {city.temp_min} °C | Max: {city.temp_max} °C</h3>

                        </div>
                       
                        </div>
                    )
                } 
             <div className="wave -one"></div>
             <div className="wave -two"></div>
             <div className="wave -three"></div>
            
            </div> 
        </>
    )
}

export default TempApp
