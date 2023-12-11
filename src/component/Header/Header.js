import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useBetween } from "use-between";
import './Header.css'
import { NavLink } from "react-router-dom";
import Logo from "../../img/realluxs.png";
import Hand from "../../img/waving_hand.gif"
import axios from "axios";



const Header = () => {


    // <get the data from rducers>
    const state = useSelector((state) => state.data);

    const { adminLogIn, setAdminLogIn, OrderList, setOrderList,notification, setNotification } = useBetween(state.useShareState);
    // </get the data from rducers>
    const state1 = useSelector((state) => state.data1);

    const { lang, setLang, arraylang } = useBetween(state1.useShareState);
    const [num, setNum] = useState(0)
   

    const switchLang = () => {
        if (num % 2 == 0) {
            if (lang == 'en') { setLang('ar'); }
            else { setLang('en'); }
        }
        setNum(num + 1)


    }



    const ClickBrgBtn = () => {
        const burgerButton = document.getElementById("burger");
        const menu = document.getElementById("menu");
        const overlay = document.querySelector(".overlay");
        burgerButton.classList.add("active");
        overlay.classList.add("active");
        menu.classList.add("active");

    }

    const Overlay = () => {
        const burgerButton = document.getElementById("burger");
        const menu = document.getElementById("menu");
        const overlay = document.querySelector(".overlay");
        burgerButton.classList.remove("active");
        overlay.classList.remove("active");
        menu.classList.remove("active");
    };
    const checkNewReq = async () => {
     
        try {
            const { data } = await axios.get('https://realluxs.onrender.com/deliveryreqts')

            setOrderList(data.data)
           
            if (OrderList.length != 0){
           
                OrderList.toReversed().map((item, i) => {
                    if (item.show == false) {
                 
                        setNotification(true)
                        
                     
                    }
                })
            }

        }
        catch (error) {
            console.log(error)
        }




    }
    const intervalMilliseconds = 35000;
    setInterval(() => {

        checkNewReq()
    }, intervalMilliseconds);
    // dropdown
    // const hasSubMenuElements = document.querySelectorAll(".has_sub_menu");

    // const mainElement = document.querySelector("main");

    // hasSubMenuElements.forEach(function (element) {
    //   element.addEventListener("mouseover", function () {
    //     const otherSubMenus = document.querySelectorAll(".sub_menu:not(.active)");
    //     otherSubMenus.forEach(function (subMenu) {
    //       subMenu.style.display = "none";
    //     });
    //     const subMenu = this.nextElementSibling;
    //     subMenu.style.display = "block";
    //   });
    // });


    return (

        <div className="Header" style={{ zIndex: 1 }}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous" />

            <header>
                <div className="container">
                    <div className="header_flex">
                        <div style={{ display: "flex" }} className="img">
                            <img src={Logo} alt="logo" className="logo" /><img src={Hand} className="waving_hand"></img>
                        </div>
                        <div className="d_flex gap_26">
                            <div className="d_flex gap_26">
                                <div className="contact_links">
                                    <div className="contact_icon gmail">
                                        <img src="https://sudip-bhowmick.github.io/images/img/mail.svg" alt="mail" />

                                        <a href="mailto:altareeqalmomiaz@gmail.com">realluxs0@gmail.com</a>
                                    </div>
                                    <div className="contact_icon">
                                        <img src="https://sudip-bhowmick.github.io/images/img/call.svg" alt="call" />
                                        <div className="phoneNum">
                                            <a href="tel:+971528467405" style={{ marginRight: '4px' }}>00971528467405  </a>   /
                                            <a href="tel:+97144487002" style={{ marginLeft: '4px' }}>0097144523635  </a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <button type="button" className="burger" id="burger" onClick={ClickBrgBtn}>
                                <span className="burger_line"></span>
                                <span className="burger_line"></span>
                                <span className="burger_line"></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="overlay" onClick={Overlay}></div>
                <nav className="dark_bg" id="menu" style={{ zIndex: '5' }} >
                    <div className="container" style={{ zIndex: '5' }}>
                        <ul>

                            {adminLogIn == true

                                ? <li><NavLink to="/Delivery requests"  >
                                    {notification == true && <div className="notification"></div>}
                                    <div className=" nav-item" onClick={()=>setNotification(false)}>{arraylang[0].Delivery_requests}</div>

                                </NavLink>    </li>
                                : <li><NavLink to="/Delivery Request"  >
                                    <div className=" nav-item">{arraylang[0].Delivery_request}</div>
                                </NavLink>
                                </li>
                            }
                            {/* {adminLogIn == true &&

                                <li><NavLink to="/Add a car"  >
                                   <div className=" nav-item">Add a car</div>
                                </NavLink>    </li>
                            } */}

                            <li> <NavLink to="/Goods" >  <div className="nav-item">{arraylang[0].Goods}</div></NavLink></li>
                            {/* <li><NavLink to="/AboutUs" ><a href="javascript:void(0)" className="nav-item">About us</a></NavLink></li> */}
                            <li><NavLink to="/Services" >  <div className="nav-item">{arraylang[0].Services}</div></NavLink></li>
                            <li><NavLink to="/ContactUs" > <div className="nav-item">{arraylang[0].Contact_Us}</div></NavLink></li>



                            <li>  <NavLink to="/Tracking Cars"  ><div className=" RegisterTruckBtn nav-item">{arraylang[0].Tracking_cars}</div> </NavLink></li>

                            {adminLogIn == false
                                ? <li> <NavLink to="/LogIn"  >
                                    <div className=" LogInBtn nav-item">{arraylang[0].Log_In}</div>
                                </NavLink>
                                </li>
                                : <li>
                                    <NavLink to="/LogIn"  >
                                        <div className=" LogInBtn nav-item" onClick={() => setAdminLogIn(false)}>{arraylang[0].Log_Out}</div>
                                    </NavLink>
                                </li>
                            }
                            <li >
                                <div id="app" className="container center mt50" onClick={switchLang}>

                                    <ul >

                                        <li>
                                            <li className="gray">English</li>
                                            <div className="onoffswitch">
                                                <input v-model="onoffswitch" type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" />
                                                <label className="onoffswitch-label" for="myonoffswitch"></label>
                                            </div>
                                            <li className="gray">عربي</li>
                                        </li>

                                    </ul>

                                </div>
                            </li>

                        </ul>


                    </div>

                </nav>

            </header>


        </div >




    );
}

export default Header;