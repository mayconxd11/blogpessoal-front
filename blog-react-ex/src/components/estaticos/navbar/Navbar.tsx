import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box style={{ cursor: "pointer" }}  >
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start" >
                        <Box mx={3} style={{ cursor: "pointer" }} >
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                        <Box mx={3} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Sobre
                            </Typography>
                        </Box>
                        <Box mx={3} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;