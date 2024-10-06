import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function KolkataCards(){
    let[api,setApi]=useState([])
    useEffect(()=>{
    let res=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures?city=singapore").then(x=>x.json()).then(x=>{
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
                           <img src={x.image} alt="cardimg1" style={{width:"300px"}}/> 
                            <div className="Menusub_InnerCard_Details">
                            <p id="tit">{x.name}</p>
                            <p>{x.costPerHead}</p>
                            <p>{x.currency}</p>
                            <p>{x.duration}</p>
                            <p>{x.category}</p>
                            </div>
                           </>
                            
                        )
                    })
                }

        </>
    )
}
export default KolkataCards