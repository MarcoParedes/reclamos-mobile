import { Articulo } from "./articulo";

export class Transferencia {
    public idb: number;
    public idMov: number;
    public idbh: number;
    public prefijo: string;
    public nroTransferencia: string;
    public transferenciaDesc: string;
    public fechaGeneracion: Date;
    public cc: string;
    public articulos: Articulo[];

    constructor() {
        this.articulos = new Array<Articulo>();
    }
}