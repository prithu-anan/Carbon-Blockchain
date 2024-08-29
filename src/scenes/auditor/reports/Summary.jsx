import React, { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import axios from 'axios';
import { getSummary } from '../../../api-helpers';

const Summary = () => {
    const [summary, setSummary] = useState('');

    useEffect(() => {
        // Fetch the summary from the server
        getSummary()
            .then(response => {
                setSummary(response);
            })
            .catch(error => {
                console.error('Error fetching the summary:', error);
            });
    }, []);

    // Function to parse the response text into HTML
    const parseSummary = (text) => {
        return text
            .replace(/^## (.*):/gm, '<h4>$1</h4>') // Convert headings
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Convert bold text
            .replace(/\*(.*?)\*/g, '<em>$1</em>') // Convert italic text
            .replace(/\n/g, '<br/>'); // Convert new lines to <br/>
    };

    return (
        <Container maxWidth="md">
            <Box sx={{ mt: 4, bgcolor: 'background.paper', p: 3 }}>
                <Typography 
                    component="div" 
                    dangerouslySetInnerHTML={{ __html: parseSummary(summary) }} 
                />
            </Box>
        </Container>
    );
};

export default Summary;
