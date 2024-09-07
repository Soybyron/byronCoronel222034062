interface tipoVehiculo {
    
    tipo: string;
    marca: string;
    modelo: string;
    cilindraje: number;
    numPuertas: number;
    arrancarVehiculo: () => void;
    cEspeciales: caracteristicasEspeciales[];
 
};

interface caracteristicasEspeciales {
    velocidad: number;
    suspension: boolean;
    agregarsuspension: () => void;
} ;

interface testArray {
    modelos: number[];
    caracteristicasArray: Array<string[]>;

};

const miVehiculo: tipoVehiculo = {
    tipo :'automovil',
    marca: 'Hyundai',
    modelo: 'i10',
    cilindraje: 2000,
    numPuertas: 4,
    cEspeciales: [],
    arrancarVehiculo() {
        console.log('El vehiculo arranco con un motor de ',this.cilindraje,'cc');
    }

};

const miSegundoVehiculo: caracteristicasEspeciales = {
    velocidad: 1000,
    suspension: true,
    agregarsuspension(){
        if (this.suspension) {
            console.log('Tu vehiculo tiene suspension');}

        else{
            console.log('Tu vehiculo no tiene suspension');
        }
    }
};

const miTercerVehiculo: testArray = {
    modelos: [2009,2010,2011,2012,2013],
    caracteristicasArray: [
        ["azul", "verde"],
        ["Rin 15","rin 17"],
        ["2 puertas", "4 puertas"]
    ]
};

console.log({miVehiculo});
miVehiculo.arrancarVehiculo();
miSegundoVehiculo.agregarsuspension();
console.log({miSegundoVehiculo});
console.log({miTercerVehiculo});
console.log(miTercerVehiculo.caracteristicasArray[0][0]);
console.log(miTercerVehiculo.caracteristicasArray[2][1]);

let index = 0;
miTercerVehiculo.caracteristicasArray.forEach((caracteristica)=> {
    console.log(caracteristica[index]);
});

index = 1;
miTercerVehiculo.caracteristicasArray.forEach((caracteristica)=> {
    console.log(caracteristica[index]);
});

