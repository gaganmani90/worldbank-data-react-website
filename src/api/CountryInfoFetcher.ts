import axios from "axios";
import Country from "../pojo/Country";

async function getCountryInfo(countryCode: string): Promise<Country | null> {
    const apiUrl = `http://api.worldbank.org/V2/countries/${countryCode}?format=json`;

    try {
        const response = await axios.get(apiUrl);
        const countryData = response.data[1][0];

        if (countryData) {
            const country: Country = {
                id: countryData.id,
                iso2Code: countryData.iso2Code,
                name: countryData.name,
                region: {
                    value: countryData.region.value,
                },
                incomeLevel: {
                    value: countryData.incomeLevel.value,
                    id: countryData.incomeLevel.id,
                },
                capitalCity: countryData.capitalCity,
                longitude: countryData.longitude,
                latitude: countryData.latitude,
            };
            return country;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error fetching country information:', error);
        return null;
    }
}

export default getCountryInfo;
