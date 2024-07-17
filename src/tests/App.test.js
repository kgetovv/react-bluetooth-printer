import React from 'react';
import {render, screen} from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
    test('renders without crashing', async () => {
        render(<App/>);
        expect(screen.getByText(/Thermal Printer App with ReactJS/i)).toBeInTheDocument();
    });

    test('renders logo', async () => {
        render(<App/>);
        const logo = screen.getByAltText(/logo/i);
        expect(logo).toBeInTheDocument();
    });

    test('renders Bluetooth printer connection button', async () => {
        render(<App/>);
        const bluetoothButton = screen.getByText(/Connect to Printer via Bluetooth/i);
        expect(bluetoothButton).toBeInTheDocument();
    });

    test('renders USB printer connection button', async () => {
        render(<App/>);
        const usbButton = screen.getByText(/Connect to Printer via USB/i);
        expect(usbButton).toBeInTheDocument();
    });

    test('renders Serial printer connection button', async () => {
        render(<App/>);
        const serialButton = screen.getByText(/Connect to Printer via Serial/i);
        expect(serialButton).toBeInTheDocument();
    });
});
