import axios from 'axios';
import Country from '../pojo/Country'; // Import the Country type

export const fetchCountryData = async (): Promise<Country[]> => {
    try {
        const response = await axios.get('/countries/?format=json&page=1&per_page=1000');
        const data: Country[] = response.data[1];
        return data;
    } catch (error) {
        console.error('Error fetching country data:', error);
        return [];
    }
};
