import React from 'react';
import {render, screen} from '@testing-library/react';
import SerialPrinterComponent from "../../components/SerialPrinterComponent";

// Mock navigator.serial
global.navigator.serial = {
    requestPort: jest.fn()
};

describe('SerialPrinterComponent', () => {
    test('renders connect button', () => {
        render(<SerialPrinterComponent/>);
        const connectButton = screen.getByText(/Connect to Printer via Serial/i);
        expect(connectButton).toBeInTheDocument();
    });
});
