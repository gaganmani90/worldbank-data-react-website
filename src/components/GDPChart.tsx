import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const GDPChart: React.FC = () => {
    const [gdpData, setGDPData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://api.worldbank.org/v2/countries/IN/indicators/NY.GDP.MKTP.CD?date=2013:2022'
                );
                const data = response.data[1].reverse(); // Reverse data to show the earliest year first
                setGDPData(data);
            } catch (error) {
                console.error('Error fetching GDP data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>India's GDP Growth</h2>
            <LineChart width={800} height={400} data={gdpData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" name="GDP (current US$)" stroke="#8884d8" />
            </LineChart>
        </div>
    );
};

export default GDPChart;
