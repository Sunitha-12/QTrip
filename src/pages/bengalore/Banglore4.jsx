import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
export default function Banglore4(){
    let[api,setApi]=useState([])
    useEffect(()=>{
    let url=fetch("https://qtripdynamic-qa-frontend.vercel.app/pages/adventures/detail/?adventure=0355034513");
    url.then((x)=>x.json()).then((y)=>setApi([y]))
    },[])
    return(
        <>
        <Navbar></Navbar>
        {
            api.map(x=>{
                console.log(x);
                return(
                    <>
                    
                    <h1 style={{marginBottom:"15px",marginLeft:"300px"}}>{x.name}</h1>
                    <h2 style={{marginBottom:"15px",marginLeft:"300px"}}>{x.subtitle}</h2>
                    <div className="cdiv">
                        <Carousel>
                        <img src={x.images[0]} alt=""   /> 
                        <img src={x.images[1]} alt=""    /> 
                        <img src={x.images[2]} alt=""/>
                        </Carousel>
                    </div>
        
                    <hr />
                    <h3 style={{marginBottom:"10px",fontWeight:"bold",fontSize:"1.8rem",marginLeft:"300px"}}>About The Experience</h3>
                    <p style={{width:"700px",marginLeft:"300px"}}>{x.content}</p>
                    
                    </>
                )
            })
        }
        <Footer></Footer>
        </>
    )
}