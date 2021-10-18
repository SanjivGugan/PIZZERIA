var pizza_toppings = ["Pepperoni Pizza", 
                      "Barbeque(BBQ) Chicken Pizza",
                      "Hawaiian Pizza",
                      "Meat Lover’s Pizza",
                      "Chicken Alfredo Pizza",
                      "Margherita Pizza" ,
                      "Italian Sausage Pizza"]

function showMenu()
{
   var htmldata = "";
   pizza_toppings.sort();
   for (let i = 0; i < pizza_toppings.length; i++) {
       htmldata = htmldata + pizza_toppings[i] + "<br>"
   }
   document.getElementById("display_menu").innerHTML = htmldata;
}

function showMenu2()
{
   var htmldata = "";
   pizza_toppings.sort();
   for (let i = 0; i < pizza_toppings.length; i++) {
       htmldata = htmldata + pizza_toppings[i] + "<br>"
   }
   document.getElementById("display_menu2").innerHTML = htmldata;
}

function addsgs()
{
    var item = document.getElementById("text_input").value
    pizza_toppings.push(item);
    showMenu2()
}