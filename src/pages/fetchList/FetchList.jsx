import React from "react";
import {Grid, Paper, Box} from '@mui/material';


const FetchList = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper sx={{p: 2}}>
                    <Box>Fetch List</Box>
                    <h1>Aca va la Lista</h1>
                </Paper>
            </Grid>
        </Grid>
    );
};
export default FetchList;