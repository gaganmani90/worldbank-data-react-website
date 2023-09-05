import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import IncomeLevelJustification from "./IncomeLevelJustification";
import { fetchCountryData } from '../api/CountryDataFetcher';
import Country from '../pojo/Country'; // Import the Country type
import { Bar } from 'react-chartjs-2';

export function CountryInfoChart() {
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

    // Count countries by income level
    const incomeLevelCounts: Record<string, number> = {
        'High income': 0,
        'Not classified': 0,
        'Low income': 0,
        'Lower middle income': 0,
        'Low & middle income': 0,
        'Middle income': 0,
        'Upper middle income': 0,
    };

    filteredCountryData.forEach((country) => {
        incomeLevelCounts[country.incomeLevel.value]++;
    });

    const chartData = {
        labels: Object.keys(incomeLevelCounts),
        datasets: [
            {
                label: 'Country Count',
                data: Object.values(incomeLevelCounts),
                backgroundColor: [
                    '#5cb85c',
                    '#d9534f',
                    '#f0ad4e',
                    '#5bc0de',
                    '#5bc0de',
                    '#5bc0de',
                    '#5bc0de',
                ],
            },
        ],
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Country Count',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Income Level',
                },
            },
        },
    };

    return (
        <Container>
            <h2>Country Information Chart</h2>
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
                    <Bar data={chartData} options={chartOptions}/>
                </Col>
            </Row>
        </Container>
    );
}
