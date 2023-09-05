import axios from "axios";
import {Topic} from "../pojo/Topic";

async function fetchTopics(): Promise<Topic[]> {
    try {
        const response = await axios.get('/topics?format=json');
        const data: Topic[] = response.data[1];
        return data;
    } catch (error) {
        console.error('Error fetching topics:', error);
        return [];
    }
}

export default fetchTopics;
