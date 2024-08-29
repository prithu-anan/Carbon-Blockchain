import { Box, Button, Container, Grid, TextField, ThemeProvider, Typography, useTheme } from '@mui/material';
import React from 'react'
import { tokens } from '../../theme';
import { getCarbonOffsetCount } from '../../api-helpers';

const CarbonOffset = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [temperature, setTemperature] = React.useState(0);
    const [pressure, setPressure] = React.useState(0);
    const [humidity, setHumidity] = React.useState(0);
    const [speed, setSpeed] = React.useState(0);
    const [wind_direction, setWindDirection] = React.useState(0);
    const [month, setMonth] = React.useState(0);
    const [day, setDay] = React.useState(0);
    const [hour, setHour] = React.useState(0);
    const [minute, setMinute] = React.useState(0);
    const [second, setSecond] = React.useState(0);
    const [risehour, setRiseHour] = React.useState(0);
    const [riseminute, setRiseMinute] = React.useState(0);
    const [sethour, setSetHour] = React.useState(0);
    const [setminute, setSetMinute] = React.useState(0);
    const [area, setArea] = React.useState(0);
    const [efficiency, setEfficiency] = React.useState(0);

    const [result, setResult] = React.useState(null);

    const handleTemperatureChange = (e) => {
        setTemperature(parseFloat(e.target.value));
    }

    const handlePressureChange = (e) => {
        setPressure(parseFloat(e.target.value));
    }

    const handleHumidityChange = (e) => {
        setHumidity(parseFloat(e.target.value));
    }

    const handleSpeedChange = (e) => {
        setSpeed(parseFloat(e.target.value));
    }

    const handleWindDirectionChange = (e) => {
        setWindDirection(parseFloat(e.target.value));
    }

    const handleMonthChange = (e) => {
        setMonth(parseInt(e.target.value));
    }

    const handleDayChange = (e) => {
        setDay(parseInt(e.target.value));
    }

    const handleHourChange = (e) => {
        setHour(parseInt(e.target.value));
    }

    const handleMinuteChange = (e) => {
        setMinute(parseInt(e.target.value));
    }

    const handleSecondChange = (e) => {
        setSecond(parseInt(e.target.value));
    }

    const handleRiseHourChange = (e) => {
        setRiseHour(parseInt(e.target.value));
    }

    const handleRiseMinuteChange = (e) => {
        setRiseMinute(parseInt(e.target.value));
    }

    const handleSetHourChange = (e) => {
        setSetHour(parseInt(e.target.value));
    }

    const handleSetMinuteChange = (e) => {
        setSetMinute(parseInt(e.target.value));
    }

    const handleAreaChange = (e) => {
        setArea(parseFloat(e.target.value));
    }

    const handleEfficiencyChange = (e) => {
        setEfficiency(parseFloat(e.target.value));
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const res = await getCarbonOffsetCount({
            temperature,
            pressure,
            humidity,
            speed,
            wind_direction,
            month,
            day,
            hour,
            minute,
            second,
            risehour,
            riseminute,
            sethour,
            setminute,
            area,
            efficiency,
        });
        console.log(res);
        setResult(res);
    }

    // React.useEffect(() => {
    //     if (response) {
    //         console.log(response);
    //     }
    // }, [response])

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                }}
            >
                <Container maxWidth={'md'}
                    sx={{
                        alignItems: 'center',
                        bgcolor: 'background',
                        boxShadow: 24,
                        borderRadius: 5,
                        p: 4,
                    }}
                >
                    <Typography variant="h2" color={colors.greenAccent[500]} align="center" gutterBottom>
                        Calculate Carbon Offset
                    </Typography>                    
                    <div>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        type="number"
                                        inputProps={{
                                            step: 'any',
                                        }}
                                        onChange={handleTemperatureChange}
                                        fullWidth
                                        variant="outlined"
                                        label="Temperature"
                                        name="temperature"
                                        sx={{ bgcolor: 'background.paper'}}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        type="number"
                                        inputProps={{
                                            step: 'any',
                                        }}
                                        inputMode='decimal'
                                        onChange={handlePressureChange}
                                        fullWidth
                                        variant="outlined"
                                        label="Pressure"
                                        name="pressure"
                                        sx={{ bgcolor: 'background.paper'}}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        type="number"
                                        inputProps={{
                                            step: 'any',
                                        }}
                                        onChange={handleHumidityChange}
                                        fullWidth
                                        variant="outlined"
                                        label="Humidity"
                                        name="humidity"
                                        sx={{ bgcolor: 'background.paper'}}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        type="number"
                                        inputProps={{
                                            step: 'any',
                                        }}
                                        onChange={handleSpeedChange}
                                        fullWidth
                                        variant="outlined"
                                        label="Speed"
                                        name="speed"
                                        sx={{ bgcolor: 'background.paper'}}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        type="number"
                                        inputProps={{
                                            step: 'any',
                                        }}
                                        onChange={handleWindDirectionChange}
                                        fullWidth
                                        variant="outlined"
                                        label="WindDirection"
                                        name="wind-direction"
                                        sx={{ bgcolor: 'background.paper'}}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        type="number"
                                        onChange={handleMonthChange}
                                        fullWidth
                                        variant="outlined"
                                        label="Month"
                                        name="month"
                                        sx={{ bgcolor: 'background.paper'}}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        type="number"
                                        onChange={handleDayChange}
                                        fullWidth
                                        variant="outlined"
                                        label="Day"
                                        name="day"
                                        sx={{ bgcolor: 'background.paper'}}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        type="number"
                                        onChange={handleHourChange}
                                        fullWidth
                                        variant="outlined"
                                        label="Hour"
                                        name="hour"
                                        sx={{ bgcolor: 'background.paper'}}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        type="number"
                                        onChange={handleMinuteChange}
                                        fullWidth
                                        variant="outlined"
                                        label="Minute"
                                        name="minute"
                                        sx={{ bgcolor: 'background.paper'}}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        type="number"
                                        onChange={handleSecondChange}
                                        fullWidth
                                        variant="outlined"
                                        label="Second"
                                        name="second"
                                        sx={{ bgcolor: 'background.paper'}}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        type="number"
                                        onChange={handleRiseHourChange}
                                        fullWidth
                                        variant="outlined"
                                        label="RiseHour"
                                        name="rise-hour"
                                        sx={{ bgcolor: 'background.paper'}}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        type="number"
                                        onChange={handleRiseMinuteChange}
                                        fullWidth
                                        variant="outlined"
                                        label="RiseMinute"
                                        name="rise-minute"
                                        sx={{ bgcolor: 'background.paper'}}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        type="number"
                                        onChange={handleSetHourChange}
                                        fullWidth
                                        variant="outlined"
                                        label="SetHour"
                                        name="set-hour"
                                        sx={{ bgcolor: 'background.paper'}}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        type="number"
                                        onChange={handleSetMinuteChange}
                                        fullWidth
                                        variant="outlined"
                                        label="SetMinute"
                                        name="set-minute"
                                        sx={{ bgcolor: 'background.paper'}}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        type="number"
                                        inputProps={{
                                            step: 'any',
                                        }}
                                        onChange={handleAreaChange}
                                        fullWidth
                                        variant="outlined"
                                        label="Area"
                                        name="area"
                                        sx={{ bgcolor: 'background.paper'}}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        type="number"
                                        inputProps={{
                                            step: 'any',
                                        }}
                                        onChange={handleEfficiencyChange}
                                        fullWidth
                                        variant="outlined"
                                        label="Efficiency"
                                        name="efficiency"
                                        sx={{ bgcolor: 'background.paper'}}
                                    />
                                </Grid>
                            
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{
                                            color:'white',
                                            backgroundColor: colors.greenAccent[700],
                                            ':hover': {
                                                backgroundColor: colors.redAccent[700],
                                            }
                                        }}
                                    >
                                        Submit
                                    </Button>
                                </Grid>

                                {result && (
                                    <Grid item xs={12}>
                                        <Typography variant="h4" color={colors.redAccent[500]} align="center" gutterBottom>
                                            Result: {result}
                                        </Typography>
                                    </Grid>
                                )}

                            </Grid>
                        </form>
                    </div>
                </Container>
            </Box>
        </ThemeProvider>
    )
}

export default CarbonOffset