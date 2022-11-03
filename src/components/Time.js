import React from 'react'
import Moment  from 'react-moment'
import 'moment-timezone'
import {Welcom,TimeStamp,Greeting} from './TimeStyles'

const Time = () => {
    let today =new Date()


    let greeting = () =>{
        if(today.getHours() >= 5 && today.getHours() < 11){
            return 'Good morning, Uday.'
        }else if (today.getHours() >=11 && today.getHours() < 17){
            return 'Good afternoon, Uday.'
        }else if (today.getHours() >= 17 && today.getHours() < 24){
            return 'Good evening, Uday.'
        }else{
            return 'What are you doing up this hour?'
        }
        
    }
  return (
    <Welcom>
        <TimeStamp><Moment format='LT'></Moment></TimeStamp>
        <Greeting>{greeting()}</Greeting>
    </Welcom>
  )
}

export default Time