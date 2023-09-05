import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Table } from 'react-bootstrap';
import IncomeLevelJustification from "./IncomeLevelJustification";
import { fetchCountryData } from '../api/CountryDataFetcher';
import Country from '../pojo/Country'; // Import the Country type


export function CountryInfoTable() {
    const [countryData, setCountryData] = useState<Country[]>([]);
    const [filteredCountryData, setFilteredCountryData] = useState<Country[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchCountryData();
            setCountryData(data);
            setFilteredCountryData(data);
        };

        fetchData();
    }, []);

    useEffect(() => {
        const filteredData = countryData.filter((country) =>
            country.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCountryData(filteredData);
    }, [countryData, searchTerm]);

    // Sort countries by income level (high income first)
    const sortedCountryData = [...filteredCountryData].sort((a, b) =>
        a.incomeLevel.value === 'High income' ? -1 : b.incomeLevel.value === 'High income' ? 1 : 0
    );

    // Define colors for each income level
    const incomeLevelColors: Record<string, string> = {
        HIC: '#5cb85c', // High income
        INX: '#d9534f', // Not classified
        LIC: '#f0ad4e', // Low income
        LMC: '#5bc0de', // Lower middle income
        LMY: '#5bc0de', // Low & middle income
        MIC: '#5bc0de', // Middle income
        UMC: '#5bc0de', // Upper middle income
    };

    return (
        <Container>
            <h2>Country Information</h2>
            <IncomeLevelJustification />
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
                        {sortedCountryData.map((country) => (
                            <tr
                                key={country.id}
                                className="country-row"
                                style={{ backgroundColor: incomeLevelColors[country.incomeLevel.id] }}
                            >
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
