import { useState } from "react";
import { BaseColaboradores } from "../BaseColaboradores";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

const Buscador = () => {

    const [buscar, setBuscar] = useState("");
    const [busqueda, setBusqueda] = useState([]);

    const ejecutaBusqueda = (e) => {
        e.preventDefault();

        const resultado = BaseColaboradores.filter((element) =>
            element.nombre.toLowerCase().includes(buscar.toLowerCase())
        );

        if (buscar === "") {
            alert("Por favor ingrese un nombre");
            return;
        } else if (resultado.length === 0) {
            alert("Colaborador no existe!");
            return;
        } else {
            setBusqueda(resultado);
        }
        setBuscar("");
    };

    return (
        <>
            <div className="buscador">
                <h1>Buscador de Colaboradores</h1>
                <div className="busqueda">
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Control placeholder="Búsqueda por nombre" onChange={(e) => { setBuscar(e.target.value); }} value={buscar} />
                    </Form.Group>
                    <Button onClick={ejecutaBusqueda}> Buscar </Button>
                </div>
                {busqueda.map((colaborador) => (
                    <p key={colaborador.id}>
                        <div className="resultado">
                            <div>Nombre: {colaborador.nombre}</div>
                            <div>Correo: {colaborador.correo}</div>
                        </div>
                    </p>
                ))}
            </div>
        </>
    );
};
export default Buscador;