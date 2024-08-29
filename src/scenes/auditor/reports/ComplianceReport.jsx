import React from 'react';
import { Box, Container, Grid, Typography, ThemeProvider, useTheme } from '@mui/material';

const ComplianceReport = () => {
    const theme = useTheme();

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ bgcolor: 'background.paper', p: 3 }}>
                <Container maxWidth="md">
                    <Typography variant="h4" align="center" gutterBottom>
                        Compliance Report for SolarWave Energy Corp.
                    </Typography>
                    
                    <Typography variant="h5" gutterBottom>
                        Project Title: SolarWave Eco-Park
                    </Typography>
                    <Typography variant="body1">Project Location: Mojave Desert, California</Typography>
                    <Typography variant="body1">Project Duration: 2024-2029</Typography>
                    <Typography variant="body1">Company: SolarWave Energy Corp.</Typography>
                    <Typography variant="body1">CEO: Jonathan Harris</Typography>
                    <Typography variant="body1">Project Manager: Dr. Amelia Martinez</Typography>
                    <Typography variant="body1" gutterBottom>Report Date: August 29, 2024</Typography>
                    
                    <Box sx={{ mt: 4, mb: 4 }}>
                        <Typography variant="h6" gutterBottom>
                            Executive Summary:
                        </Typography>
                        <Typography variant="body1" paragraph>
                            SolarWave Energy Corp., a leading renewable energy company, has embarked on a groundbreaking new project named SolarWave Eco-Park. The project is aimed at reducing carbon dioxide (CO2) emissions by harnessing solar energy in one of the most arid regions of the United States: the Mojave Desert. This initiative seeks to provide sustainable energy solutions while contributing significantly to the global effort to combat climate change.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            This Compliance Report outlines the various regulatory, environmental, and operational requirements that SolarWave Eco-Park has met throughout the project's development phases. Furthermore, it demonstrates how the project adheres to international and local standards governing renewable energy projects.
                        </Typography>
                    </Box>

                    <Box sx={{ mt: 4 }}>
                        <Typography variant="h6" gutterBottom>
                            1. Introduction
                        </Typography>
                        <Typography variant="body1" paragraph>
                            The SolarWave Eco-Park project is designed to generate clean electricity by installing photovoltaic (PV) solar panels across a 10,000-acre site in the Mojave Desert. This project is expected to produce approximately 2,500 megawatts (MW) of electricity annually, enough to power over 1.2 million homes. More importantly, SolarWave Eco-Park is projected to offset around 3.5 million metric tons of CO2 emissions annually, equivalent to taking 750,000 cars off the road each year.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            The project represents SolarWave Energy Corp.’s commitment to advancing renewable energy and contributing to California's goals of reaching net-zero emissions by 2045. As part of this commitment, the company has adhered to a rigorous set of compliance guidelines established by state, federal, and international bodies.
                        </Typography>
                    </Box>

                    <Box sx={{ mt: 4 }}>
                        <Typography variant="h6" gutterBottom>
                            2. Regulatory Compliance
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            2.1. Federal and State Regulations
                        </Typography>
                        <Typography variant="body1" paragraph>
                            SolarWave Energy Corp. has ensured that all aspects of the SolarWave Eco-Park project comply with the regulatory requirements set forth by the Federal Energy Regulatory Commission (FERC) and the California Energy Commission (CEC). Key areas of compliance include:
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>Environmental Impact Assessment (EIA):</strong> A comprehensive EIA was conducted to evaluate the project's potential effects on local ecosystems, water resources, and air quality. The assessment concluded that the installation of PV panels would have minimal impact on local wildlife, with specific measures put in place to protect endangered species.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>Permit Acquisition:</strong> SolarWave Energy Corp. obtained all necessary permits, including construction and operational permits, water use permits, and wildlife protection permits. The company also complied with the National Environmental Policy Act (NEPA) by submitting detailed project plans for review and approval.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>Land Use Agreements:</strong> The project site is located on a combination of federal and private lands. SolarWave Energy Corp. successfully negotiated land use agreements with the Bureau of Land Management (BLM) and local landowners, ensuring that all land use conforms to federal and state land management policies.
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            2.2. International Standards
                        </Typography>
                        <Typography variant="body1" paragraph>
                            In addition to local regulations, SolarWave Eco-Park adheres to international standards set by organizations such as the International Renewable Energy Agency (IRENA) and the International Organization for Standardization (ISO). The project follows:
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>ISO 14001 (Environmental Management):</strong> SolarWave Eco-Park operates under an ISO 14001-certified Environmental Management System (EMS), which ensures that the project continually monitors and improves its environmental performance.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>ISO 50001 (Energy Management):</strong> The project also complies with ISO 50001 standards, which help optimize energy consumption throughout the project's lifecycle, from construction to operation.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>Clean Development Mechanism (CDM):</strong> The project is registered under the CDM framework, allowing SolarWave Energy Corp. to earn carbon credits that can be traded in international carbon markets. This further aligns the project with global efforts to reduce greenhouse gas emissions.
                        </Typography>
                    </Box>

                    <Box sx={{ mt: 4 }}>
                        <Typography variant="h6" gutterBottom>
                            3. Environmental Compliance
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            3.1. Carbon Reduction Strategy
                        </Typography>
                        <Typography variant="body1" paragraph>
                            The core goal of the SolarWave Eco-Park project is to reduce carbon emissions by replacing fossil fuel-based electricity generation with solar energy. The project's carbon reduction strategy includes:
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>CO2 Reduction Projections:</strong> SolarWave Eco-Park is projected to reduce 3.5 million metric tons of CO2 annually. Over the 25-year lifespan of the project, this would amount to a total reduction of 87.5 million metric tons of CO2, making a substantial contribution to global emissions reduction goals.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>Energy Efficiency Measures:</strong> In addition to generating clean energy, SolarWave Energy Corp. has implemented energy efficiency measures throughout the project's design and operational phases. For instance, the company has employed high-efficiency solar panels with advanced tracking systems that maximize energy capture, thereby increasing overall energy output while minimizing resource use.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>Lifecycle Assessment:</strong> A full lifecycle assessment was conducted to evaluate the environmental impact of the project from cradle to grave. This assessment confirmed that the energy produced by SolarWave Eco-Park will significantly outweigh the environmental costs associated with the production, installation, and maintenance of the PV panels.
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            3.2. Biodiversity Conservation
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Recognizing the importance of protecting biodiversity, SolarWave Energy Corp. has taken several measures to minimize the impact of the project on local wildlife:
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>Wildlife Corridors:</strong> The project design includes wildlife corridors that allow animals to move freely through the area without being obstructed by the solar panel arrays. These corridors were developed in consultation with local conservation organizations to ensure that they meet the needs of local species.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>Habitat Restoration:</strong> SolarWave Energy Corp. has committed to restoring any disturbed habitats to their original condition at the end of the project's lifecycle. This includes replanting native vegetation and rehabilitating areas that may have been affected by construction activities.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>Monitoring Programs:</strong> Ongoing monitoring programs are in place to track the health of local ecosystems and ensure that the project continues to operate in an environmentally responsible manner. These programs are designed to detect any negative impacts on wildlife and to take corrective action if necessary.
                        </Typography>
                    </Box>

                    <Box sx={{ mt: 4 }}>
                        <Typography variant="h6" gutterBottom>
                            4. Social Compliance
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            4.1. Community Engagement
                        </Typography>
                        <Typography variant="body1" paragraph>
                            From the outset, SolarWave Energy Corp. has engaged with local communities to inform them about the project, address any concerns, and ensure that the project benefits the region. Key initiatives include:
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>Job Creation:</strong> The project has created over 2,000 construction jobs and will provide 200 permanent operational jobs once the facility is fully operational. SolarWave Energy Corp. prioritizes hiring local workers and has partnered with local technical schools to provide training programs for residents.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>Education and Outreach:</strong> SolarWave Energy Corp. has launched an educational outreach program aimed at raising awareness about renewable energy and sustainability. This program includes partnerships with local schools, where students can visit the project site and learn about solar energy and environmental stewardship.
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            4.2. Human Rights and Labor Standards
                        </Typography>
                        <Typography variant="body1" paragraph>
                            SolarWave Energy Corp. is committed to upholding the highest standards of human rights and labor practices. The company adheres to the following principles:
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>Fair Wages and Safe Working Conditions:</strong> All workers involved in the SolarWave Eco-Park project are paid fair wages and provided with safe working conditions. The company complies with all relevant labor laws, including those related to working hours, safety standards, and non-discrimination.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>Stakeholder Consultation:</strong> SolarWave Energy Corp. has conducted extensive stakeholder consultations throughout the project development process. This includes engaging with indigenous groups, landowners, and local governments to ensure that the project respects the rights and interests of all stakeholders.
                        </Typography>
                    </Box>

                    <Box sx={{ mt: 4 }}>
                        <Typography variant="h6" gutterBottom>
                            5. Conclusion
                        </Typography>
                        <Typography variant="body1" paragraph>
                            The SolarWave Eco-Park project represents a major step forward in the transition to a low-carbon economy. SolarWave Energy Corp. has demonstrated its commitment to reducing greenhouse gas emissions, protecting the environment, and benefiting local communities through this innovative project.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            By adhering to strict regulatory, environmental, and social compliance standards, SolarWave Energy Corp. has set a new benchmark for the renewable energy industry. The company will continue to monitor and report on the project's performance, ensuring that SolarWave Eco-Park contributes to a more sustainable future for generations to come.
                        </Typography>
                    </Box>

                    <Box sx={{ mt: 4, mb: 2 }}>
                        <Typography variant="body2" color="textSecondary">
                            Prepared by: SolarWave Energy Corp., Compliance and Sustainability Division
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            August 29, 2024
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    );
};

export default ComplianceReport;
