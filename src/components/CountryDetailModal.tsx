import React, {useState, useEffect} from 'react';
import {Modal, Button} from 'react-bootstrap';
import getCountryInfo from '../api/CountryInfoFetcher';
import Country from "../pojo/Country"; // Import the function that fetches country information

interface CountryInfoModalProps {
    countryCode: string;
    show: boolean;
    onClose: () => void;
}

const CountryInfoModal: React.FC<CountryInfoModalProps> = ({countryCode, show, onClose}) => {
    const [countryInfo, setCountryInfo] = useState<Country | null>(null);

    useEffect(() => {
        if (show) {
            getCountryInfo(countryCode).then((data: any) => {
                setCountryInfo(data);
            });
        }
    }, [show, countryCode]);

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Country Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {countryInfo ? (
                    <div>
                        <p><strong>Name:</strong> {countryInfo.name}</p>
                        <p><strong>ISO2 Code:</strong> {countryInfo.iso2Code}</p>
                        <p><strong>Region:</strong> {countryInfo.region.value}</p>
                        <p><strong>Income Level:</strong> {countryInfo.incomeLevel.value}</p>
                        <p><strong>Capital City:</strong> {countryInfo.capitalCity}</p>
                        <p><strong>Longitude:</strong> {countryInfo.longitude}</p>
                        <p><strong>Latitude:</strong> {countryInfo.latitude}</p>
                    </div>
                ) : (
                    <p>Loading country information...</p>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CountryInfoModal;
