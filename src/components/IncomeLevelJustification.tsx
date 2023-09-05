import React from 'react';

interface IncomeLevel {
    id: string;
    iso2code: string;
    value: string;
}

const incomeLevels: IncomeLevel[] = [
    { id: 'HIC', iso2code: 'XD', value: 'High income' },
    { id: 'INX', iso2code: 'XY', value: 'Not classified' },
    { id: 'LIC', iso2code: 'XM', value: 'Low income' },
    { id: 'LMC', iso2code: 'XN', value: 'Lower middle income' },
    { id: 'LMY', iso2code: 'XO', value: 'Low & middle income' },
    { id: 'MIC', iso2code: 'XP', value: 'Middle income' },
    { id: 'UMC', iso2code: 'XT', value: 'Upper middle income' },
];

const incomeLevelJustifications: Record<string, string> = {
    HIC: 'High income countries generally have a high standard of living, well-developed infrastructure, and a strong economy.',
    INX: 'Not classified income level is used for countries that do not fit into the defined income categories.',
    LIC: 'Low income countries face significant challenges in terms of poverty, healthcare, education, and overall development.',
    LMC: 'Lower middle income countries are making progress in development but still face challenges in various areas.',
    LMY: 'Low & middle income is a combined category that includes countries with income levels between low and middle.',
    MIC: 'Middle income countries have achieved a moderate level of development, with varying levels of infrastructure and services.',
    UMC: 'Upper middle income countries have made substantial progress and have a higher standard of living compared to lower income categories.',
};

const IncomeLevelJustification: React.FC = () => {
    const incomeLevelJustificationUrl =
        'https://blogs.worldbank.org/opendata/new-world-bank-country-classifications-income-level-2022-2023';

    return (
        <div>
            <h2>Income Level Justifications</h2>
            <p>
                Learn more about income level classifications and their justifications{' '}
                <a href={incomeLevelJustificationUrl} target="_blank" rel="noopener noreferrer">
                    here
                </a>
                .
            </p>
            <ul>
                {incomeLevels.map((level) => (
                    <li key={level.id}>
                        <strong>{level.value}:</strong> {incomeLevelJustifications[level.id]}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IncomeLevelJustification;
