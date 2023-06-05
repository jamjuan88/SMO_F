import { Categoria } from "./componentes/model/Categoria";
import { Empresa } from "./componentes/model/Empresa";
import { EstadoLaboral} from "./componentes/model/EstadoLaboral";
import { Falta } from "./componentes/model/Falta";
import { Puesto } from "./componentes/model/Puesto";

export class Empleado {

    id:number;
    nombre:string;
    apellido:string;
    dni:number;
    cuil:string;
    email:string;
    telefono:number;
    fechaNac:Date;
    fechaIngreso:Date;
    direccion:string;
    genero:string;
    antecedentes:string;
    fechaRegistro:Date;   
    categoria:Categoria;
    fotoPerfil:string; 
    empresa: Empresa;
    puesto: Puesto;
    falta: Falta;
    estadoLaboral: EstadoLaboral;    

}

