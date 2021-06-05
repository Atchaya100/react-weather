import './Home.css'
import React from 'react'
import {useState} from 'react'
const api={
    key: '660a0b5c183919cb2f0abee0f1765dba',
    base:'api.openweathermap.org/data/2.5/'
}


const Home=()=>{
   const [date,setDate]=useState();
   const[time,setTime]=useState();
   const[query,setQuery]=useState();
   const[weather,setWeather]=useState([]);
  
    setInterval(()=>{
        setDate(new Date().toLocaleDateString());
        setTime(new Date().toLocaleTimeString());
    },1000);

    
    
    const search=(evt)=>{
         if(evt.key=="Enter"){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=660a0b5c183919cb2f0abee0f1765dba`)
        .then(res =>{ return res.json();}).then(
            data=>{
               setWeather(data) 
             console.log(data);
                 })
             
        }
    }
     
    function handleChange(e){
       var lists=e.target.value
       setQuery(lists)
    }
    

    return(
    <div className='body'>
        <h2 className="head">WEATHER APP</h2>
        <p className="timer1">{time}</p>
        <p className="timer2">{date}</p>
        <input type="text" className="search" placeholder="type city name & click enter" value={query}
         onChange={handleChange}
        onKeyPress={search}  />
        {weather.cod===200? 
        <div>
        <div>
        <p className="border">{weather.name},{weather.sys.country}</p>
        <div><ul><li className="temp1">TEMPERATURE: {weather.main.temp} &deg;C</li>
        <li className="temp1">WIND SPEED:{weather.wind.speed} m/s</li></ul>
        <ul>
        <li className="temp2">MAX TEMP: {weather.main.temp_max} &deg;C</li>
        <li className="temp2">MIN TEMP: {weather.main.temp_min} &deg;C</li></ul></div>
        <p></p>
        </div>

        
        
    
    
       </div>
     :null }
     {weather.cod==="404"?<p className="border">enter the valid city name</p>:null}
       
     </div>
    )
}
 export default Home


 