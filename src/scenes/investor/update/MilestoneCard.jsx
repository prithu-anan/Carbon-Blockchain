import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import ProgressCircle from '../../../components/ProgressCircle'
import { tokens } from '../../../theme';

const MilestoneCard = (props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box 
        classname="milestone-1"
        backgroundColor={colors.primary[500]}
        height='160px'
        width='160px'
        margin={1}
        borderRadius={2}
    >
        <Box
            classname="milestone-1-heading"
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            height='10%'
            margin={1}
        >
            <Typography 
                level="title-lg"
                sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1rem'
                }}
            >
                Milestone {props.milestone}
            </Typography>
        </Box>

        <Box
            classname="milestone-1-progress"
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            margin={1}
            height='80%'
            position="relative"
        >
            <ProgressCircle progress={props.progress} size={90} />
            
            <Typography
                level="title-lg"
                sx={{
                    position: 'absolute',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                }}
            >
                {props.progress * 100}%
            </Typography>
        </Box>
    </Box>
  )
}

export default MilestoneCard