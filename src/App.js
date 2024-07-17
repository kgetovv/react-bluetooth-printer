import logo from './logo.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import BluetoothPrinterComponent from "./components/BluetoothPrinterComponent";
import {ToastContainer} from "react-toastify";
import USBPrinterComponent from "./components/UsbPrinterComponent";

function App() {
    return (
        <div className="App">
            <ToastContainer/>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Thermal Printer App with ReactJS
                </p>
                <BluetoothPrinterComponent/>
                <USBPrinterComponent/>
            </header>
        </div>
    );
}

export default App;
