import './style.css'; 
import React, { useEffect, useState } from 'react';
import Weathercard from './weathercard';

const Temp = () => {

    const [searchValue,setValue ] = useState("karachi");
    const [getTemp,setTemp] = useState({});
    const getWeatherInfo = async() =>{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=bd5e378503939ddaee76f12ad7a97608`;
            const res = await fetch(url);
            const data = await res.json();
            const {temp,humidity,pressure} = data.main;
            const {main: weatherMood} = data.weather[0];
            const {name} = data;
            const {speed} = data.wind;
            const {country,sunset} = data.sys;
            const myWeather = {
                temp,humidity,pressure,name,weatherMood,speed,country,sunset
            };
            setTemp(myWeather);


        }catch(error){
            console.log(error)
        }

    }
    
    useEffect(()=> {
        getWeatherInfo();
    },[]);
  return (
    <>
    <div className='wrap'>
        <div className='search'>
            <input type='search' placeholder='search..' autoFocus id="search"
            className='searchItem' value={searchValue} onChange={(e)=>{setValue(e.target
            .value)}}/> 
            <button className='searchButton' type="button" onClick={getWeatherInfo}>Search</button> 
        </div>
    </div>

    <Weathercard getTemp={getTemp}/>
    
      
    </>
  )
}

export default Temp
