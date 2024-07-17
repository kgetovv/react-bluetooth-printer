import React, {useState} from 'react';
import {toast} from 'react-toastify';

const USBPrinterComponent = () => {
    const [device, setDevice] = useState(null);

    const requestUSBDevice = async () => {
        try {
            const device = await navigator.usb.requestDevice({
                filters: []
            });
            await device.open();
            if (device.configuration === null)
                await device.selectConfiguration(1);
            await device.claimInterface(0);
            setDevice(device);
            toast(`Connected to device: ${device.productName}`, {type: 'success'});
        } catch (error) {
            toast(`USB device connection failed: ${error.message}`, {type: 'error'});
            console.error('USB device connection failed', error);
        }
    };

    const connectToDeviceAndPrint = async () => {
        if (!device) {
            toast('No device selected', {type: 'error'});
            return;
        }

        try {
            const data = new TextEncoder().encode('Example message to print\n');
            await device.transferOut(1, data);
            toast('Message sent to printer', {type: 'info'});
        } catch (error) {
            toast('Failed to send message to printer', {type: 'error'});
            console.error('Failed to send message to printer', error);
        }
    };

    return (
        <div>
            <button onClick={requestUSBDevice}>Connect to Printer via USB</button>
            <button onClick={connectToDeviceAndPrint} disabled={!device}>Print Example Message</button>
        </div>
    );
};

export default USBPrinterComponent;
