import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SaerchBox.css";
import { useState } from "react";


export default function SearchBox({updateInfo}) {
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="3ce489f2d3dfd8688734462a1c75b16d";
    let [city, setCity] = useState("");
    let [error, setErroe] = useState(false);


    let  getWeatherInfo= async () =>
        {   

          try{

        
           let respond = await  fetch  (`${API_URL}?q=${city} &appid=${API_KEY}&units=metric `);
           let jsonRespond= await respond.json();
           console.log(jsonRespond);

           let result={
            city:city,
            temp:jsonRespond.main.temp,
            tempMin: jsonRespond.main.temp_min,
            tempMax: jsonRespond.main.temp_max,
            humidity: jsonRespond.main.humidity,
            feelsLike: jsonRespond.main.feels_Like,
            weather:jsonRespond.weather[0].description,
           };
           console.log(result);
           return result;
        }
        catch(err)
        {
            throw err;
        }
      }


  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit =  async  (evt) => {
    try{
      evt.preventDefault();
    console.log(city);
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
    }
    catch(err)
    {
      setErroe(true);
    }
  };

  return (
    <div className="Searchbox">
      
      <form onSubmit={handleSubmit}>
        <TextField 
          id="city"
          label="city-name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br /><br />
        <br /><br />
        <Button variant="contained" type="submit">
          SEARCH
        </Button>
        {error && <p style={{color:"red"}}> no such places in our api</p>}
      </form>
    </div>
  );
}
