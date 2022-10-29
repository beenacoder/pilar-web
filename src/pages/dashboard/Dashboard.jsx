import React, {useEffect} from "react";
import {Grid, Paper, Box, Card, CardContent, Typography} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { appSelector, appActions } from '../../redux/appRedux';


const Dashboard = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(appActions.setPageTitle('TABLERO'))
    },[])

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                        Aca no se que va
                    </Typography>
                </CardContent>
            </Card>
            
                <Paper sx={{p: 2}}>
                    <Box>Dashboard</Box>
                    <h1>Aca es dashboard</h1>
                </Paper>
            </Grid>
        </Grid>
    );
};
export default Dashboard;