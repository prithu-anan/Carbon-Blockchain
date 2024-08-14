import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import React from 'react'
import { tokens } from '../../../theme';
import Header from '../../../components/Header';
import SortIcon from '@mui/icons-material/Sort';
import UploadIcon from '@mui/icons-material/Upload';
import UpdateCard from '../../investor/update/UpdateCard';

const DeveloperUpdates = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const dummyArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <Box m="20px">
            <Header
                title="Updates"
                subtitle="Updates on projects under development"
            />
            <Box
                display={'flex'}
                flexDirection={'row'}
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
                {/* <Box
                    ml={1}
                >
                    <Button
                        sx={{
                        backgroundColor: colors.blueAccent[700],
                        color: colors.grey[100],
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "10px 20px",
                        }}
                    >
                        <UploadIcon sx={{ mr: "10px" }} />
                        Upload New Report
                    </Button>
                </Box> */}
            </Box>
            
            {
                dummyArray.map((item, index) => (
                    <Box mb='20px'>
                        <UpdateCard />
                    </Box>
                ))
            }
        </Box>
  )
}

export default DeveloperUpdates