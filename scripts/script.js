function calcularNota() {

    const p1 = Number(document.getElementById("p1").value);
    const p2 = Number(document.getElementById("p2").value);
    const p3 = Number(document.getElementById("p3").value);
    const exf = parseFloat(document.getElementById("exf").value);
    const tgrupal = parseFloat(document.getElementById("tgrupal").value);
    const resultado1 = document.getElementById("resultado");
    let mensajeNota

    const NotaP = (p1 + p2 + p3) / 3 * 0.55;
    const CFinal = (NotaP + (exf * 0.30) + (tgrupal * 0.15));

    console.log(`Su calificación final es: ${CFinal}`);

    if (CFinal > 5) {
        mensajeNota = "Aprobado";
    } else if (CFinal == 5) {
        mensajeNota = "Casi casi";
    } else {
        mensajeNota = "Reprobado"
    }
    resultado1.textContent = `Su resultado es: ${CFinal.toFixed(1)} Usted está ${mensajeNota}`;

}