import { useSelector } from "react-redux";
import Header from "../../Header/Header";
import './CarInformation.css'
import { useBetween } from "use-between";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import AlertSuccess from "../../AlertSuccess/AlertSuccess";
import axios from "axios";
import '../../Goods/goods.css'
import Footer from "../../Footer/Footer";
import { Helmet } from 'react-helmet-async';




const CarInfo = () => {

    // <get the data from rducers>
    const state = useSelector((state) => state.data);

    const { Cars, setCars, carId, adminLogIn } = useBetween(state.useShareState);

    const [successAlert, setSuccessAlert] = useState(false)

    const state1 = useSelector((state) => state.data1);

    const { lang, arraylang } = useBetween(state1.useShareState);


    const [carAddData, setCarAddData] = useState({
        // id: Cars[carId]._id,
        carName: "",
        from: "",
        to: "",
        driverName: "",
        driverNumber: "",
        CompanyName: ""


    });
    const inputCarInfo = (event) => {

        const name = event.target.name;
        const value = event.target.value;


        setCarAddData((lastValue) => {
            return {
                ...lastValue,
                [name]: value
            }
        });

    }

    const addNewCar = async () => {

        setCars([...Cars, carAddData]);


        const headers = {

            "content-type": "application/json;charset=UTF-8"
        };


        axios.post("https://realluxs.onrender.com/updateCars", { data: Cars[carId] }, { headers }).then(() => {
            console.log('success');

        }).catch((err) => {
            console.log(err)

        })


        setSuccessAlert(true);
        setTimeout(() => {
            setSuccessAlert(false);
        }, 2000)




    }
    useEffect(() => {
        if (carId != -1) {
            setCarAddData((lastValue) => {
                return {
                    ...lastValue,
                    carName: Cars[carId].carName,
                    from: Cars[carId].from,
                    to: Cars[carId].to,
                    driverName: Cars[carId].driverName,
                    driverNumber: Cars[carId].driverNumber,
                    CompanyName: Cars[carId].CompanyName


                };
            })
        }

    }, [])



    return (
        < div className="CarInformationCont">

            <Header />
            <div className="CarInformation"style={{zIndex:'0'}}>

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous" />


                {successAlert == true &&
                    <AlertSuccess />

                }

                <div className="col-md-12" >
                    <div className="road-map-main" >
                        <form name="add-car" >
                            <div className="road-map-wrapper"  >
                                <h6 className="carNum" style={{ direction: lang == 'en' ? 'ltr' : 'rtl'}}>
                                    {arraylang[8].CarName}
                                    {adminLogIn == false ? <span style={{ fontSize: "25px" }}
                                    > {Cars[carId].carName} </span>
                                        : <input type="text" required name="carName" onChange={inputCarInfo} value={carAddData.carName} ></input>}</h6>
                                {adminLogIn == false && <p className="dataText">{arraylang[8].err}</p>}
                                
                                <div className="road-map-circle">

                                    <span
                                        className="road-map-circle-text d-flex align-items-center justify-content-center"
                                    ><i className='fa fa-map-marker-alt '></i></span
                                    >
                                </div>

                                <div className="road-map-card">
                                    <h4 className="card-head" style={{ direction: lang == 'en' ? 'ltr' : 'rtl' }}>{arraylang[8].From}
                                        <br></br>
                                        {adminLogIn == false ? Cars[carId].from
                                            : <input type="text" required name="from" onChange={inputCarInfo} value={carAddData.from} ></input>}</h4>
                                    <p className="card-text" style={{ direction: lang == 'en' ? 'ltr' : 'rtl' }}>
                                        {arraylang[8].FromCont}
                                    </p>
                                </div>
                            </div>
                            <div className="road-map-wrapper">
                                <div className="road-map-circle">
                                    <span
                                        className="road-map-circle-text d-flex align-items-center justify-content-center"
                                    ><i className="fa fa-user" aria-hidden="true"></i></span
                                    >
                                </div>
                                <div className="road-map-card">

                                    <h4 className="card-head" style={{ direction: lang == 'en' ? 'ltr' : 'rtl' }}>{arraylang[8].driverName}   {adminLogIn == false ? Cars[carId].driverName
                                        : <input type="text" required name="driverNumber" onChange={inputCarInfo} value={carAddData.driverNumber}></input>}</h4>


                                    <p className="card-text" style={{ direction: lang == 'en' ? 'ltr' : 'rtl' }}>
                                        {arraylang[8].driverNameCont}
                                    </p>
                                </div>
                            </div>
                            <div className="road-map-wrapper">
                                <div className="road-map-circle">
                                    <span
                                        className="road-map-circle-text d-flex align-items-center justify-content-center"
                                    ><i className="fa fa-user" aria-hidden="true"></i></span
                                    >
                                </div>
                                <div className="road-map-card">
                                    <h4 className="card-head" style={{ direction: lang == 'en' ? 'ltr' : 'rtl' }}>{arraylang[8].driverNumber}  {adminLogIn == false ? Cars[carId].driverNumber
                                        : <input type="text" required name="driverName" onChange={inputCarInfo} value={carAddData.driverName} ></input>}</h4>
                                    <p className="card-text" style={{ direction: lang == 'en' ? 'ltr' : 'rtl' }}>
                                        {arraylang[8].driverNumberCont}
                                    </p>
                                </div>
                            </div>
                            <div className="road-map-wrapper">
                                <div className="road-map-circle">
                                    <span
                                        className="road-map-circle-text d-flex align-items-center justify-content-center"
                                    ><i className="fa fa-university" aria-hidden="true"></i></span
                                    >
                                </div>
                                <div className="road-map-card">
                                    <h4 className="card-head" style={{ direction: lang == 'en' ? 'ltr' : 'rtl' }}>{arraylang[8].The_recipient}   {adminLogIn == false ? Cars[carId].CompanyName
                                        : <input type="text" required name="CompanyName" onChange={inputCarInfo} value={carAddData.CompanyName}></input>}</h4>
                                    <p className="card-text" style={{ direction: lang == 'en' ? 'ltr' : 'rtl' }}>
                                        {arraylang[8].The_recipientCont}
                                    </p>
                                </div>
                            </div>
                            <div className="road-map-wrapper">
                                <div className="road-map-circle">
                                    <span
                                        className="road-map-circle-text d-flex align-items-center justify-content-center"
                                    ><i className='fa fa-map-marker-alt '></i></span
                                    >
                                </div>
                                <div className="road-map-card">
                                    <h4 className="card-head" style={{ direction: lang == 'en' ? 'ltr' : 'rtl' }}>{arraylang[8].To}
                                        <br></br>
                                        {adminLogIn == false ? Cars[carId].to
                                            : <input type="text" required name="to" onChange={inputCarInfo} value={carAddData.to} ></input>}</h4>
                                    <p className="card-text" style={{ direction: lang == 'en' ? 'ltr' : 'rtl' }}>
                                        {arraylang[8].ToCont}
                                    </p>
                                </div>
                            </div>
                            {adminLogIn == true && <div className="btn" onClick={addNewCar} >{arraylang[10].Add}</div>}
                        </form>

                    </div>


                </div>
                <div>
                    <Footer />

                </div>
            </div>

        </div>



    );
}

export default CarInfo;