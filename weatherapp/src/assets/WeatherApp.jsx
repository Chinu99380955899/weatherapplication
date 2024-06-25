import SearchBox from './SearchBox';
import InfoBox from '../InfoBox';
import { useState } from 'react';


export default  function WetherApp()
{
    const [weatherInfo,setWeatherInfo] =useState({
        city: "delhi",
        feelsLike: 232424,
        temp: 25,
        weather: "haze",
        tempMax: 36.05,
        tempMin: 36.05,
        humidity: 30,
    });

    let updateInfo =(result) =>
        {
            setWeatherInfo(result);
        }
  return(
     <div  style={{textAlign:"center"}}>
        
            <h2>weather app  by Chinmaya sutar</h2>
            <SearchBox  updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
             
            
        
     </div>
  )
}