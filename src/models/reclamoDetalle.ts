import { Articulo } from "./articulo";

export class ReclamoDetalle {
    public idReclamoDetalle: number;
    public nroReclamo: number;
    public prefijo: string;
    public nroTransferencia: string;
    public articulo: Articulo;
    public cantidad: number;
    public unidad: number;
    public uxb: number;
    public fechaVencimiento: Date;
    public estado: string;
    public nroLote: number;
    public selected: boolean;
    public tipoCantidad: string;
    public imagen: string;
    public color: string;

    constructor() {
        this.articulo = new Articulo();
    }
}