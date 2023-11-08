import React from "react";
import { Grid,Card,CardContent,Button } from "@mui/material";
import { useDispatch,useSelector } from "react-redux";
export const Color=()=>{
   const dispatch=useDispatch();
   const selectcolor=useSelector((state)=>state.colorReducer.color)
   const color=["error","info","inherit","primary","secondary","success","warning"];
   const handlecolor=((src)=>
   {
      const type="SELECTED_COLOR"
      const payload=src;
      const action={type,payload}
      dispatch(action)

   }
   )
   return(
<Grid container spacing={2}>

      <Grid item xs={12}>
      <Card align="center">
         <CardContent>
           <h2>
            {selectcolor.toUpperCase()}
            </h2> 
         </CardContent>
      </Card>
      </Grid>
      {
         color.map((item)=>
         <Grid item xs={4}>
         <Button variant="contained" fullWidth onClick={()=>handlecolor(item)} color={item}>{item}</Button>
         </Grid>
         )
      }

</Grid>
   )
}