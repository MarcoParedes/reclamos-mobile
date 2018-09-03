import { TipoReclamo } from "./TipoReclamo";

export class Reclamo {
    public idbCD: number;
    public destino: string;
    public idb: number;
    public origen: string;
    public icono: string;
    public bgColor: string;
    public nroReclamo: string;
    public cc: string;
    public pd: string;
    public usuarioNT: string;
    public nroTransferencia: string;
    public prefijo: string;
    public fechaGeneracion: Date;
    public tipoReclamo: TipoReclamo;
    public estado: string;
    public fechaMargen: Date;
    public fechaVencimiento: Date;
    // public reclamoDetalles: ReclamoDetalle[];
    public nroPatente: string;
    public nroContenedor: string;
    public observacion: string;

    constructor() {
        this.tipoReclamo = new TipoReclamo();
    }
}