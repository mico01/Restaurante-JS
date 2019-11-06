Console.WriteLine("Bienvenidos a mi resturante!");
Console.WriteLine("Esto es el menu de hoy:");
/*
var euro5 = 5;
var euro10 = 10;
var euro20 = 20;
var euro50 = 50;
var euro100 = 100;
var euro200 = 200;
var euro500 = 500;
var precioTotPagar = 0;
*/
string [] menuRestaurante = { "carbonara", "lasagna", "gnocchi", "spaghetti", "tiramisu" };
int[] precioPlatos = { 54, 48, 33, 42, 88 };

List<string> menu = new List<string>();
List <int> precio = new List<int>();
foreach (var i in menuRestaurante)
{ 
    menu.Add(i);
}
//Console.WriteLine(menu.Count);

foreach (var i in precioPlatos)
{ 
    precio.Add(i);
}

//  console menu y precio
Console.WriteLine(menu[0]+"..."+precio[0]+" euro");
Console.WriteLine(menu[1]+"...  "+precio[1]+ " euro");
Console.WriteLine(menu[2]+"...  "+precio[2]+ " euro");
Console.WriteLine(menu[3]+"..."+precio[3]+" euro");
Console.WriteLine(menu[4]+"... "+precio[4]+" euro");

Console.WriteLine("Hace tu pedido, premi Q por teeminar: ");
// pedido con ciclo WHILE         
var pedido = new List<string>();
var finePedido = true;
while (finePedido)
{
    var x = Console.ReadLine();
    if (x == "Q")
    {
        break;
    }
    else
    {

    }
    pedido.Add(x);
}
// pedido con ciclo FOR
/*
for ( var i = 0; i <5; i++)
{
    var x = Console.ReadLine();
    pedido.Add(x);
}
*/

//  console pedido
Console.WriteLine(" has pedido:");
foreach (var i in pedido)
{
    Console.WriteLine("-" + i);
}
//  > hacer una function confirmar
 
Console.WriteLine(" Confirmar el pedido:  s/n");
var confirmaPedido = Console.ReadLine();
if (confirmaPedido == "s")
{
    Console.WriteLine(" Muy bien!");
}
else
{
    Console.WriteLine(" Confirmar el pedido:  S/N");

}

Console.WriteLine("--------");

var pedidoNo = pedido.Except(menu).ToList();
foreach (var i in pedidoNo)
{
    Console.WriteLine("Estos platos no estan en el menu: " + i);
}

var pedidoSi = pedido.Where(i => menu.Contains(i)).ToList();
var cuenta = new List<int>();
foreach (var j in pedidoSi)
{
    //int indicePlatoMenu = pedidoSi.IndexOf(i);
    Console.WriteLine("Has pedido: "+ j +"..."+precio[pedidoSi.IndexOf(j)]);
    var xxx = precio[pedidoSi.IndexOf(j)];
    cuenta.Add(xxx);
}



Console.WriteLine("Tu cuenta a pagar es: "+ cuenta.Sum());



