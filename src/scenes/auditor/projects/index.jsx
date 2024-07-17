import { Box, IconButton, Typography, useTheme } from "@mui/material"
import { tokens } from "../../../theme";
import ProjectCard from "../../../components/Project";
import SortIcon from '@mui/icons-material/Sort';
import Header from "../../../components/Header";

const Projects = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const dummyArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <Box m="20px">
            <Header
                title="PROJECTS"
                subtitle="List of Projects to be Audited"
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
            {
                dummyArray.map((item, index) => (
                    <Box mb='20px'>
                        <ProjectCard key={index} />
                    </Box>
                ))
            }
        </Box>
    )
}

export default Projects