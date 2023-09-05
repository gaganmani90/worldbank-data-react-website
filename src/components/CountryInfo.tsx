import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Table } from 'react-bootstrap';

interface Country {
    id: string;
    iso2Code: string;
    name: string;
    region: {
        value: string;
    };
    incomeLevel: {
        value: string;
    };
    capitalCity: string;
    longitude: string;
    latitude: string;
}

export function CountryInfo() {
    const [countryData, setCountryData] = useState<Country[]>([]);
    const [filteredCountryData, setFilteredCountryData] = useState<Country[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.worldbank.org/V2/countries/?format=json&page=1&per_page=1000');
                const data: Country[] = response.data[1];
                setCountryData(data);
                setFilteredCountryData(data);
            } catch (error) {
                console.error('Error fetching country data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const filteredData = countryData.filter((country) =>
            country.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCountryData(filteredData);
    }, [countryData, searchTerm]);

    return (
        <Container>
            <h2>Country Information</h2>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Search country..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>ISO2 Code</th>
                            <th>Region</th>
                            <th>Income Level</th>
                            <th>Capital City</th>
                            <th>Longitude</th>
                            <th>Latitude</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredCountryData.map((country) => (
                            <tr key={country.id}>
                                <td>{country.name}</td>
                                <td>{country.iso2Code}</td>
                                <td>{country.region.value}</td>
                                <td>{country.incomeLevel.value}</td>
                                <td>{country.capitalCity}</td>
                                <td>{country.longitude}</td>
                                <td>{country.latitude}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}