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

export default function ReportCard() {
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
            {Date().toString()}
        </Typography>
        <Typography 
            level="body-md"
            sx={{
                m: '10px 0',
            }}
        >
            Compliance Report after site inspection
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
        >
            DOWNLOAD
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
        >
            SEE DETAILS
        </Button>
      </CardActions>
    </Card>
  );
}
