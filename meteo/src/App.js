import React, {useState} from "react";
import axios from "axios"

function App() {
  const [data,setData] = useState({})
  const [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4380b35e16bb67d50f90b771b17690c1&units=metric&lang=fr`

  const searchLocation = (event) => {
   if (event.key === 'Enter') { 
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  }
  }

  return (
    <div className="app">
      <div className="search">
        <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyDown={searchLocation}
        placeholder='localisation'
        type="text"/>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>

          <div className="temp">
            {data.main ? <h1>{data.main.temp}°</h1> : null}
          </div>

          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name != undefined &&
        <div className="bottom">
         <div className="feels">
          {data.main ? <p className="bold">{data.main.feels_like}°</p> : null}
          
          <p>Ressenti</p>
         </div>
         <div className="humidity">
          {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
          <p>Humidité</p>
         </div>
         <div className="wind">
           {data.wind ? <p className="bold">{data.wind.speed}km/h</p> : null}
          <p>vent</p>
         </div>

        </div>
}

      </div>
      
    </div>
  );
}

export default App;
