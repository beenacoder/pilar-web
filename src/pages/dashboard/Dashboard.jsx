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
            <Grid item xs={12} sx={{ display: 'inline-flex' }}>
                <Grid item xs={6}>
                    <Card sx={{ minWidth: 275, my:2 }} >
                        <CardContent >
                            
                            <Typography variant="h5" component="div">
                                Tareas completadas
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                
            
                <Grid item xs={6}>
                    <Card sx={{ minWidth: 275, my:2 }} >
                        <CardContent >
                           
                            <Typography variant="h5" component="div">
                                Tareas faltantes
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Paper sx={{p: 2}}>
                     <Box>Dashboard</Box>
                     <h1>Aca es dashboard</h1>
                </Paper>
            </Grid>
        </Grid>
    );
};
export default Dashboard;