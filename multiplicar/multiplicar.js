const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log('============================'.green);
    console.log(`============${base}================`.green);
    console.log('============================'.green);


    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} es igual a ${base * i}`);
    }
}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`Elvalos introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} es igual a ${base * i}\n`;
        }


        fs.writeFile(`tablas/tabla_${ base }-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${limite}.txt`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}