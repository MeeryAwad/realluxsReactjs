import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useBetween } from 'use-between';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './map.css'





// mapboxgl.accessToken =
//     'pk.eyJ1IjoibWVlcnktYXdhZC0xOSIsImEiOiJjbHB0dmZjcTAwaGJ0Mml0NzRoaGJncHFnIn0.PqYfvj3JhQE0GMouSk7nlQ';
// mapboxgl.setRTLTextPlugin(
//     'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',

//     null,
//     true // Lazy load the plugin
// );

function CarTracker() {
    const [carData, setCarData] = useState(null);

    const state = useSelector((state) => state.data);


    const { coords, setCoords,carId ,Cars} = useBetween(state.useShareState);
    const [lat, setLat] = useState(coords.lat);
    const [lng, setLng] = useState(coords.long);


    const mapContainerRef = useRef(null);

    const mapStyles = {
        width: '100vw',
        height: '100vh'
    };


    useEffect(() => {

        setLat(coords.lat);
        setLng(coords.lng);

        // const map = new mapboxgl.Map({
        //     container: mapContainerRef.current,
        //     style: 'mapbox://styles/mapbox/streets-v12',
        //     center: [coords.lat, coords.long],
        //     zoom: 15.2
        // });

        // // Add navigation control (the +/- zoom buttons) new mapboxgl.NavigationControl(), 'top-right'
        // map.addControl(new mapboxgl.GeolocateControl({
        //     positionOptions: {
        //         enableHighAccuracy: true
        //     },
        //       // When active the map will receive updates to the device's location as it changes.
        //       trackUserLocation: true,
        //       // Draw an arrow next to the location dot to indicate which direction the device is heading.
        //       showUserHeading: true
        // }));
        // // map.addControl(
        // //     new MapboxDirections({
        // //     accessToken: mapboxgl.accessToken,
        // //     unit: 'metric',
        // //     }),
        // //     'top-right'
        // //     );

    }, [coords.lat, coords.lng])



    // Function to fetch GPS data from the server
    const getGPSData = async () => {
        try {
            const response = await axios.get('https://realluxs.onrender.com/Cars');
            setCarData(response.data);

            if (carId != -1)
                setCoords((lastValue) => {
                    return {
                        ...lastValue,
                        lat: Cars[carId].latitude,
                        lng: Cars[carId].longitude
                    }
                })


        } catch (error) {
            console.error('Error getting GPS data:', error.message);
        }
    };

    // Fetch GPS data on component mount
    setInterval(() => getGPSData(), 15000);




    return (
        <div className='map' >

            <LoadScript
                googleMapsApiKey="AIzaSyA_KeOJWEPdiZsk_ruoH68MWzD5Cij68dY"

            >
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={20}
                    center={{ lat, lng }}
                >

                    {window.google != undefined && lat != 0 && lng != 0 && <Marker
                        position={{ lat: lat, lng: lng }}
                        icon={{
                            url: carData == null ? "https://th.bing.com/th/id/R.e985b822d867f21b3fd20ae7a81f6760?rik=7skCTFPOg%2bPcvw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fyou-are-here-png-hd-you-are-here-icon-512.png&ehk=tX1wHMSFZz6JetilMl7x8nJuDDhxYUtrCSYFV1uY%2fTs%3d&risl=&pid=ImgRaw&r=0" : "https://th.bing.com/th/id/R.cc2bd55293d435acced2b6d05c74ef3f?rik=JHWHaTvcJsOZag&riu=http%3a%2f%2fmonksdrycleaning.co.uk%2fwp-content%2fuploads%2f2018%2f09%2fdelivery-van-icon-orange.png&ehk=o9rmOEmfyT8QX%2bG3kKVd8QysfAypqBulCP3F7PoaaGI%3d&risl=&pid=ImgRaw&r=0", // Replace with the path to your custom icon
                            scaledSize: new window.google.maps.Size(70, 40)// Adjust the size as needed
                        }}
                    />
                    }
                </GoogleMap>
            </LoadScript>

        </div>
    );
}

export default CarTracker;