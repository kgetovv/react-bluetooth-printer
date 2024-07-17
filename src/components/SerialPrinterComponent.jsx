import React, {useState} from 'react';
import {toast} from 'react-toastify';

const SerialPrinterComponent = () => {
    const [port, setPort] = useState(null);
    const [writer, setWriter] = useState(null);

    const requestSerialDevice = async () => {
        try {
            const port = await navigator.serial.requestPort({});
            await port.open({baudRate: 9600});
            setPort(port);
            const writer = port.writable.getWriter();
            setWriter(writer);
            toast(`Connected to device`, {type: 'success'});
        } catch (error) {
            toast(`Serial device connection failed: ${error.message}`, {type: 'error'});
            console.error('Serial device connection failed', error);
        }
    };

    const connectToDeviceAndPrint = async () => {
        if (!writer) {
            toast('No device selected', {type: 'error'});
            return;
        }

        try {
            const data = new TextEncoder().encode('Example message to print\n');
            await writer.write(data);
            toast('Message sent to printer', {type: 'info'});
        } catch (error) {
            toast(`Failed to send message to printer: ${error.message}`, {type: 'error'});
            console.error('Failed to send message to printer', error);
        }
    };

    const disconnect = async () => {
        if (writer) {
            await writer.close();
            await port.close();
            setWriter(null);
            setPort(null);
            toast('Disconnected from device', {type: 'info'});
        }
    };

    return (
        <div>
            <button onClick={requestSerialDevice}>Connect to Printer via Serial</button>
            <button onClick={connectToDeviceAndPrint} disabled={!writer}>Print Example Message</button>
            <button onClick={disconnect} disabled={!writer}>Disconnect</button>
        </div>
    );
};

export default SerialPrinterComponent;
