interface Country {
    id: string;
    iso2Code: string;
    name: string;
    region: {
        value: string;
    };
    incomeLevel: {
        value: string;
        id: string;
    };
    capitalCity: string;
    longitude: string;
    latitude: string;
}

export default Country;
