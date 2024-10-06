import React,{Component} from "react";
export default class Navbar extends Component{
    render(){
        return(

            <React.StrictMode>
            <>
            <div className="header">
                <p id="tit">QTrip</p>
                <div  className="header home">
                <p>Home</p>
                <p>Reservations</p>
                <p id="logi">Login Here</p>
                </div>
                 <button id="btn">Register</button>
            </div>
            <div className="container">© QTrip 2022</div>
            </>
        </React.StrictMode>
            )
    }
}