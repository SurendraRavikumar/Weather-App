import { useState } from 'react'
import InfoBox from './InfoBox'
import SearchBox from './SearchBox'
export default function WeatherApp() {
    const[weatherInfo,setWeatherInfo]=useState({
        city: "Delhi",
        feelsLike: 21.04,
        temp: 22.05,
        tempMin: 22.05,
        tempMax: 22.05,
        humidity: 28,
        weather: "haze"
    });

    // function to Update the new Weather Infomation
    let updateInfo = (newinfo)=>{
        setWeatherInfo(newinfo);
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}