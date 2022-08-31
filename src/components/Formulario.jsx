import { BaseColaboradores } from "../BaseColaboradores";
import { useState } from "react";
import ListaColaboradores from "./ListaColaboradores";
import Buscador from './Buscador';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

function Formulario() {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");

    const AgregarColaborador = (e) => {
        e.preventDefault();

        if (nombre === "" || correo === "") {
            alert("Todos los campos son obligatorios");
        }
        else {
            const nuevoId = BaseColaboradores.length + 1;
            BaseColaboradores.push({
                id: String(nuevoId),
                nombre: nombre,
                correo: correo,
            });
        }
        setNombre("");
        setCorreo("");
    };

    return (
        <div className="contenedor">
            <div className="formulario">
                <div className="agregar">
                    <h1>Agregar Colaborador</h1>
                    <form onSubmit={AgregarColaborador}>
                        <div className="agregarDatos">
                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Nombre del colaborador</Form.Label>
                                <Form.Control placeholder="Ingrese el nombre del colaborador" onChange={(e) => { setNombre(e.target.value); }} value={nombre} />
                            </Form.Group>
                        </div>
                        <div className="agregarDatos">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Correo del colaborador</Form.Label>
                                <Form.Control type="email" placeholder="Ingresa correo del colaborador" onChange={(e) => { setCorreo(e.target.value); }} value={correo} />
                            </Form.Group>
                        </div>
                        <Button type="submit">Agregar colaborador</Button>
                    </form>
                </div>
                <div className="lista"><ListaColaboradores /></div>
            </div>
            <Buscador />
        </div>
    );
}

export default Formulario;