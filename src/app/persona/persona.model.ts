export class Persona {
    public nombre: string;
    private altura: number;
    private peso: number;

    constructor(nombre: string, altura: number, peso: number) {
        this.nombre = nombre;
        this.altura = altura;
        this.peso = peso;
    }
}
