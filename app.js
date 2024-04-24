class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    detalles() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Género: ${this.genero}`;
    }
}

class Libro {
    constructor(titulo, autor, anioPublicacion) {
        this.titulo = titulo;
        this.autor = autor;
        this.anioPublicacion = anioPublicacion;
    }

    get detalles() {
        return `Título: ${this.titulo}, Autor: ${this.autor}, Año de Publicación: ${this.anioPublicacion}`;
    }

    set detalles({ titulo, autor, anioPublicacion }) {
        this.titulo = titulo;
        this.autor = autor;
        this.anioPublicacion = anioPublicacion;
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, genero, grado, promedio) {
        super(nombre, edad, genero);
        this.grado = grado;
        this.promedio = promedio;
    }

    actualizarPromedio(nuevoPromedio) {
        this.promedio = nuevoPromedio;
    }

    detalles() {
        return `${super.detalles()}, Grado: ${this.grado}, Promedio: ${this.promedio}`;
    }
}

class CuentaBancaria {
    constructor(titular, saldo = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(cantidad) {
        this.saldo += cantidad;
    }

    retirar(cantidad) {
        if (cantidad <= this.saldo) {
            this.saldo -= cantidad;
        } else {
            throw new Error("Fondos insuficientes");
        }
    }

    consultarSaldo() {
        return `Saldo actual: ${this.saldo}`;
    }

    transferirA(cuentaDestino, cantidad) {
        this.retirar(cantidad);
        cuentaDestino.depositar(cantidad);
    }

    calcularIntereses(tasaInteres) {
        this.saldo += this.saldo * tasaInteres / 100;
    }
}

// Ejemplos de uso:
const persona1 = new Persona("Ana", 25, "Femenino");
console.log(persona1.detalles());

const estudiante1 = new Estudiante("Luis", 20, "Masculino", "Ingeniería", 8.5);
console.log(estudiante1.detalles());

const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967);
console.log(libro1.detalles);

const cuenta1 = new CuentaBancaria("Carlos", 1000);
cuenta1.depositar(500);
console.log(cuenta1.consultarSaldo());
