import React,{Component}  from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BengaluruCards from "./pages/bengalore/BengaluruCards";
import Final from "./pages/Home/Final";
import GoaCards from "./pages/Goa/GoaCards";
import KolkataCards from "./pages/Kolkata/Kolkata";
import MalasiaCards from "./pages/Malasia/Malasia";
import Bangkok from "./pages/Bangkok/Bangkok"
import NewYorkCards from "./pages/NewYork/NewYork";
import ParisCards from "./pages/Paris/ParisCards";
import Shiwood from "./pages/bengalore/BangCurosel";
import Banglore2 from "./pages/bengalore/Banglore2";
import Banglore3 from "./pages/bengalore/Banglore3";
import Banglore4 from "./pages/bengalore/Banglore4";
import Banglore5 from "./pages/bengalore/Banglore5";
import Banglore6 from "./pages/bengalore/Banglore6";
import Banglore7 from "./pages/bengalore/Banglore7";
import Banglore8 from "./pages/bengalore/Banglore8";
import Banglore9 from "./pages/bengalore/Banglore9";

export default class App extends Component{
    render(){
        return(
            <>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Final/>}></Route>
                <Route path='/bengaluru' element={<BengaluruCards/>}/>
                <Route path='/goa' element={<GoaCards/>}/>
                <Route path='/kolkata' element={<KolkataCards/>}/>
                <Route path='/malaysia' element={<MalasiaCards/>}/>
                <Route path='/bangkok' element={<Bangkok/>}/>
                <Route path='/new-york' element={<NewYorkCards/>}/>
                <Route path='/paris' element={<ParisCards/>}/>
                <Route path='/shiwood' element={<Shiwood/>}/>
                <Route path='/Niaboytown' element={<Banglore2/>}/>
                <Route path="/Fort Sionnn" element={<Banglore3/>}/>
                <Route path="/Wooddaux" element={<Banglore4/>}/>
                <Route path="/Bageorge With Nonshi Harbour" element={<Banglore5/>}/>
                <Route path="/Stonelumhawk" element={<Banglore6/>}/>
                <Route path="/La Anrncast" element={<Banglore7/>}/>
                <Route path="/Fort Shilbluff" element={<Banglore8/>}/>
                <Route path="/East Vyfolk" element={<Banglore9/>}/>


            </Routes>
            </BrowserRouter>
            </>
        )
    }
}