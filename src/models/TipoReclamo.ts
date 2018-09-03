export class TipoReclamo {
    public idTipoReclamoCD: number;
    public idTipoReclamo: number;
    public descripcion: string;
    public idEmpresa: number;
    public idRegion: number;
    public idbcd: number;
    public centroCosto: string;
    // public sector: Sector;
    // public seccion: Seccion;
    // public granFamilia: GranFamilia;
    public diasVencim: number;
    public diasMargen: number;

    constructor() {
        this.descripcion = '';
    }
}