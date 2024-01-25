import { useSelector } from "react-redux";
import Header from "../Header/Header";
import './Services.css'
import { useBetween } from "use-between";
import WOW from 'wowjs';
import '../css/animate.css'
import { useEffect } from "react";
import Footer from "../Footer/Footer";
import { Helmet } from 'react-helmet-async';




const Services = () => {

  // <get the data from rducers>
  const state = useSelector((state) => state.data);

  const { Services } = useBetween(state.useShareState);

  const state1 = useSelector((state) => state.data1);

  const { lang, arraylang } = useBetween(state1.useShareState);


  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])



  var ServicesList = Services.map((item, i) => {

    return (

      <div className="col-lg-4 col-sm-6 wow bounceInLeft" data-wow-duration='1s' key={item.id} >
        <div className="item"> <span className="icon feature_box_col_one"><i className={item.icon}></i></span>
          <h6>{lang == 'en' ? item.title1 : item.title}</h6>
          <p>{lang == 'en' ? item.text1 : item.text}</p>
        </div>




      </div >


    )
  })


  return (
    <>
      <Helmet>
        <title>Real Luxs Services</title>
        <meta name="description"
          content="Real Luxs Services 
          What services does Real Luxس provide?
          خدمات ريال لوكس
          ما هي الخدمات التي تقدمها ريال لوكس
          "></meta>
        <link rel="canonical" href="/Delivery Request" />
      </Helmet>

      <Header style={{ zIndex: '2' }} />
      <div className="Services" style={{ zIndex: '0', direction: lang == 'en' ? 'ltr' : 'rtl' }} >

        <div className="feat bg-gray pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="section-head col-sm-12">
                <h4><span>{arraylang[4].why}</span> {arraylang[4].US}</h4>
                <p>{arraylang[4].why_us_suptitle}</p>
              </div>
              {ServicesList}
            </div>
          </div>
        </div>


        <Footer />


      </div>



    </>



  );
}

export default Services;