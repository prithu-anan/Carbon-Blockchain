import { Box, Button, Typography, useTheme } from '@mui/material'
import React from 'react'
import { tokens } from '../../../theme';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import StatBox from '../../../components/StatBox';
import ProgressCircle from '../../../components/ProgressCircle';
import MilestoneCard from './MilestoneCard';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

const UpdateCard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const dummyArray = [0, 1, 2, 3, 4, 5]

  return (
    <Box
        classname="project-container"
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        bgcolor={colors.primary[700]}
        p={2}
        borderRadius={3}
        boxShadow={2}
        height='300px'
    >
        <Box 
            classname="project-details"
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            width='20%'
            height={'100%'}
        >
            <Box 
                classname="project-name"
                height='15%'
            >
                <Typography 
                    level="title-lg"
                    sx={{
                        color: colors.greenAccent[500],
                        fontWeight: 'bold',
                        fontSize: '1rem'
                    }}
                >
                    Project Name
                </Typography>
            </Box>
                
            <Box 
                classname="project-image"
                height='85%'
            >
                <img 
                    src="https://media.licdn.com/dms/image/D4D12AQEIEYQ3dyHT5A/article-cover_image-shrink_720_1280/0/1693203188965?e=2147483647&v=beta&t=mH4ZuECjje0NGB3Wdjd5wou-mxfB7LgQxMNITIoi1Fk" 
                    alt="Project Image" 
                    height='230px' 
                    width='230px'
                    style={{objectFit: 'cover'}}
                />
            </Box>
        </Box>

        <Box 
            classname="project-updates"
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'} 
            justifyContent={'center'}       
            width='80%'
        >
            <Box 
                classname="update-heading"
                display={'flex'}
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'center'}
                height='10%'
                width='95%'
            >
                <Box 
                    classname='heading'
                    display={'flex'}
                    flexDirection={'row'}
                    justifyContent={'left'}
                    alignItems={'center'}
                    width='85%'
                >
                    <Typography 
                        level="title-lg"
                        sx={{
                            color: colors.blueAccent[500],
                            fontWeight: 'bold',
                            fontSize: '1rem'
                        }}
                    >
                        Project Milstones
                    </Typography>
                </Box>

                <Box 
                    classname='progress-report'
                    display={'flex'}
                    flexDirection={'row'}
                    justifyContent={'right'}
                    alignItems={'center'}
                    width='15%'
                >
                    <Button
                        sx={{
                        backgroundColor: colors.blueAccent[700],
                        color: colors.grey[100],
                        fontSize: "10px",
                        fontWeight: "bold",
                        padding: "5px 10px",
                        }}
                    >
                        Download Report
                    </Button>
                </Box>

            </Box>

            <Box 
                classname="project-milestones"
                display={'flex'}
                flexDirection={'row'}
                justifyContent={'center'}
                alignItems={'center'}
                height='70%'
                padding={2.5}
            >
                {
                    dummyArray.map((item, index) => (
                        <MilestoneCard key={index} milestone={index + 1} progress={0.5}/>
                    ))
                }
                {/* <Box 
                    classname="milestone-1"
                    backgroundColor={colors.primary[500]}
                    height='160px'
                    width='160px'
                    margin={1}
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
                            Milestone 1
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
                        <ProgressCircle progress={0.50} size={90} />
                        
                        <Typography
                            level="title-lg"
                            sx={{
                                position: 'absolute',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '1rem',
                            }}
                        >
                            50%
                        </Typography>
                    </Box>
                </Box>

                <Box 
                    classname="milestone-2"
                    backgroundColor={colors.primary[500]}
                    height='160px'
                    width='160px'
                    margin={1}
                >
                    <Box
                        classname="milestone-2-heading"
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
                            Milestone 2
                        </Typography>
                    </Box>

                    <Box
                        classname="milestone-2-progress"
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        margin={1}
                        height='80%'
                        position="relative"
                    >
                        <ProgressCircle progress={0.50} size={90} />
                        
                        <Typography
                            level="title-lg"
                            sx={{
                                position: 'absolute',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '1rem',
                            }}
                        >
                            50%
                        </Typography>
                    </Box>
                </Box>

                <Box 
                    classname="milestone-3"
                    backgroundColor={colors.primary[500]}
                    height='160px'
                    width='160px'
                    margin={1}
                >
                    <Box
                        classname="milestone-3-heading"
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
                            Milestone 3
                        </Typography>
                    </Box>

                    <Box
                        classname="milestone-3-progress"
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        margin={1}
                        height='80%'
                        position="relative"
                    >
                        <ProgressCircle progress={0.50} size={90} />
                        
                        <Typography
                            level="title-lg"
                            sx={{
                                position: 'absolute',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '1rem',
                            }}
                        >
                            50%
                        </Typography>
                    </Box>
                </Box>

                <Box 
                    classname="milestone-4"
                    backgroundColor={colors.primary[500]}
                    height='160px'
                    width='160px'
                    margin={1}
                >
                    <Box
                        classname="milestone-4-heading"
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
                            Milestone 4
                        </Typography>
                    </Box>

                    <Box
                        classname="milestone-4-progress"
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        margin={1}
                        height='80%'
                        position="relative"
                    >
                        <ProgressCircle progress={0.50} size={90} />
                        
                        <Typography
                            level="title-lg"
                            sx={{
                                position: 'absolute',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '1rem',
                            }}
                        >
                            50%
                        </Typography>
                    </Box>
                </Box>

                <Box 
                    classname="milestone-5"
                    backgroundColor={colors.primary[500]}
                    height='160px'
                    width='160px'
                    margin={1}
                >
                    <Box
                        classname="milestone-5-heading"
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
                            Milestone 5
                        </Typography>
                    </Box>

                    <Box
                        classname="milestone-5-progress"
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        margin={1}
                        height='80%'
                        position="relative"
                    >
                        <ProgressCircle progress={0.50} size={90} />
                        
                        <Typography
                            level="title-lg"
                            sx={{
                                position: 'absolute',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '1rem',
                            }}
                        >
                            50%
                        </Typography>
                    </Box>
                </Box>

                <Box 
                    classname="milestone-6"
                    backgroundColor={colors.primary[500]}
                    height='160px'
                    width='160px'
                    margin={1}
                >
                    <Box
                        classname="milestone-6-heading"
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
                            Milestone 6
                        </Typography>
                    </Box>

                    <Box
                        classname="milestone-6-progress"
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        margin={1}
                        height='80%'
                        position="relative"
                    >
                        <ProgressCircle progress={0.50} size={90} />
                        
                        <Typography
                            level="title-lg"
                            sx={{
                                position: 'absolute',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '1rem',
                            }}
                        >
                            50%
                        </Typography>
                    </Box>
                </Box> */}
            </Box>

            <Box 
                classname="project-progress"
                display={'flex'}
                flexDirection={'row'}
                justifyContent={'center'}
                alignItems={'center'}
                width='95%'
                height='20%'
            >
                <Box 
                    classname="progress-heading"
                    width='15%'
                >
                    <Typography 
                        level="title-lg"
                        sx={{
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '1rem'
                        }}
                    >
                        Project Progress
                    </Typography>
                </Box>

                <Box 
                    classname="progress-bar"
                    width='80%'
                >
                    <BorderLinearProgress variant="determinate" value={50} />
                </Box>

                <Box 
                    classname="progress-amount"
                    width='5%'
                    display={'flex'}
                    flexDirection={'row'}
                    justifyContent={'right'}
                    alignItems={'center'}
                >
                    <Typography 
                        level="title-lg"
                        sx={{
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '1rem'
                        }}
                    >
                        50%
                    </Typography>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default UpdateCard