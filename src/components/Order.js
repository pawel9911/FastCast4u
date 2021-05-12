import { Box, Button, Grid, Typography } from "@material-ui/core";

const Order = ({img, whatIs, options, direction, spaceing}) =>{
    const arr =options;
    const newArr = arr.map((e, i)=> <p key={i}>{e[0]} <span className='colorDescription'>{e[1]}</span> {e[2]} {e[3]?<span className='colorDescription'>{e[3]}</span>: null}</p>)   
    
    return(
        <Grid container item className='order' direction={direction} justify={spaceing}>
            <img src={img} alt={whatIs}></img>
            <Box component='div' className='options'>
                <Typography component='h3'>{whatIs}</Typography>
                {newArr}
                <Button variant="contained">ORDER NOW</Button>
            </Box>
        </Grid>

    )
}

export default Order;
