import axios from "axios";
import { useEffect, useState } from "react";



const reminders = (state = [], action) => {

    //  here we should replace all this data by data from backEnd


    const useShareState = () => {
     
        const [coords,setCoords] = useState({ lat: 0, lng: 0 })
        navigator.geolocation.getCurrentPosition(function (position) {

            setCoords((lastValue) => {
                return {
                    ...lastValue,
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }
            });

        });
        const [ProductInfo, setProductInfo] = useState({

            src: "",
            ProductType: "",
            date: "",
            text: "",
            photo: null,
            price: ""


        });


        const [addOrEdit, setAddOrEdit] = useState('Add')
        const [indexEdit, setIndexEdit] = useState(-1)
        const [indexDelete, setIndexDelete] = useState(-1)
        const [adminLogIn, setAdminLogIn] = useState(false)
        const [notification, setNotification] = useState(false)
        


        const [carId, setCarId] = useState(-1);

        const [Cars, setCars] = useState([]);
    

        const [OrderList, setOrderList] = useState([])
        if (OrderList.length == 0) {
           
        }
        const [doneOrder, setDoneOrder] = useState([]);
       
        const [Services, setServices] = useState([]);
        if (Services.length == 0) {
            const ServiceData = async () => {
                try {
                    const { data } = await axios.get('https://realluxs.onrender.com/Services')

                    setServices(data.data)


                }
                catch (error) {
                    console.log(error)
                }

            }
            ServiceData();
        }



        const [Goods, setGoods] = useState([]);
       




        return {
            Cars, setCars,
            carId, setCarId,
            Services,
            Goods, setGoods,
            ProductInfo, setProductInfo,
            addOrEdit, setAddOrEdit,
            indexEdit, setIndexEdit,
            indexDelete, setIndexDelete,
            adminLogIn, setAdminLogIn,
            OrderList, setOrderList,
            doneOrder, setDoneOrder,
            coords,setCoords,
            notification, setNotification
          

        }
    }




    const data = {

        useShareState,

    }




    return data;

}

export default reminders