import React from 'react';
import { Grid,Card,CardContent,Button } from '@mui/material';
import { useDispatch,useSelector } from 'react-redux';

const Food = () => {
        const dispatch=useDispatch();
    const selectedfood=useSelector((state)=>state.foodReducer.food);
    const dish=["Paneer Tikka","Biryani","Gulab Jamun","Papad","Maggie","Noodeles","Pasta","chole Bhature"]; 
        const handleDish=(str)=>{
        const type="SELECTED_FOOD";
        const payload=str;
        const action={type,payload};
        dispatch(action);
    }  
    return (
       <Grid container spacing={2}>
                <Grid item xs={12} sx={{marginTop:2}}>
            <Card align="center" sx={{bgcolor:"rgb(224,224,224)"}}>
                <CardContent>
                  <marquee>
                     <h1 style={{fontStyle:'italic'}}>
                       <u> {selectedfood.toUpperCase()}</u>
                        </h1>
                    </marquee> 
                </CardContent>
            </Card>
            </Grid>
            {
                dish.map((item)=>
                <Grid item xs={3}>
                    <Card  sx={{bgcolor:"lemonchiffon",height:200}} align="center">
                        <CardContent>
                            <h1>{item.toUpperCase()}</h1>
                            <Button onClick={()=>handleDish(item)} variant="contained" color='inherit'  fullWidth>Add to cart</Button>
                        </CardContent>
                    </Card>
                </Grid>
                )
            }
       </Grid>
    );
};

export default Food;