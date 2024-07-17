import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/joy/CardActions';
// import Chip from '@mui/material/Chip';
import Typography from '@mui/joy/Typography';
import { useTheme } from '@mui/material';
import { tokens } from '../theme';
import { Link } from 'react-router-dom';

export default function ProjectCard() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Card
    //   variant="solid"
    backgroundColor={colors.primary[400]}
      invertedColors
      sx={{
        boxShadow: 'lg',
        // width: 400,
        maxWidth: '100%',
        // to make the demo resizeable
        overflow: 'auto',
        // resize: 'horizontal',
      }}
    >
      <CardContent>
        <Typography 
            level="title-lg"
            sx={{
                color: colors.greenAccent[500],
                fontWeight: 'bold',
            }}
        >
            Project Name
        </Typography>
        <Typography 
            level="title-sm"
            sx={{
                color: colors.blueAccent[500],
            }}
        >
            Company Name
        </Typography>
        <Typography 
            level="body-md"
            sx={{
                m: '10px 0',
            }}
        >
            Our company's goal is to achieve a significant reduction in carbon emissions through a comprehensive carbon reduction scheme. This initiative includes transitioning to renewable energy sources, enhancing energy efficiency across all operations, and implementing sustainable practices throughout our supply chain. By setting measurable targets and timelines, we aim to minimize our carbon footprint, contributing to global efforts to combat climate change. This scheme will be regularly audited to ensure transparency, accountability, and continuous improvement, demonstrating our commitment to environmental stewardship and sustainability.
        </Typography>
      </CardContent>
      <CardActions
        sx={{
        //   display: 'flex',
        //   justifyContent: 'space-between',
            justifyContent: 'right',
            // p: 1,
            // m: 1
        }}
      >
        <Button 
            // variant="solid"
            sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
                // fontSize: "14px",
                fontWeight: "bold",
                padding: "5px 10px",
                m: 1
            }}
            LinkComponent={Link}
            to="/auditor/projects/details"
        >
            See Details
        </Button>
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
            to="/auditor/dashboard"
        >
            Audit Now
        </Button>
      </CardActions>
    </Card>
  );
}
