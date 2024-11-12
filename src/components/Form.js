import React from "react";
import { Box, Button, Grid2, TextField, Typography } from "@mui/matrial";
import useForm from "../hooks/useForm"

const Form = () =>{
    const [formData, handleChange, resetForm] =useForm({
            name:   '', 
            email:  '', 
            date:   '', 
            contry: '',
            age:   '',
        });

        //Obtener la edad apartir de la fecha

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(!/\S+@\S+.\S+/.test(formData.email)) {
            alert("ingresa un correo valido.");
            return;
        }

        const age = parseInt(formData.age)
        if(isNaN(age) || age < 0 || age > 150){
             alert("La edad debe estar entre 0 y 150");
             return;
        }

        if(age < 18){
            alert("Usted esta chiquito no puede usar este formulario (dormir)")
            return;
        }

        console.log("Datos del formulario: ", formData);
        resetForm();
    };

    return (
        <Box sx={{ maxWidth: 400, margin: 'auto', mt: 5 }}>
            <Typography variant="h4" align="center" gutterButtom>
                Formularia en React avanzado
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid2 container spancing={2}>
                    <Grid2 item xs={12}>
                        <TextField
                            label="Nombre"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                </Grid2>
                    <Grid2 item xs={12}>
                        <TextField
                            label="Correo"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            required
                        />    
                </Grid2>
                <Grid2 item xs={12}>
                        <TextField
                            label="Fecha"
                            name="date"
                            type="date"
                            value={formData.date}
                            onChange={handleChange}
                            fullWidth
                            InputLabelProps={{ shrink: true}}
                            required
                        />    
                </Grid2>
                <Grid2 item xs={12}>
                        <TextField
                            select
                            label="Pais"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            fullWidth 
                            required
                        > 
                                <MenuItem value="Mexico">Mexico</MenuItem>
                                <MenuItem value="USA">USA</MenuItem>
                                <MenuItem value="Canada">Canada</MenuItem>
                                <MenuItem value="Argentina">Argentina</MenuItem>
                            </TextField>   
                </Grid2>
                    <Grid2 item xs={12}>
                        <TextField
                            label="Edad"
                            name="age"
                            type="number"
                            value={formData.age}
                          onChange={handleChange}
                            fullWidth
                            required
                 />    
                </Grid2>
                    <Grid2 item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ mt: 2 }}
                       >
                        Enviar
                       </Button>
                </Grid2>
                </Grid2>
                </form>
            </Box>
    );
};

export default Form;