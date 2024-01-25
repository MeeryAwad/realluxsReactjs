import { useEffect } from "react";

import './Footer.css'
import WOW from 'wowjs';
import '../css/animate.css'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useBetween } from "use-between";


const Footer = () => {

    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])
    const state1 = useSelector((state) => state.data1);

    const { lang, arraylang } = useBetween(state1.useShareState);

    return (
        <>

            <div className="Footer" >
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous" />
                <footer>
                    <div className="row">

                        <div className="column">
                            <h4>{arraylang[1].About_Us}</h4>
                            <p>
                                {arraylang[1].AboutUsCont}
                            </p>
                        </div>

                        <div className="column">
                            <h4>{arraylang[1].Quick_Links}</h4>
                            <div className="QuickLinks">
                                <NavLink to="/Goods" >
                                    <div>
                                        <i className="fa fa-angle-right"></i>
                                        {arraylang[0].Goods}
                                    </div>

                                </NavLink>
                                <br />
                                <NavLink to="/ContactUs" >
                                    <div>
                                        <i className="fa fa-angle-right"></i>
                                        {arraylang[0].Contact_Us}

                                    </div>
                                </NavLink>
                                <br />

                                <NavLink to="/Services" >
                                    <div>
                                        <i className="fa fa-angle-right"></i>
                                        {arraylang[0].Services}
                                    </div>
                                </NavLink>
                            </div>
                        </div>

                        <div className="column connect">
                            <h4> {arraylang[0].Contact_Us}</h4>
                            <ul className="social-icons">
                                <div>
                                    <li title="facebook">
                                        <a href="#">
                                            <i className='fab fa-facebook'></i>
                                        </a>
                                    </li>
                                    <li title="whatsapp">
                                        <a href="whatsapp://send?abid=+97144523635" >
                                            <i className='fab fa-whatsapp' title="whatsapp"></i>

                                        </a>

                                    </li>
                                </div>
                                <div>
                                    <li title="instagram">
                                        <a href="#">
                                            <i className='fab fa-instagram' ></i>
                                        </a>
                                    </li>
                                    <li title="google">
                                        <a href="mailto:realluxs0@gmail.com">
                                            <i className='fab fa-google' ></i>
                                        </a>
                                    </li>
                                </div>

                            </ul>
                            <br></br>
                            <div className="contact_icon gml">
                                
                                <a href="mailto:altareeqalmomiaz@gmail.com">realluxs0@gmail.com</a>
                            </div>
                            <div className="contact_icon">
                               
                                <a href="tel:+971528467405">00971528467405  </a>  <br></br><br></br>
                                <a href="tel:+97144523635">0097144523635  </a>
                            </div>
                        </div>

                    </div>
                    <p className="copyright">© 2023 {arraylang[1].All_Rights_Reserved}</p>

                </footer>

            </div>

        </>



    );
}

export default Footer;