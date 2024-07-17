import { Box, IconButton, Typography, useTheme } from "@mui/material"
import { tokens } from "../../../theme";
import OpportunityCard from "../../../components/Opportunity";
import SortIcon from '@mui/icons-material/Sort';
import Header from "../../../components/Header";

const Opportunities = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const dummyArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <Box m="20px">
            <Header
                title="Investment Opportunities"
                subtitle="List of Projects to Invest in"
            />
            <Box
                display={'flex'}
                justifyContent={'right'}
            >
                <IconButton
                    sx={{
                        // backgroundColor: colors.primary[400],
                        borderRadius: '3px',
                    }}
                >
                    <Typography
                        level="title-sm"
                        sx={{
                            // color: colors.blueAccent[500],
                            fontSize: '1rem',
                            fontFamily: 'monospace',
                            p: 0.5
                        }}
                    >
                        Sort
                    </Typography>
                    <SortIcon />
                </IconButton>
            </Box>
            <Box
                gap={3}
                display={'flex'}
                justifyContent={'center'}
                flexDirection={'row'}
                flexWrap={'wrap'}
            >
            {
                dummyArray.map((item, index) => (
                    <Box>
                        <OpportunityCard key={index} />
                    </Box>
                ))
            }
            </Box>
        </Box>
    )
}

export default Opportunities