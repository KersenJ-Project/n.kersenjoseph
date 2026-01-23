import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/" element={<AboutUs />}/>
            <Route path="/" element={<Contact />}/>
        </Routes>
    )
}