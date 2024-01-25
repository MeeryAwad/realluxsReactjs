import { useEffect } from "react";
import Header from "../Header/Header";
import './ContactUs.css'
import WOW from 'wowjs';
import '../css/animate.css'
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import { useBetween } from "use-between";
import { Helmet } from 'react-helmet-async';


const ContactUs = () => {

    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])
    const state1 = useSelector((state) => state.data1);

    const { lang, setLang, arraylang } = useBetween(state1.useShareState);

    return (
        <div className="block">
            <Helmet>
                <title>Contact us / تواصل معنا</title>
                <meta name="description"
                    content=" اتصل بنا ريال لوكس
                 تواصل معنا ريال لوكس
                 Contact us Real Luxs"></meta>
                <link rel="canonical" href="/ContactUs" />
            </Helmet>
            <Header />
            <div className="ContactUs" style={{ direction: lang == 'en' ? 'rtl' : 'ltr' }}>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous" />
                <section className="contact-page-sec">
                    <div className="section-head col-sm-12">
                        <h4><span>{arraylang[5].Contact}</span>{arraylang[5].us} </h4>
                        <p>{arraylang[5].Contact_US_Cont}</p>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="contact-info wow bounceInRight">
                                    <div className="contact-info-item">
                                        <div className="contact-info-icon">
                                            <i className="fas fa-map-marked"></i>
                                        </div>
                                        <div className="contact-info-text">
                                            <h2>{arraylang[5].Address}</h2>
                                            <span ><a href="https://maps.app.goo.gl/6uSuhTE2V5SRcT278" target="_blank" style={{ textDecoration: 'underline' }} >{arraylang[5].AddressCont} </a></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="contact-info wow bounceInRight">
                                    <div className="contact-info-item">
                                        <div className="contact-info-icon">
                                            <i className="fas fa-clock"></i>
                                        </div>
                                        <div className="contact-info-text">
                                            <h2>{arraylang[5].Worktime}</h2>
                                            <span>24 {arraylang[5].hours}</span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="contact-info wow bounceInRight">
                                    <div className="contact-info-item">
                                        <div className="contact-info-icon">
                                            <i className="fa fa-share-square" aria-hidden="true"></i>
                                        </div>
                                        <div className="contact-info-text">
                                            <h2>{arraylang[5].Social_Media}</h2>
                                            <div className="social-icon" style={{ display: 'flex' }}>

                                                <span title="facebook">
                                                    <a href="#">
                                                        <i className='fab fa-facebook'></i>
                                                    </a>
                                                </span>
                                                <span title="whatsapp">
                                                    <a href="whatsapp://send?abid=+97144523635" >
                                                        <i className='fab fa-whatsapp' title="whatsapp"></i>

                                                    </a>

                                                </span>


                                                <span title="instagram">
                                                    <a href="#">
                                                        <i className='fab fa-instagram' ></i>
                                                    </a>
                                                </span>
                                                <span title="google">
                                                    <a href="mailto:realluxs0@gmail.com">
                                                        <i className='fab fa-google' ></i>
                                                    </a>
                                                </span>


                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="contact-info wow bounceInLeft">
                                    <div className="contact-info-item">
                                        <div className="contact-info-icon">
                                            <i className="fa fa-fax" aria-hidden="true"></i>
                                        </div>
                                        <div className="contact-info-text">
                                            <h2>{arraylang[5].Fax}</h2>
                                            <span>0097144523635</span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="contact-info wow bounceInLeft">
                                    <div className="contact-info-item">
                                        <div className="contact-info-icon">
                                            <i className="fa fa-phone" aria-hidden="true"></i>
                                        </div>
                                        <div className="contact-info-text">
                                            <h2>{arraylang[5].Mobile}</h2>
                                            <a href="tel:+971568594461" style={{ color: "#999999" }}> <span> 00971568594461 </span></a>
                                            <br></br>
                                            <a href="tel:+971528467405" style={{ color: "#999999" }}><span> 00971528467405</span></a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="contact-info wow bounceInLeft">
                                    <div className="contact-info-item">
                                        <div className="contact-info-icon">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div className="contact-info-text">
                                            <h2>{arraylang[5].E_Mail}</h2>
                                            <a href="realluxs0@gmail.com" style={{ color: "#999999" }}> <span>realluxs0@gmail.com </span></a>
                                            {/* <span>yourmail@gmail.com</span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                {/* <div className="contact-page-form" method="post">
                                    <h2>Get in Touch</h2>
                                    <form action="contact-mail.php" method="post">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-6 col-xs-12">
                                                <div className="single-input-field">
                                                    <input type="text" placeholder="Your Name" name="name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6 col-xs-12">
                                                <div className="single-input-field">
                                                    <input type="email" placeholder="E-mail" name="email" required />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6 col-xs-12">
                                                <div className="single-input-field">
                                                    <input type="text" placeholder="Phone Number" name="phone" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6 col-xs-12">
                                                <div className="single-input-field">
                                                    <input type="text" placeholder="Subject" name="subject" />
                                                </div>
                                            </div>
                                            <div className="col-md-12 message-input">
                                                <div className="single-input-field">
                                                    <textarea placeholder="Write Your Message" name="message"></textarea>
                                                </div>
                                            </div>
                                            <div className="single-input-fieldsbtn">
                                                <input type="submit" value="Send Now" />
                                            </div>
                                        </div> */}
                                {/* </form> */}
                                {/* </div> */}
                            </div>
                            {/* <div className="col-md-4">
                                <div className="contact-page-map">
                                    <iframe src="https://maps.google.com/?q=25.278940,55.351627" width="100%" height="450" frameborder="0" style={{ border: "0" }} allowfullscreen></iframe>
                                </div>
                            </div> */}
                        </div>

                    </div>
                    <Footer />
                </section>

            </div>


        </div>



    );
}

export default ContactUs;