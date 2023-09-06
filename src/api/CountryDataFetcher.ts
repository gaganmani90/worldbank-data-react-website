import axios from 'axios';
import Country from '../pojo/Country'; // Import the Country type

export const fetchCountryData = async (): Promise<Country[]> => {
    try {
        // Set CORS headers in the request
        const config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
            },
        };
        const response = await axios.get('/countries/?format=json&page=1&per_page=1000', config);
        return response.data[1];
    } catch (error) {
        console.error('Error fetching country data:', error);
        return [];
    }
};
