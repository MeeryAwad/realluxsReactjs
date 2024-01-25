import { useSelector } from "react-redux";
import Header from "../Header/Header";
import './HomePage.css'
import { useBetween } from "use-between";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import '../Goods/goods.css';
import axios from "axios";

import CarTracker from "./Map/map.js";
import { Helmet } from 'react-helmet-async';



const HomePage = () => {

    // <get the data from rducers>
    const state = useSelector((state) => state.data);

    const { Cars, carId, setCars, setCarId, indexDelete, setIndexDelete, indexEdit, setIndexEdit, adminLogIn, coords, setCoords } = useBetween(state.useShareState);
    const [AlertDelete, setAlertDelete] = useState(false);

    const state1 = useSelector((state) => state.data1);

    const { lang, arraylang } = useBetween(state1.useShareState);
    // </get the data from rducers>

    // const MouseOver = (i) => {
    //     alert(1)
    //     const subMenus = document.querySelectorAll(`.dropdown__items${i}`);
    //     subMenus.forEach(function (subMenu) {
    //         subMenu.style.display = "block";
    //     });
    // };
    // const MouseUp = () => {

    //     const subMenus = document.querySelectorAll(".dropdown__items");
    //     subMenus.forEach(function (subMenu) {
    //         subMenu.style.display = "none";
    //     });
    // };

    console.clear()
    const CarsData = async () => {
        try {
            const { data } = await axios.get('https://realluxs.onrender.com/Cars')

            setCars(data.data)
            if (carId != -1)
                setCoords((lastValue) => {
                    return {
                        ...lastValue,
                        lat: Cars[carId].latitude,
                        lng: Cars[carId].longitude
                    }
                })


        }
        catch (error) {
            console.log(error)
        }

    }
    setInterval(() => CarsData(), 15000);


    const changeCoodrs = (i) => {
        setCarId(i)
        setCoords((lastValue) => {
            return {
                ...lastValue,
                lat: Cars[i].latitudeData,
                lng: Cars[i].longitudeDta
            }
        });

    }
    var CarsList = Cars.length ? Cars.toReversed().map((item, i) => {

        return (

            <div className="dropdown__item " key={i}  >


                <input type="checkbox" id="dropdown" />

                <div className="dropdown__text supText">{item.carName}</div>


                <ul className={`Details dropdown__items${i}`} >


                    <div className="depItem " onClick={() => { changeCoodrs(i) }}>  <i className='fa fa-map-marker-alt '></i> <i className="location">{arraylang[6].location}</i></div>
                    <NavLink to='/CarInformation'  > <div className="depItem info" onClick={() => setCarId(i)}> <i className="fa fa-info-circle"></i>  <i className="info">{arraylang[6].information}</i></div> </NavLink>
                    {adminLogIn && <i className="fa fa-trash" aria-hidden="true" title="Delete" onClick={() => { setIndexDelete(item); setAlertDelete(true); setIndexEdit(item._id) }}></i>}

                </ul>

            </div>



        )
    }) : <p></p>
    const Delete = async () => {

        setCars(Cars.filter(item => item._id !== indexEdit));
        setAlertDelete(false)

        await axios.post('https://realluxs.onrender.com/deleteCars', { data: indexDelete })
            .then(res => {


            }).catch((err) => {
                console.log(err)
            });




    }


    return (
        <>
            <Helmet>
                <title>Home page Real Luxs</title>
                <meta name="description"
                    content="Tracking Cars Real Luxs UAE
                    transportation , delivery UAE ,  Abu Dhabi, Dubai, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah and Fujairah.
                    توصيل , نقل ضمن الامارات العربية المتحدة , ابو ظبي , دبي , الشارقة, عجمان , ام القيويين , رأس الخيمة , الفجيرة, 
                   'تتبع سيارات ريال لوكس لامارات العربية المتحدة"></meta>
                <link rel="canonical" href="/Delivery Request" />
            </Helmet>
            <Header />
            <div className="HomePage" style={{ direction: lang == 'en' ? 'ltr' : 'rtl' }} >

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous" />
                {
                    AlertDelete &&
                    <div className="AlertDeleteCont" style={{ zIndex: 5 }}>

                        <div className="AlertContMessg">
                            <h2>{arraylang[6].Confirm}</h2>
                            <div className="btn"><span className="deleteBtn" onClick={Delete}>{arraylang[11].Delete}</span> <span className="deleteClose" onClick={() => setAlertDelete(false)}>{arraylang[11].Close}</span></div>

                        </div>
                    </div>



                }

                <div className="wrapper2">
                    <div className="dropdown" >

                        <input type="checkbox" id="dropdown" />

                        <label className="dropdown__face" htmlFor="dropdown">
                            <i className='fas fa-car-side'></i>
                            <div className="dropdown__text">{arraylang[6].Cars}</div>

                            <div className="dropdown__arrow"></div>
                        </label>

                        <div className="dropdown__items" style={{ zIndex: 2 }} >
                            {CarsList}
                        </div>
                    </div>
                    <div style={{ zIndex: 0 }}>
                        <CarTracker />

                    </div>

                    <filter id="goo"  >
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                        <feBlend in="SourceGraphic" in2="goo" />

                    </filter>


                </div>
                <div></div>
                <Footer />


            </div >

        </>



    );
}


export default HomePage;