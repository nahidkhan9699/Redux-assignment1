import React from "react";
import { navData } from "./navData";
import { Grid,Button } from "@mui/material";
import { Link } from "react-router-dom";
export const Nav=()=>{
    return(
<Grid container spacing={2}sx={{marginTop:1}}>

    {
        navData.map((item)=>(
            <Grid item xs={4}>
                <Link to={item.path}>
                <Button variant="contained"  color="secondary" fullWidth>{item.label}</Button>
                </Link>
            </Grid>

        ))
    }
</Grid>
    )
}