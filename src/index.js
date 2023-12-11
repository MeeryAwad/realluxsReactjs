import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Navigate, NavLink } from "react-router-dom";
import { Provider } from 'react-redux';
import stor from './reducers/index';
import { createStore } from 'redux';
import LogIn from './component/logInPage/login';
import HomePage from './component/HomePage/HomePage';
import CarInfo from './component/HomePage/CarInformation/CarInformation';
import Services from './component/Services/Services';
import Goods from './component/Goods/goods';
import OrderReq from './component/OrderReq/OrderReq';
import OrderList from './component/OrederList/orderList';
import ContactUs from './component/ContactUs/ContactUs';


// SEO
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(stor);

try
{
    //statements suspected to throw exception.

root.render(
 
  <React.StrictMode>
    <HelmetProvider>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Navigate replace to={'Delivery Request'} />} />
          <Route exact path='/Tracking Cars' element={<HomePage />} />
          <Route exact path='/LogIn' element={<LogIn />} />
          <Route exact path='/ContactUs' element={<ContactUs />} />
          <Route exact path='/Add a car' element={<CarInfo />} />
          <Route exact path='/Services' element={<Services />} />
          <Route exact path='/Goods' element={<Goods />} />
          <Route exact path='/Delivery Request' element={<OrderReq />} />
          <Route exact path='/Delivery requests' element={<OrderList />} />


        </Routes>
      </Router>

    </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
}

catch(e)
{
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
