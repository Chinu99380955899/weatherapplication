import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({info}) {
  const INIT_URL =
    "https://plus.unsplash.com/premium_photo-1666726721652-a15e685e48a0?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    const HOT_URL="https://media.istockphoto.com/id/1448263415/photo/the-sun-in-the-yellow-sky.jpg?s=1024x1024&w=is&k=20&c=sNMLMJR0K0B783HXx1TPixa_kWTVG4Ff_n6q7epBTJI="
    const COLD_URL="https://images.unsplash.com/photo-1566475761355-d64c2fe80e64?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    
  return (
    <div className="InfoBox">
     
      <div className="cardContainer">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={info.humidity>80?RAIN_URL:(info.temp>15?HOT_URL:COLD_URL)} title="green iguana" />
        <br /><br />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <br /><br />
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>TEMPRATURE:{info.temp}&deg;C</p>
            <p>HUMIDITY:{info.humidity}</p>
            <p>TEMP-MAX:{info.tempMax}&deg;C</p>
            <p>TEMP-MIN:{info.tempMin}&deg;C</p>
            <p>WEATHER:{info.weather}</p>
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}
