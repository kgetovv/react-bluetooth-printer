import logo from './logo.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import PrinterComponent from "./components/PrinterComponent";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <div className="App">
            <ToastContainer/>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Thermal Printer App with ReactJS
                </p>
                <PrinterComponent/>
            </header>
        </div>
    );
}

export default App;
