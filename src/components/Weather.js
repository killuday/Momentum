import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {WeatherContainer,Temp,City} from './WeatherStyles'


const url='https://api.openweathermap.org/data/2.5/weather?lat=31.5164555&lon=76.8700830&units=metric&appid=c9c1db02386ba3252f8381bbff737b8c'


const Weather = () => {
    const [data,setData]=useState(null)

    useEffect(()=>{
        axios.get(url).then((response)=>{
            setData(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    },[])
    console.log(data)

    if(!data) return null;


  return (
    <WeatherContainer>
<Temp>{data.main.temp.toFixed(0)}&#176;</Temp>
<City>Sunder Nagar</City>
    </WeatherContainer>
  )
}

export default Weather