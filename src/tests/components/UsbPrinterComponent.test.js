import React from 'react';
import {render, screen} from '@testing-library/react';
import USBPrinterComponent from "../../components/USBPrinterComponent";

// Mock navigator.usb
global.navigator.usb = {
    requestDevice: jest.fn()
};

describe('USBPrinterComponent', () => {
    test('renders connect button', () => {
        render(<USBPrinterComponent/>);
        const connectButton = screen.getByText(/Connect to Printer via USB/i);
        expect(connectButton).toBeInTheDocument();
    });
});
