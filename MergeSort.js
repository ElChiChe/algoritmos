// const a = [1, 3, 5, 7, 9, 14];
// const b = [2, 4, 9, 10, 15];

//Solución de MergeSort de manera iterativa
// function mergeSort(a, b) {


//     let arr = [];

//     let i = 0, j = 0, k = 0;


//     while(i < a.length && j < b.length) {

//         if(a[i] < b[j]) {
//             arr[k++] = a[i++];
//     }
//     else {
//         arr[k++] = b[j++];
//     }
// }
    
//     return arr;

// }

// console.log(mergeSort(a, b));

function mergeSort(list) {
    if(list.length <= 1) {
        return list;
    }

    //Dividir el array en dos mitades
    const middle = list.length / 2;
    const start = list.slice(0, middle);
    const end = list.slice(middle);

    // Ordenar de manera recursiva cada mitad
    const sortedLeftHalf = mergeSort(start);
    const sortedRightHalf = mergeSort(end);
    // En cada llamada recursiva dividirá la mitad correspondiente en sub-mitades y las ordenará
    // Este proceso continúa hasta que cada sub-mitad tenga una longitud de 0 o 1, lo que significa
    // que esta ordenada
    // Cuando se alcanza este caso base, las llamadas recursivas comienzan a volver y se procede a
    // fusionar las mitades ordenadas usando la función "merge"

    return merge(sortedLeftHalf, sortedRightHalf);
}

function merge(start, end) {
    let newArr = [];
    let i = 0;
    let j = 0;

    // Combiar las dos mitades en orden
    while(i < start.length && j < end.length) {
        if(start[i] < end[j]) {
            newArr.push(start[i++]);
        }
        else {
            newArr.push(end[j++]);
        }
    }

    // Agrega los elementos restantes de la mitad izquierda
    while(i < start.length) {
        newArr.push(start[i++]);
    }

    // Agrega los elementos restantes de la mitad izquierda
    while(j < end.length) {
        newArr.push(end[j++]);
    }

    return newArr;
}

const list = [3, 2, 1, 13, 8, 5, 0, 1]; // Debe devolver [0, 1, 1, 2, 3, 5, 8, 13]
const list2 = [105, 79, 100, 110]; // Debe devolver [79, 100, 105, 110]
const sortedList = mergeSort(list);
const sortedList2 = mergeSort(list2);
console.log("Lista original #1", list);
console.log("Lista original #2", list2);
console.log("Lista ordenada #1", sortedList);
console.log("Lista ordenada #2", sortedList2);