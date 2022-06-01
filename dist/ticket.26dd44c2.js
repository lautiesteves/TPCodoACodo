function calcular() {
    let valor = 200;
    let cantidad = document.getElementById('cantidad').value;
    let categoriaSeleccionada = document.getElementById('categoria').value;
    let precioTotal = 0;
    if (categoriaSeleccionada == 'estudiante') precioTotal = (valor - valor * 0.8) * cantidad;
    else if (categoriaSeleccionada == 'trainee') precioTotal = (valor - valor * 0.5) * cantidad;
    else if (categoriaSeleccionada == 'junior') precioTotal = (valor - valor * 0.15) * cantidad;
    document.getElementById("total").innerHTML = "Total a Pagar: $ " + precioTotal;
    document.getElementById("total").style.display = "block";
}
function borrar() {
    document.getElementById("total").style.display = "none";
}

//# sourceMappingURL=ticket.26dd44c2.js.map
