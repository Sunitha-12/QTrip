import React,{Component} from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";
import Footer from "./Footer";
export default class Final extends Component{
    render(){
        return(
            <>
            <Navbar></Navbar>
            <Cards></Cards> 
            <Footer></Footer>
            </>
        )
    }
}   