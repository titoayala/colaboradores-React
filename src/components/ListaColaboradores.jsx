import { BaseColaboradores } from '../BaseColaboradores';

function ListaColaboradores() {
    return (
        <div >
            <h1>Lista de colaboradores</h1>
            {
                BaseColaboradores.map((colaborador, index) => {
                    return (
                        <div key={index}>
                            <div>
                                {colaborador.nombre} - {colaborador.correo}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ListaColaboradores;
