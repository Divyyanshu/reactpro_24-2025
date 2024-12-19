import Card from "./Component/Card";
import Navbar from "./Component/Navbar";
import { useState } from "react";
import Header from "./Component/Header";
import Footer from "./Component/footer";
import Login from "./Component/LoginData";
import ListFruits from "./Component/ListFruit";
import Fruits from "./Component/Fruits";

function App() {
  const [firstName,setFirstName] = useState("React Singh")
  const [inputValue,setInputValue] = useState("")
  
  const handleClick = () =>{
    setFirstName ("WebReact Blog")
  }
  return (
    <>
    <Navbar/>
      <Login/>
      <Header setInputValue = {setInputValue}/>
      <ListFruits/>
      <Footer inputValue = {inputValue}/>
    <Fruits/>
    <div className="px-72 py-10">
      <h1 className="text-4xl font-bold text-[#2b2f23] mb-5" onClick={handleClick}>{firstName}</h1>
      <p className="text-[#23272F] text-xl font-semibold leading-relaxed">
        This blog is the official source for the updates from the React team.
        Anything important, including release notes or deprecation notices, will
        be posted here first. You can also follow the <span className="text-[#087EA4]">@reactjs </span>account on
        Twitter, but you won’t miss anything essential if you only read this
        blog.
      </p>
    </div>
    <Card heading = "React v19"  dateData = "December 5,2024"/>
    <Card heading = "React Experience"  dateData = "January 14,2025"/>
    <Card heading = "React Logical v5.6"  dateData = "June 12,2021"/>
    <Card heading = "React Documentation"  dateData = "December 19,2022"/>
    <Card heading = "React Singular"  dateData = "September 24,2023"/>
    <Footer inputValue = {inputValue}/>
    </>
  );
}

export default App;
