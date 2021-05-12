const { Button, Box, Typography, Grid } = require("@material-ui/core");


const Package = ({name, height, forWho, price, src}) =>{
    const desciription = forWho;
    return(
            <Grid container direction='column' justify='flex-start' alignItems='center' className='package'  style={{height:height, width: '30%'}}>
                <Typography variant='h3' component='h3'>{name}</Typography>
                <Box component='div' className='packagePrice'>{price}</Box>
                {desciription.map((e, i)=> <p key={i}>{e}</p>)}
                <img src={src} alt={name} max-width='40px' height='20px'/>
                <Button variant="contained">GET NOW</Button>
            </Grid>
    )
}

export default Package;
