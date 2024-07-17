import React from 'react';
import { render, screen } from '@testing-library/react';
import BluetoothPrinterComponent from "../../components/BluetoothPrinterComponent";
// Mock navigator.bluetooth
global.navigator.bluetooth = {
    requestDevice: jest.fn()
};

describe('BluetoothPrinterComponent', () => {
    test('renders connect button', () => {
        render(<BluetoothPrinterComponent />);
        const connectButton = screen.getByText(/Connect to Printer via Bluetooth/i);
        expect(connectButton).toBeInTheDocument();
    });
});
