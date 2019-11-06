document.writeln("............................"+"<br>");
document.writeln("Bienvenidos a mi resturante!"+"<br>");
document.writeln("Esto es el menu de hoy:"+"<br>");

var menuRestaurante = ["carbonara","risotto","lasagna","pollo","fruta","tiramisu"];
var precioPlatos = [45,63,38,68,15,28];

var menu = [];
var precio = [];

for (i of menuRestaurante){
    menu.push(i);
}
for (i of precioPlatos){
    precio.push(i);
}

document.writeln(menu[0]+"..."+precio[0]+" euro"+"<br>"); 
document.writeln(menu[1]+"..."+precio[1]+" euro"+"<br>"); 
document.writeln(menu[2]+"..."+precio[2]+" euro"+"<br>"); 
document.writeln(menu[3]+"..."+precio[3]+" euro"+"<br>"); 
document.writeln(menu[4]+"..."+precio[4]+" euro"+"<br>"); 
document.writeln(menu[5]+"..."+precio[5]+" euro"+"<br>"); 

var pedido = [];
var finePedido = true;
document.writeln("Escribe los platos que quieres pedir, Q por salir: ");
//document.writeln(<input type="text" id="input1">);



while (finePedido){
    var x = document.getElementById("input1");
    if (x == Q){
        break;
    }
    pedido.push(x);
}
      
<form >
<input type="text" id="input1">
</form>

