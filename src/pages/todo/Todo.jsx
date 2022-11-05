import React from "react";
import {Grid, Paper, Box} from '@mui/material';


const Todo = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper sx={{p: 2}}>
                    <Box>Todo</Box>
                    <h1>Aca va el To Do</h1>
                </Paper>
            </Grid>
        </Grid>
    );
};
export default Todo;