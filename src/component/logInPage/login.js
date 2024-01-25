import { useEffect, useState } from 'react';
import './login.css';
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import Header from '../Header/Header';
import { useBetween } from 'use-between';
import { useSelector } from 'react-redux';
import WOW from 'wowjs';
import '../css/animate.css'
import { Helmet } from 'react-helmet-async';

const LogIn = () => {

    const state = useSelector((state) => state.data);

    const { adminLogIn, setAdminLogIn } = useBetween(state.useShareState);
    const state1 = useSelector((state) => state.data1);

    const { lang, arraylang } = useBetween(state1.useShareState);

    const [logIn, setLogIn] = useState(true);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const close = () => {
        const closeSuccess = document.querySelector(".successGetCoord");
        closeSuccess.style.opacity = "0";
        setTimeout(function () { closeSuccess.style.display = "none"; }, 550);
        setSuccess(false)
    }

    const [adminInfo, setAdminInfo] = useState({

        userName: "",
        password: ""


    });
    const inputAdminInfo = (event) => {

        const name = event.target.name;
        const value = event.target.value;

        setError(false)
        setAdminInfo((lastValue) => {
            return {
                ...lastValue,
                [name]: value
            }
        });

    }
    const goToRegister = () => {

        setLogIn(false)
    }
    const gotoLogIn = () => {
        setLogIn(true)
    }
    const showTheAlert = () => {
        setSuccess(true)
    }
    const navigate = useNavigate();



    const ConfirmLogIn = (e) => {

        if (adminInfo.userName == "Admin" && adminInfo.password == "12345") {
            setAdminLogIn(true);
            if (adminLogIn == true)
                navigate('/Delivery Request', { replace: false });
            else
                navigate('/Delivery requests', { replace: false });

        }
        else {
            e.preventDefault();
            setAdminLogIn(false)
            setError(true);
        }
    }

    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])

    return (
        <>
          <Helmet>
                <title>Log In Real Luxs</title>
                <meta name="description"
                    content="Log In Real Luxs ,
                    تسجيل دخول ريال لوكس
                    "></meta>
                <link rel="canonical" href="/Delivery Request" />
            </Helmet>
            <Header />
            <div className="LogInPage " style={{ zIndex: '0' }}>
                {success &&
                    <div className="successGetCoord">
                        <div className="closebtn" onClick={close}>×</div>
                        <div className='alert-Text-Cont'>

                            <div className='alert-text'> <i className="fa fa-info-circle" aria-hidden="true"></i><span> Your data will be verified and your account will be activated soon</span>  </div>
                        </div>


                    </div>
                }
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous" />
                <div className='bg-image'></div>
                <div className="wrapper wow rotateIn">



                    <div className="container" >
                        <div className="col-left"style={{direction: lang == 'en' ? 'ltr' : 'rtl'}}>
                            <div className="login-text">
                                <h1>Real Luxs</h1>
                                <p className='intro'>
                                  
                                        <li>{arraylang[9].logInNote}</li>
                                        <li className='note1'>{arraylang[9].logInNote1}</li>

                                  
                                </p>

                            </div>
                        </div>
                        <div className="col-right" style={{direction: lang == 'en' ? 'ltr' : 'rtl'}}>

                            {logIn && <div className="login-form logIn">
                                <h2>{arraylang[9].Login}</h2>

                                {error && <h4 style={{ color: 'rgb(226, 95, 95)' }} >{arraylang[2].err} </h4>}

                                <form>
                                    <p>
                                        <input type="text" placeholder={arraylang[9].userName} required name="userName" onChange={inputAdminInfo} value={adminInfo.userName} />
                                    </p>
                                    <p>
                                        <input type="password" placeholder={arraylang[9].password} required name="password" onChange={inputAdminInfo} value={adminInfo.password} />
                                    </p>
                                    <p>
                                        <input className="btn" type="submit" value={arraylang[9].Login} onClick={ConfirmLogIn} />
                                    </p>
                                    {/* <p>
                                        <div> You don't have an account yet? </div>
                                        <div className="CreateAccount" onClick={goToRegister}>Create an account.</div>
                                    </p> */}

                                </form>

                            </div>
                            }


                            {!logIn && <div className="login-form register" style={{direction: lang == 'en' ? 'ltr' : 'rtl'}}>

                                <h2>Register</h2>

                                <form>
                                    <p>
                                        <input type="text" placeholder="Username" required />
                                    </p>
                                    <p>
                                        <input type="password" placeholder="Password" required />
                                    </p>
                                    <p>
                                        <input type="password" placeholder="Password" required />
                                    </p>
                                    <p>
                                        <input type="password" placeholder="Password" required />
                                    </p>
                                    <p>
                                        <input className="btn" type="submit" value="Register" onClick={showTheAlert} />
                                        <br></br>
                                        <br></br>
                                        <i className="fa fa-arrow-left" aria-hidden="true" onClick={gotoLogIn}></i>

                                    </p>


                                </form>

                            </div>
                            }
                        </div>
                    </div>



                </div>
            </div>
        </>



    );
}

export default LogIn;
