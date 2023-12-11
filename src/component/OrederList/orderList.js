import { useEffect, useState } from "react";
import Header from "../Header/Header";
import './orderList.css'
import '../Goods/goods.css'
import WOW from 'wowjs';
import '../css/animate.css'
import { useSelector } from "react-redux";
import { useBetween } from "use-between";
import Footer from "../Footer/Footer";
import axios from "axios";
import { Helmet } from 'react-helmet-async';


const OrderList = () => {

    const state = useSelector((state) => state.data);

    const { OrderList, setOrderList, setIndexEdit, doneOrder, setDoneOrder, setNotification } = useBetween(state.useShareState);

    const state1 = useSelector((state) => state.data1);

    const { lang, arraylang } = useBetween(state1.useShareState);

    const [AlertDelete, setAlertDelete] = useState(false);
    const [deleteItem, setDeleteItem] = useState(0);

    const Delete = async () => {


        const deleteProd = document.querySelector(".product");

        deleteProd.classList.add("deleteProduct");
        setOrderList(OrderList.filter(item => item !== deleteItem));
        setAlertDelete(false)
        setTimeout(() => {
            deleteProd.classList.remove("deleteProduct");
        }, 1000)

        await axios.post('https://realluxs.onrender.com/deleteDeliveryreqts', { data: deleteItem })
            .then(res => {

            }).catch((err) => {
                console.log(err)
            });



    }

    const Done = (item1, i) => {
        const deleteProd = document.querySelector(".product");
        deleteProd.classList.add("deleteProduct");





        const headers = {

            "content-type": "application/json;charset=UTF-8"
        };


        setDoneOrder([...doneOrder, OrderList[i]]);
        axios.post("https://realluxs.onrender.com/doneOrderData", { data: OrderList[i] }, { headers }).then(() => {




        }).catch((err) => {
            console.log(err)
        })
        setOrderList(OrderList.filter(item => item !== item1));
        setTimeout(() => {
            deleteProd.classList.remove("deleteProduct");
        }, 1000)
        axios.post('https://realluxs.onrender.com/deleteDeliveryreqts', { data: OrderList[i] }).then(() => {

        }).catch((err) => {
            console.log(err)
        })



    }
    const Restore = (item1, i) => {

        const deleteProd = document.querySelector(".product1");
        deleteProd.classList.add("deleteProduct1");
        setTimeout(() => {
            deleteProd.classList.remove("deleteProduct1");
        }, 1000)



        const headers = {

            "content-type": "application/json;charset=UTF-8"
        };
        setOrderList([...OrderList, doneOrder[i]]);
        axios.post("https://realluxs.onrender.com/Reqest", { data: doneOrder[i] }, { headers }).then(() => {



        }).catch((err) => {
            console.log(err)
        })
        setDoneOrder(doneOrder.filter(item => item !== item1));
        setTimeout(() => {
            deleteProd.classList.remove("deleteProduct1");
        }, 1000)
        axios.post('https://realluxs.onrender.com/deleteDeliveryDone', { data: doneOrder[i] }).then(() => {


        }).catch((err) => {
            console.log(err)
        })







    }

    var OrderListCont = OrderList.length ? OrderList.toReversed().map((item, i) => {

        return (
            <div>
                <li>
                    <div className="orderItem  product" key={i}>
                        <div className="infoOrders">
                            <h2 className="infoOrder">{item.FullName}</h2>
                            <br></br>
                            <i className="date">{item.date}</i>
                            <div className="infoOrder"><i className='fa fa-map-marker-alt '></i>
                                <span> {arraylang[8].From}</span> {item.From}
                                <a href={item.LocationFrom} target="_blank" className="location">{arraylang[7].Go_to_Location}</a>
                            </div>

                            <div className="infoOrder">
                                <i className='fa fa-map-marker-alt '></i>
                                <span>{arraylang[8].To}</span> {item.To}
                                <a href={item.LocationTo} target="_blank" className="location">{arraylang[7].Go_to_Location}</a>
                            </div>

                            <div className="infoOrder"><i className="fa fa-phone" aria-hidden="true"></i>

                                <span>{arraylang[2].Mobile_Fax} : <a href={`tel:${item.Phone}`} style={{ color: '#333', fontWeight: "200" }}>{item.Phone} </a></span>
                            </div>
                        </div>
                        <div className="details">

                            <p title={item.Details}>{item.Details}</p>
                            <div className="btnOrderItem">
                                <span className="btn Done" onClick={() => Done(item, i)}>{arraylang[7].done}</span>
                                <span className="btn Close" onClick={() => { setAlertDelete(true); setIndexEdit(i); setDeleteItem(item) }}>{arraylang[7].delete}</span>
                            </div>
                        </div>
                    </div>
                </li>

            </div>



        )
    }) : <p className="noReq">{arraylang[7].No_Requests}</p>

    var doneOrderListCont = doneOrder.length ? doneOrder.map((item, i) => {

        return (
            <div>
                <li>
                    <div className="orderItem  product1" key={i}>
                        <div className="infoOrders">
                            <h2 className="infoOrder">{item.FullName}</h2>
                            <i className="date">{item.date}</i>
                            <div className="infoOrder"><i className='fa fa-map-marker-alt '></i>
                                <span> {arraylang[8].From}</span> {item.From}
                                <a href={item.LocationFrom} target="_blank" className="location">{arraylang[7].Go_to_Location}</a>
                            </div>

                            <div className="infoOrder">
                                <i className='fa fa-map-marker-alt '></i>
                                <span>{arraylang[8].To}</span> {item.To}
                                <a href={item.LocationTo} target="_blank" className="location">{arraylang[7].Go_to_Location}</a>
                            </div>

                            <div className="infoOrder"><i className="fa fa-phone" aria-hidden="true"></i>

                                <span>{arraylang[2].Mobile_Fax} : <a href={`tel:${item.Phone}`} style={{ color: '#333', fontWeight: "200" }}>{item.Phone} </a></span>
                            </div>
                        </div>
                        <div className="details">

                            <p title={item.Details}>{item.Details}</p>
                            <div className="btnOrderItem">
                                <span className="btn Done" onClick={() => Restore(item, i)}>{arraylang[7].restore}</span>

                            </div>
                        </div>
                    </div>
                </li>

            </div>



        )
    }) : <p className="noReq">{arraylang[7].No_orders_delivered} </p>

    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
        setNotification(false)
        if (OrderList.length != 0)
            OrderList.toReversed().map((item, i) => {
               
                if (item.show == false) {
                   
                    setOrderList(proves => {
                        const newState = [...proves]

                        newState[i].show = true;


                        return newState
                    })
                    const headers = {

                        "content-type": "application/json;charset=UTF-8"
                    };


                    axios.post("https://realluxs.onrender.com/updateReqest", { data: OrderList[i] }, { headers }).then(() => {
                        console.log("success")

                    }).catch((err) => {
                        console.log(err)
                    });

                }

            })
    }, [])

    useEffect(() => {

        const doneOrderData = async () => {
            try {
                const { data } = await axios.get('https://realluxs.onrender.com/doneOrderData')

                setDoneOrder(data.data)


            }
            catch (error) {
                console.log(error)
            }
        }
        doneOrderData();


    }, [doneOrder.length])
    useEffect(() => {

        const orderData = async () => {
            try {
                const { data } = await axios.get('https://realluxs.onrender.com/deliveryreqts')

                setOrderList(data.data)


            }
            catch (error) {
                console.log(error)
            }

        }
        orderData();


    }, [OrderList.length])



    return (
        <>

            <Header />

            <div className="OrderList" style={{ direction: lang == 'en' ? 'ltr' : 'rtl' }}>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous" />
                {
                    AlertDelete &&
                    <div className="AlertDeleteCont">

                        <div className="AlertContMessg">
                            <h2>{arraylang[11].Confirm1}</h2>
                            <div className="btn"><span className="deleteBtn" onClick={Delete}>{arraylang[11].Delete}</span> <span className="deleteClose" onClick={() => setAlertDelete(false)}>{arraylang[11].Close}</span></div>

                        </div>
                    </div>


                }

                <div className="wrapper">
                    <div className="firstSection">
                        <h1>{arraylang[7].receivedTitle}</h1>

                        <p className="subhead">{arraylang[7].receivedSubTitle}</p>

                        <ol className="process-chart">

                            {OrderListCont}


                        </ol>
                    </div>
                    <br></br>
                    <br></br>

                    <div className="secondSection">
                        <h1>{arraylang[7].Orders_delivered}</h1>

                        <p className="subhead">{arraylang[7].Orders_delivered_Cont}</p>

                        <ol className="process-chart">
                            {doneOrderListCont}


                        </ol>
                    </div>
                    <Footer />
                </div>

            </div>

        </>



    );
}

export default OrderList;