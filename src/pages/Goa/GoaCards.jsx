import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
function GoaCards(){
    let[api,setApi]=useState([])
    useEffect(()=>{
    let res=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures?city=goa").then(x=>x.json()).then(x=>{
        // console.log(x);
        setApi(x)
    })
    },[])
    console.log(api);
    
    return(
        <>
           <div className="MenupartHeader">
                <h1 id="MenuName">Explore all adventures</h1>
                <p id="Menudata">Here's a list of places that you can explore in city</p>
                <div className="headposition">
                    <div id="headInner">
                    <p>Filters:</p>
                    <button>Filter by Duration(Hours)</button>
                    <p>Clear</p>
                    <p>Clear</p>
                    <p>Clear</p>
                    </div>
                </div>
                </div>
                {
                    api.map(x=>{
                        return(

                        
                           <>
                           <div className="card" >
                           <img className="card-img" src={x.image} alt="cardimg1"/> 
                            <p className="card-title">{x.name}</p>
                            <p className="card-subtitle">{x.costPerHead}</p>
                            <p className="card-title">{x.currency}</p>
                            <p className="card-subtitle">{x.duration}</p>
                            <button id="apple">{x.category}</button>
                            </div>
                           </>
                            
                        )
                    })
                }

        </>
    )
}
export default GoaCards