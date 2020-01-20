import React from 'react'
import ReactDOM from 'react-dom'
import { form, TextField, Card, CardContent, Grid, Button} from '@material-ui/core'

function SignUp() {
  return (
   <Card variant="outlined">
    <CardContent> 
     <Grid container 
           spacing={3} 
           direction="row" 
           justify="center" 
           alignItems="center"
     >
      <Grid item xs={6}>
       <TextField id="position" label="Cargo" variant="outlined" />
      </Grid>
      <Grid item xs={6}>
       <TextField id="rol" label="Rol" variant="outlined" />
      </Grid> 
      <Grid item xs={6}>
       <TextField id="name" label="Nombre" variant="outlined" /> 
      </Grid>
      <Grid item xs={6}>
       <TextField id="password" type="password" label="Contraseña" variant="outlined" /> 
      </Grid>
      <Button variant="contained" color="primary">
        Registrar
      </Button>
     </Grid>
     
  
    </CardContent>
   </Card>
   
  );
}

export default SignUp