import React, { useState, useEffect } from 'react';
import fetchIndicators from '../api/IndicatorFetcher';
import { Table, Container } from 'react-bootstrap';
import Indicator from "../pojo/Indicator";


const IndicatorTable: React.FC = () => {
    const [indicators, setIndicators] = useState<Indicator[]>([]);

    useEffect(() => {
        const fetchIndicatorData = async () => {
            const fetchedIndicators = await fetchIndicators();
            setIndicators(fetchedIndicators);
        };

        fetchIndicatorData();
    }, []);

    return (
        <Container>
            <h2>Indicators</h2>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Unit</th>
                    <th>Source</th>
                    <th>Source Note</th>
                    <th>Source Organization</th>
                    <th>Topics</th>
                </tr>
                </thead>
                <tbody>
                {indicators.map((indicator) => (
                    <tr key={indicator.id}>
                        <td>{indicator.id}</td>
                        <td>{indicator.name}</td>
                        <td>{indicator.unit}</td>
                        <td>{indicator.source.value}</td>
                        <td>{indicator.sourceNote}</td>
                        <td>{indicator.sourceOrganization}</td>
                        <td>
                            {indicator.topics.map((topic, index) => (
                                <span key={topic.id}>
                    {topic.value}
                                    {index < indicator.topics.length - 1 && ', '}
                  </span>
                            ))}
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default IndicatorTable;
