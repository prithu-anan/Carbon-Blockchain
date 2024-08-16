import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import React from 'react'
import { tokens } from '../../../theme';
import { Link } from 'react-router-dom';
import LineChart from '../../../components/LineChart';
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import StatBox from '../../../components/StatBox';
import TokenIcon from '@mui/icons-material/Token';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const Investor = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const dummyArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            width={'50%'}
            margin={'0 auto'}
        >
            <Box
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                margin={'0 auto'}
                position={'relative'} // Enable relative positioning for the container
            >
                <Box>
                    <img
                        src="https://www.visiott.com/wp-content/uploads/2021/03/BlockChain_Banner-2.jpg"
                        alt="Investor"
                        width={'100%'}
                    />
                </Box>

                <Box
                    position={'absolute'}
                    bottom={'-39%'} // Adjust this value to position the image on top of the first one
                    left={'2%'}
                    // transform={'translateX(-40%)'} // Center the image horizontally
                >
                    <img
                        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                        alt="Investor"
                        width={'75%'}
                    />
                </Box>

                <Box
                    position={'absolute'}
                    bottom={'-15%'} // Adjust this value to position the image on top of the first one
                    left={'32%'}
                >
                    <Typography 
                        level="title-lg"
                        sx={{
                            color: colors.greenAccent[500],
                            fontWeight: 'bold',
                            fontSize: '2rem'
                        }}
                    >
                        Investor Name
                    </Typography>
                </Box>

                <Box
                    position={'absolute'}
                    bottom={'-21%'} // Adjust this value to position the image on top of the first one
                    left={'32%'}
                >
                    <Typography 
                        level="title-lg"
                        sx={{
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '1.1rem'
                        }}
                    >
                        Designation
                    </Typography>
                </Box>

                <Box
                    position={'absolute'}
                    bottom={'-35%'} // Adjust this value to position the image on top of the first one
                    left={'45%'}
                >
                    <Button 
                        variant="solid"
                        sx={{
                            backgroundColor: colors.greenAccent[700],
                            color: colors.grey[100],
                            // fontSize: "14px",
                            fontWeight: "bold",
                            padding: "5px 10px",
                        }}
                        LinkComponent={Link}
                        to="/developer/opportunities/details"
                    >
                        ASK TO INVEST
                    </Button>
                </Box>

                <Box
                    position={'absolute'}
                    bottom={'-35%'} // Adjust this value to position the image on top of the first one
                    left={'32%'}
                >
                    <Button 
                        variant="solid"
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.grey[100],
                            // fontSize: "14px",
                            fontWeight: "bold",
                            padding: "5px 10px",
                        }}
                        LinkComponent={Link}
                        to="/developer/opportunities/details"
                    >
                        MESSAGE
                    </Button>
                </Box>
            </Box>

            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
                mt={20}
            >
            <Box
                gridColumn="span 4"
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <StatBox
                    title="12,361"
                    subtitle="Tokens Invested"
                    progress="0.14"
                    increase="+14%"
                    icon={
                    <TokenIcon
                        sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                    />
                    }
                />
                </Box>
                <Box
                    gridColumn="span 4"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="431,225"
                        subtitle="Tokens Reserved"
                        progress="0.21"
                        increase="+21%"
                        icon={
                        <TokenIcon
                            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                        />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 4"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    >
                    <StatBox
                        title="32,441"
                        subtitle="Fiat Currency"
                        progress="0.05"
                        increase="+5%"
                        icon={
                        <MonetizationOnIcon
                            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                        />
                        }
                    />
                    </Box>
                </Box>
            <Box
                gridColumn="span 8"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                mt={2}
                width="100%"
            >
                <Box
                    mt="25px"
                    p="0 30px"
                    display="flex "
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Box>
                        <Typography
                            variant="h5"
                            fontWeight="600"
                            color={colors.grey[100]}
                        >
                            Revenue Generated
                        </Typography>
                        <Typography
                            variant="h3"
                            fontWeight="bold"
                            color={colors.greenAccent[500]}
                        >
                            $59,342.32
                        </Typography>
                    </Box>
                    <Box>
                        <IconButton>
                            <DownloadOutlinedIcon
                            sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                            />
                        </IconButton>
                    </Box>
                </Box>
                <Box height="250px" m="-20px 0 0 0">
                    <LineChart isDashboard={true} />
                </Box>
            </Box>
        </Box>
    )
}

export default Investor