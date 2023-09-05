import React, { useState } from 'react';
import { Container, Row, Col, Form, Nav } from 'react-bootstrap';
import { CountryInfoTable } from '../components/CountryInfoTable';
import { CountryInfoChart } from '../components/CountryInfoChart';

export function Country() {
    const [displayTable, setDisplayTable] = useState(false);

    const handleDisplayChange = (displayType: string) => {
        setDisplayTable(displayType === 'table');
    };

    return (
        <Container>
            <h2>Country Information</h2>
            <Row>
                <Col>
                    {displayTable ? <CountryInfoTable /> : <CountryInfoChart />}
                </Col>
            </Row>
        </Container>
    );
}
