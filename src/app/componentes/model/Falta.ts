import { Empleado } from "src/app/empleado";

export class Falta{
    idFalta:number;
    fechaFaltaInicio:Date;
    fechaFaltaFinal:Date;
    descripcionFalta:string;
    tipoFalta:string;
    urlArchivo: string;
    empleado: Empleado;
}