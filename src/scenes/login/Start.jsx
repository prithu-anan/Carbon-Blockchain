import { Box, Button, Typography, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { tokens } from '../../theme';
import { Link, useNavigate } from 'react-router-dom';
import Metamask from '../../metamask';
import { useDispatch, useSelector } from 'react-redux';
import { accountActions } from '../../store';
import { connectWallet } from '../../store/connectWallet';

const Start = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const dispatch = useDispatch();
    const account = useSelector((state) => state.account.account);

    const metamask = new Metamask();
    const navigate = useNavigate();

    useEffect(() => {
        if (account) {
            navigate('/login');
            console.log('account', account);
        }
    }, [account, navigate]);

    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            width={'100vw'}
            height={'100vh'}
            margin={'0 auto'}
        >
            <Typography
                variant={'h1'}
                color={colors.primary}
                textAlign={'center'}
            >
                Welcome to GreenBlox!
            </Typography>
            
            <Button 
                variant="solid"
                sx={{
                    backgroundColor: colors.greenAccent[700],
                    color: colors.grey[100],
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    py: 1,
                    px: 2,
                    m: 2,
                    ":hover": { backgroundColor: colors.redAccent[500] }
                }}
                onClick={() => dispatch(connectWallet())}
            >
                GET STARTED
            </Button>
        </Box>
    )
}

export default Start