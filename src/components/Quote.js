import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {QuoteContainer,Text} from './QuoteStyles'
const url='https://favqs.com/api/qotd'

const Quote = () => {
    const [data,setData]=useState(null)
    useEffect(()=>{
        axios.get(url).then((response)=>{
            setData(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    },[])  //?Dependency array to work only on first load  
   // !console.log(data)

    if(!data) return null
  return (
    <QuoteContainer>
      <Text>{data.quote.body}</Text>
      <Text>-{data.quote.author}</Text>
    </QuoteContainer>
  )
}

export default Quote