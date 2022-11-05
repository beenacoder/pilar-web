import React, {useEffect, useState} from "react";
import {Grid, Typography} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { appSelector, appActions } from '../../redux/appRedux';




const FetchList = () => {
   
   
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(appActions.setPageTitle('LISTA TAREAS'))
    },[])


    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography component="div" variant="h5">
                    FetchList
                </Typography>
            </Grid>
        </Grid>
    )
};
export default FetchList;