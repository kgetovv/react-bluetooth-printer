import React, {useState} from 'react';
import {toast} from 'react-toastify';

const PrinterComponent = () => {
    const [device, setDevice] = useState(null);

    const requestBluetoothDevice = async () => {
        try {
            const device = await navigator.bluetooth.requestDevice({
                filters: [{services: ['device_information']}],
            });

            setDevice(device);
            toast(`Connected to device: ${device.name}`, {type: 'success'});
        } catch (error) {
            toast(`Bluetooth device connection failed: ${error.message}`, {type: 'error'});
            console.error('Bluetooth device connection failed', error);
        }
    };

    const connectToDeviceAndPrint = async () => {
        if (!device) {
            console.error('No device selected');
            return;
        }

        try {
            const server = await device.gatt.connect();
            const service = await server.getPrimaryService('device_information');
            const characteristic = await service.getCharacteristic('manufacturer_name_string');
            const encoder = new TextEncoder('utf-8');
            const data = encoder.encode('Example message to print\n');
            await characteristic.writeValue(data);
            toast('Message sent to printer', {type: 'info'});
        } catch (error) {
            toast('Failed to send message to printer', {type: 'error'});
            console.error('Failed to send message to printer', error);
        }
    };

    return (
        <div>
            <button onClick={requestBluetoothDevice}>Connect to Printer</button>
            <button onClick={connectToDeviceAndPrint} disabled={!device}>Print Example Message</button>
        </div>
    );
};

export default PrinterComponent;
