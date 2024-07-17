import React from 'react';
import {IonApp, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/react';
import '@ionic/react/css/core.css';
import logo from './logo.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import BluetoothPrinterComponent from "./components/BluetoothPrinterComponent";
import USBPrinterComponent from "./components/USBPrinterComponent";
import SerialPrinterComponent from "./components/SerialPrinterComponent";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <IonApp>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Thermal Printer App with ReactJS</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <div className="App">
                    <ToastContainer/>
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <BluetoothPrinterComponent/>
                        <USBPrinterComponent/>
                        <SerialPrinterComponent/>
                    </header>
                </div>
            </IonContent>
        </IonApp>
    );
}

export default App;
