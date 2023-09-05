import React, { useEffect, useState } from 'react';
import fetchTopics from '../api/TopicFetcher';
import {Topic} from "../pojo/Topic";


function TopicTable() {
    const [topics, setTopics] = useState<Topic[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedTopics = await fetchTopics();
            setTopics(fetchedTopics);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Topics</h2>
        <table className="table table-bordered">
        <thead>
            <tr>
                <th>ID</th>
        <th>Value</th>
        <th>Source Note</th>
    </tr>
    </thead>
    <tbody>
    {topics.map(topic => (
            <tr key={topic.id}>
                <td>{topic.id}</td>
                <td>{topic.value}</td>
                <td>{topic.sourceNote}</td>
                </tr>
        ))}
    </tbody>
    </table>
    </div>
);
}

export default TopicTable;
