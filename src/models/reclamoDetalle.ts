import { Articulo } from "./articulo";
import { TipoReclamo } from "./TipoReclamo";

export class ReclamoDetalle {
    public idReclamoDetalle: number;
    public nroReclamo: number;
    public nroReclamoAnterior: number;
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
    public rutaImagen: string;
    public color: string;
    public tipoReclamoList: TipoReclamo[];
    public cantidadAjustada: number;
    public tipoReclamo: TipoReclamo;
    public adjuntaImagen: boolean;

    constructor() {
        this.articulo = new Articulo();
        this.tipoReclamoList = new Array<TipoReclamo>();
        this.tipoReclamo = new TipoReclamo();
    }
}