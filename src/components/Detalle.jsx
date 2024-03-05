import { useNavigate, useParams } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";

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
        setApellido(result-user.lname);
        setUsername(result.user.username);
        setEmail(result.user.email);
        setAvatar(result.user.avatar);
      });
  },[id]);


  return (
    <>
      <div>
        Detalle {id}
        </div>
      <Button onClick={handleAtras} size="small" variant="outlined">Atrás</Button>
    </>
  );
};
