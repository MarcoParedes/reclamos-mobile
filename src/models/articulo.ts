export class Articulo {
    public id: number;
    public scanning: string;
    public idArticulo: string;
    public descripcion: string;
    public uxb: number;
    public cantidad: number;
    public unidades: number;
    public selected: boolean;
    
    constructor() {
        this.selected = false;
    }
}