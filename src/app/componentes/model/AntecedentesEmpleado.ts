import { Empleado } from "src/app/empleado";
import { Aptitudes } from "./Aptitudes";
import { MedicosProveedor } from "./MedicosProveedor";
import { ProveedoresAptitudes } from "./ProveedoresAptitudes";

export class AntecedentesEmpleado {
    idAntecedentes: number;
    aptitudes: Aptitudes;
    proveedoresAptitudes: ProveedoresAptitudes;
    medicosProveedor: MedicosProveedor;
    empleado: Empleado;
}