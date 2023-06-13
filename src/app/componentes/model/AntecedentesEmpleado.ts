import { Empleado } from "src/app/empleado";
import { Aptitudes } from "./Aptitudes";
import { MedicosProveedor } from "./MedicosProveedor";
import { ProveedoresAptitudes } from "./ProveedoresAptitudes";
import { TipoPreexistencia } from "./TipoPreexistencia";
import { Preexistencias } from "./Preexistencias";

export class AntecedentesEmpleado {
    idAntecedentes: number;
    aptitudes: Aptitudes;
    tipoPreexistencia: TipoPreexistencia;
    preexistencias: Preexistencias;
    proveedoresAptitudes: ProveedoresAptitudes;
    medicosProveedor: MedicosProveedor;
    empleado: Empleado;
    urlArchivoExamen: string;
    descripcionPreexistencia: string;
}