import { useNavigate, useParams } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Avatar } from "@mui/material";

export const Detalle = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');

  const handleAtras = () => {
    navigate("/listado");
  };

  useEffect(() => {
    fetch(`https://www.melivecode.com/api/users/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setNombre(result.user.fname);
        setApellido(result.user.lname);
        setUsername(result.user.username);
        setEmail(result.user.email);
        setAvatar(result.user.avatar);
      });
  },[id]);


  return (
    <>

<Avatar src={avatar}></Avatar>

<Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Nombre"
          defaultValue="Hello World"
          value={nombre}
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Apellido"
          value={apellido}
        />
        <TextField
          id="outlined-read-only-input"
          label="Email"
          defaultValue="Hello World"
          value={email}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Username"
          defaultValue="Hello World"
          value={username}
          InputProps={{
            readOnly: true,
          }}
        />
      </div>  
    </Box>
      <Button onClick={handleAtras} size="small" variant="outlined">Atrás</Button>
    </>
  );
};
