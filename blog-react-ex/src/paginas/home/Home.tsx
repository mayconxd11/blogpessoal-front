import React from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import {Box} from '@mui/material';
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#3F51B5" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>Expresse aqui suas opniões</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#3F51B5", color: "white" }}>ver mais Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://o.remove.bg/downloads/53c918e6-3c51-448d-a98e-acbcd17b7a95/pngtree-people-working-in-a-table-meeting-and-the-co-working-shared-png-image_4520216-removebg-preview.png" alt="" width="350px" height="350px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;