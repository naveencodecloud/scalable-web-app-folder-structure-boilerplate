
// **Sample code for reference. Replace with your own implementation.**

import { Container } from "../../layouts/Container"
import { Section } from "../../layouts/Section"

export const Hero = () => {
    return (
        <Section>
            <Container>
                <div className="py-20 text-center">
                    <h1 className="text-5xl font-bold">Welcome to Our Store</h1>
                    <p className="mt-4 text-lg text-muted-foreground">Discover the latest collection</p>
                    <a href="/collection/new" className="mt-6 inline-block bg-primary text-white px-8 py-3 rounded">
                        Shop Now
                    </a>
                </div>
            </Container>
        </Section>
    )
}
