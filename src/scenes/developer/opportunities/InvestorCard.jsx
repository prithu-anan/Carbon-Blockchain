import { Box, Button, Grid, Typography, useTheme } from '@mui/material'
import React from 'react'
import { tokens } from '../../../theme';
import { Link } from 'react-router-dom';

const InvestorCard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Grid item xs={12} sm={6}>
        <Box
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            width={'100%'}
            height={'150px'}
            backgroundColor={colors.primary[700]}
            borderRadius={2}
            p={2}
        >
            <Box
                display={'flex'}
                flexDirection={'row'}
                justifyContent={'center'}
                alignItems={'center'}
                width={'20%'}
            >
                <img
                    src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                    alt="Investor"
                    width={'130px'}
                    height={'130px'}
                />
            </Box>

            <Box
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignContent={'center'}
                width={'80%'}
                pl={3}
            >
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'left'}
                    alignContent={'center'}
                >
                    <Typography 
                        level="title-lg"
                        sx={{
                            color: colors.greenAccent[500],
                            fontWeight: 'bold',
                        }}
                    >
                        Investor Name
                    </Typography>
                    <Typography 
                        level="title-sm"
                        sx={{
                            color: colors.blueAccent[500],
                        }}
                    >
                        Designation
                    </Typography>
                    <Typography 
                        level="body-md"
                        sx={{
                            m: '10px 0',
                        }}
                    >
                        Short Description of Investor
                    </Typography>
                </Box>

                <Box
                    display={'flex'}
                    flexDirection={'row'}
                    justifyContent={'right'}
                    alignContent={'center'}
                    width={'100%'}
                >
                <Button 
                    variant="solid"
                    sx={{
                        backgroundColor: colors.greenAccent[700],
                        color: colors.grey[100],
                        // fontSize: "14px",
                        fontWeight: "bold",
                        padding: "5px 10px",
                        m: 1
                    }}
                    LinkComponent={Link}
                    to="/developer/opportunities/details"
                >
                    SEE DETAILS
                </Button>
                </Box>
            </Box>
        </Box>
    </Grid>
  )
}

export default InvestorCard