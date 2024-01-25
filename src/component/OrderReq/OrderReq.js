import { useEffect, useState } from "react";
import Header from "../Header/Header";
import './OrderReq.css'
import { useSelector } from "react-redux";
import { useBetween } from "use-between";
import Footer from "../Footer/Footer";
import axios from "axios";
import { Helmet } from 'react-helmet-async';



const OrderReq = () => {
    const state = useSelector((state) => state.data);

    const { OrderList, setOrderList } = useBetween(state.useShareState);

    const [error, setError] = useState(false)
    const [successAlert, setSuccessAlert] = useState(false)
    const state1 = useSelector((state) => state.data1);

    const { lang, arraylang } = useBetween(state1.useShareState);

    const [userReqest, setUserReqest] = useState({

        FullName: "",
        Phone: "",
        From: "",
        To: "",
        LocationFrom: "",
        LocationTo: "",
        Details: "",
        date: ""


    });
    const inputUserReqest = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        setError(false)

        setUserReqest((lastValue) => {
            return {
                ...lastValue,
                [name]: value
            }
        });

    }
    const addNewReq = () => {
        var today = new Date();
        userReqest.date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()

        if (userReqest.FullName != "" && userReqest.Phone != "" && userReqest.From != "" && userReqest.To != "" && userReqest.LocationFrom != "" && userReqest.LocationTo != "" && userReqest.Details != "") {

            const headers = {

                "content-type": "application/json;charset=UTF-8"
            };

            setOrderList([...OrderList, userReqest]);
            setSuccessAlert(true)
            setTimeout(() => {
                setSuccessAlert(false);
            }, 6000)

            setUserReqest((lastValue) => {
                return {
                    ...lastValue,

                    FullName: "",
                    Phone: "",
                    From: "",
                    To: "",
                    LocationFrom: "",
                    LocationTo: "",
                    Details: "",
                    date: ""
                }
            });

            axios.post("https://realluxs.onrender.com/Reqest", { data: userReqest }, { headers }).then(() => {

                console.log('success')
            }).catch(err => {
                console.log(err)
            })


        }
        else
            setError(true)
    }




    return (
        <>
            <Helmet>
                <title>Reqest Real Luxs</title>
                <meta name="description"
                    content="Delivery Request Real Luxs UAE
                    transportation , delivery UAE ,  Abu Dhabi, Dubai, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah and Fujairah.
                    توصيل , نقل ضمن الامارات العربية المتحدة , ابو ظبي , دبي , الشارقة, عجمان , ام القيويين , رأس الخيمة , الفجيرة, 
                    طلب توصيل الامارات العربية المتحدة ريال لوكس"></meta>
                <link rel="canonical" href="/Delivery Request" />
            </Helmet>
            <Header />

            <div className="OrderReq" >
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous" />
                <div className="img1"></div>
                <main>

                    <div className='wrapper'>
                        <header>
                            <h1>{arraylang[2].Delivery_request_title} <span className="headerCont">{arraylang[2].Delivery_request_title1}</span></h1>

                        </header>
                        <p className="headerSub">{arraylang[2].Delivery_request_suptitle}</p>
                        {error && <h4 style={{ color: 'rgb(226, 95, 95)', direction: lang == 'en' ? 'ltr' : 'rtl' }} className="errorAndDone">*{arraylang[2].err} </h4>}
                        {successAlert == true &&
                            <div className="alert " >
                                <div className="thank-you-wrapper">
                                    <div className="check-mark-block">
                                        <div className="check-mark-wrapper">
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    <h3>{arraylang[2].alert1}
                                        <p classNameName="TextSuccees">{arraylang[2].alert2}</p>
                                        <p>{arraylang[2].alert3}</p>
                                    </h3>
                                </div>
                            </div>
                        }
                        <div className='steps' id='steps' style={{ direction: lang == 'en' ? 'ltr' : 'rtl' }}>

                            <section className="checkout-form">
                                <form action="#!" method="get">
                                    <div className='step'>
                                        <div className='number'><i className="fa fa-info" aria-hidden="true"></i></div>
                                        <div className='info'>
                                            <div className='title'>
                                                <h6>{arraylang[2].Your_Information} </h6>
                                            </div>
                                            <div className="form-control">
                                                <label htmlFor="checkout-email">{arraylang[2].Full_Name}</label>
                                                <div>

                                                    <input type="email" id="checkout-email" placeholder={arraylang[2].Feild_Full_Name}
                                                        name="FullName" onChange={inputUserReqest} value={userReqest.FullName} />
                                                </div>
                                            </div>

                                            <div className="form-control">
                                                <label htmlFor="checkout-phone">{arraylang[2].Mobile_Fax}</label>
                                                <div>

                                                    <input type="tel" id="checkout-phone" placeholder={arraylang[2].Field_Mobile_Fax}
                                                        name="Phone" onChange={inputUserReqest} value={userReqest.Phone} style={{ direction: lang == 'en' ? 'ltr' : 'rtl' }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>




                                    <div className='step' style={{ direction: lang == 'en' ? 'ltr' : 'rtl' }}>
                                        <div className='number'><i className='fas fa-envelope-open-text'></i></div>
                                        <div className='info'>
                                            <div className='title'> <h6>{arraylang[2].Delivery_Details}</h6></div>
                                            <div className='text'>
                                                <div className="form-control">
                                                    <label htmlFor="checkout-name">{arraylang[2].From} </label>

                                                    <div>

                                                        <input type="text" id="checkout-country" placeholder={arraylang[2].FieldFromCity} list="country-list"
                                                            name="From" onChange={inputUserReqest} value={userReqest.From} />
                                                        <datalist id="country-list">
                                                            <option value={arraylang[2].Abu_Dhabi}></option>
                                                            <option value={arraylang[2].Dubai}></option>
                                                            <option value={arraylang[2].Ajman}></option>
                                                            <option value={arraylang[2].Sharjah}></option>
                                                            <option value={arraylang[2].Fujairah}></option>
                                                            <option value={arraylang[2].Umm_Al_Qaiwain}></option>
                                                            <option value={arraylang[2].Ras_Al_Khaimah}></option>
                                                        </datalist>
                                                    </div>


                                                    <div className="locationLink">


                                                        <input type="text" placeholder={arraylang[2].Location_link} name="LocationFrom" onChange={inputUserReqest} value={userReqest.LocationFrom} />

                                                    </div>

                                                </div>

                                                <div className="form-control">
                                                    <label htmlFor="checkout-name">{arraylang[2].To} </label>

                                                    <div>

                                                        <input type="text" id="checkout-country" placeholder={arraylang[2].FieldFromCity} list="country-list"
                                                            name="To" onChange={inputUserReqest} value={userReqest.To} />
                                                        <datalist id="country-list">
                                                            <option value={arraylang[2].Abu_Dhabi}></option>
                                                            <option value={arraylang[2].Dubai}></option>
                                                            <option value={arraylang[2].Ajman}></option>
                                                            <option value={arraylang[2].Sharjah}></option>
                                                            <option value={arraylang[2].Fujairah}></option>
                                                            <option value={arraylang[2].Umm_Al_Qaiwain}></option>
                                                            <option value={arraylang[2].Ras_Al_Khaimah}></option>

                                                        </datalist>
                                                    </div>
                                                    <div className="locationLink">

                                                        <input type="text" placeholder={arraylang[2].Location_link} name="LocationTo" onChange={inputUserReqest} value={userReqest.LocationTo} />

                                                    </div>
                                                </div>


                                                <div className="form-control">
                                                    <label htmlFor="checkout-postal">{arraylang[2].details}</label>
                                                    <div>

                                                        <input type="numeric" id="checkout-postal" placeholder={arraylang[2].detailsCont}
                                                            name="Details" onChange={inputUserReqest} value={userReqest.Details
                                                            } />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='step' style={{ direction: lang == 'en' ? 'ltr' : 'rtl' }}>
                                        <div className='number'><i className='fas fa-share'></i></div>
                                        <div className="btnSend" onClick={addNewReq}>{arraylang[2].Send}</div>

                                    </div>
                                </form>

                            </section>
                            <Footer />

                        </div>

                    </div>


                </main>


            </div>

        </>



    );
}

export default OrderReq;