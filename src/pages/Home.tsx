import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Home: React.FC = () => {
    return (
        <Container className="mt-5">
            <h1 className="mb-4">Welcome to World Data</h1>
            <Card>
                <Card.Body>
                    <Card.Title>Explore Insights</Card.Title>
                    <Card.Text>
                        Explore the world's economic and developmental dynamics through authentic insights from the renowned <a href="https://www.worldbank.org/" target="_blank" rel="noopener noreferrer">World Bank</a>.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Trusted Data</Card.Title>
                    <Card.Text>
                        As a trusted international institution committed to ending extreme poverty and fostering shared prosperity, the World Bank's authoritative data, research, and expert analysis form the cornerstone of our platform.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Interactive Tools</Card.Title>
                    <Card.Text>
                        By leveraging their APIs, we offer you a unique window into a wealth of reliable insights, ensuring that the information you access is not only accurate but also deeply impactful.
                    </Card.Text>
                </Card.Body>
            </Card>
            <hr className="my-4" />
            <p>Explore our interactive tools, delve into our data-driven reports, and navigate our educational resources—all backed by the credibility and transparency that define the World Bank's mission. With our commitment to delivering authentic knowledge, we empower you to make informed decisions and actively engage with the complexities of our ever-evolving global landscape.</p>
        </Container>
    );
};

export default Home;
