function fatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * fatorial(numero - 1);
    }
}