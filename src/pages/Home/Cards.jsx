import { Link } from "react-router-dom"
import { useState,useEffect } from "react"

export default function Cards(){
let[api,setApi]=useState({"cities":[]})
let[search,setTit]=useState("")
useEffect(()=>{
    let url=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/cities")
    url.then(x=>x.json()).then(x=>{
        console.log(x);
        setApi({cities:x})  
    })
},[])
let valueSearch=(e)=>{
    setTit(e.target.value);
  }
     return(
        <>
         <div id="bg">
            <div id='con'>
            <h1>Welcome to QTrip</h1>
            <p> Explore the world with fantastic places to venture around</p>
             <input type="text" placeholder="Search a City " onChange={valueSearch} style={{paddingLeft:"15px",fontWeight:"1rem",fontSize:"15px",bottom:"-80px",left:"130px"}}></input>
            </div>
            </div>
        <div style={{display:"flex",flexWrap:"wrap", padding:"100px 60px 100px 100px",textAlign:"center", height:"150vh",width:"100%",paddingLeft:"100px"}}>
            {api.cities.filter(x=>x.city.toLowerCase().includes(search)).map(x=>{
                return(
                    <>
                    <Link to={x.id}>
                    <div>
                    <div id="hover" style={{position:"relative"}}>
                        
                   <Link to={"/"}> <img src={x.image} alt="img"  style={{height:"450px", width:"300px",borderRadius:"8px", marginLeft:"20px",marginBottom:"20px"}} id="maimg"/></Link>
                    <div id="text">
                    <h5>{x.city}</h5>
                    <p>{x.description}</p>
                    </div>
                    </div>
                    </div>
                    </Link>
                    </>
                )
            })}
        </div>
        </>
     )
}