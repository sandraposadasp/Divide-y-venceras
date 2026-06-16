function findMax(arr) {
    // TODO: Agregar la condición del caso base
     if (arr.length === 1) {
        return arr[0];
    }

    // TODO: Dividir el arreglo en dos mitades
    const mid = Math.floor((arr.length) / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);

    // TODO: Llamar recursivamente a la función para ambas mitades
    const leftMax  = findMax(leftHalf);
    const rightMax = findMax(rightHalf);

    // TODO: Combinar las soluciones comparando los máximos
    return leftMax > rightMax ? leftMax : rightMax;
}