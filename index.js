import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent =()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s" />
            </div>
            

           
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>

            </div>

        </div>
    )
}
const RestaurantCard = (props)=>{
    return (
        <div className="res-card" style={{backgroundColor : "lightgrey"}}>
            <img className="res-logo" alt="res-logo" src="https://img.cdn4dd.com/p/fit=cover,width=600,height=600,format=auto,quality=50/media/store/header/33c2d920-37bf-41ee-b0de-301acd1fd8b6.jpg"
            />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.rating}</h4>

        </div>
    )
}
const BodyComponent = ()=>{
    return (
        <div className="body">
            <div className="search">
                <div className="input-label">
                    <h4>Search</h4>
                </div>
                <div className="input-field">
                    <input className="inputfield" aria-label="Search"></input>
                </div>
            </div>
           
            <div className="res-container">
            <RestaurantCard resName ="Chillys" cuisine ="Tacos,Nachos,Quesedillas,Molten Lava Cake" rating ="4.9"/>
            <RestaurantCard resName ="MCDonalds" cuisine ="Fries and Burgers" rating ="4.5"/>
            <RestaurantCard resName ="IN-N-OUT" cuisine ="Fries and Burgers" rating ="5.0"/>
            <RestaurantCard resName ="Chick-Fill-A" cuisine ="Fries and Burgers" rating ="4.0"/>
           

            </div>
        </div>

    )
}
const AppComponent = ()=>{

    return (
        <div className="App">
            <div className="heading">
                <HeaderComponent/>
            </div>
            <div className="body">
                <BodyComponent/>

            </div>



        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent/>);

