import Indicator from "../pojo/Indicator";
import axios from "axios";

async function fetchIndicators(): Promise<Indicator[]> {
    try {
        const response = await axios.get('/indicators?format=json'); // Use the relative path
        const data = response.data[1];
        return data as Indicator[];
    } catch (error) {
        console.error('Error fetching indicators:', error);
        return [];
    }
}

export default fetchIndicators;
