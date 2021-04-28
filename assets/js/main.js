// Stampare tutti gli elementi di un array in pagina, all'interno di una lista.

var listaSpesa = ["Acqua", "Coca cola", "Pane", "Latte", "Uova", "Birra", "Salame", "Salsicce"];

for (var i = 0; i < listaSpesa.length; i++){
    var elemento = listaSpesa[i];

    var oggetto = document.getElementById("spesa").innerHTML;

    document.getElementById("spesa").innerHTML = oggetto + "<li>" + elemento + "</li>";

    // oggetto += "<li>" + elemento + "</li>";

}