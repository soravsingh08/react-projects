import axios from "axios"
import { useEffect, useState } from "react"



const SeventyEightUE =()=>{
const [data, setData] = useState([])
async function getData(){
 const response =  await axios.get('https://randomuser.me/api/')
 setData(response.data.results)
}

useEffect(function(){
  console.log("useEffect Chala")
},[data])
  return(
    <>
   <button className="px-4 py-3  text-2xl active:scale-95  m-5 bg-emerald-500 rounded " onClick={getData}>Get Data</button>

    {data.map((item,idx)=>{
    return <div key={idx}>
     <h1 className="text-8xl m-5">{item.name.first}</h1>
  
    </div>

    })}
   



    </>
  )

}

export default SeventyEightUE;