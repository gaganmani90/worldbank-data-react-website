interface Indicator {
    id: string;
    name: string;
    unit: string;
    source: {
        id: string;
        value: string;
    };
    sourceNote: string;
    sourceOrganization: string;
    topics: {
        id: string;
        value: string;
    }[];
}

export default Indicator;
