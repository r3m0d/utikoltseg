
function mehet(szam){
    var adat = document.getElementById("selekcio").selectedIndex;
    var fogyasztas = 0;
    if(adat == 0){
        fogyasztas = 7,6; 
    }
    if(adat == 1){
        fogyasztas = 8,6; 
    }
    if(adat == 2){
        fogyasztas = 9,5; 
    }
    if(adat == 3){
        fogyasztas = 11,4; 
    }
    if(adat == 4){
        fogyasztas = 13,3; 
    }
    if(adat == 5){
        fogyasztas = 5,7; 
    }
    if(adat == 6){
        fogyasztas = 6,7; 
    }
    if(adat == 7){
        fogyasztas = 7,6; 
    }
    if(adat == 8){
        fogyasztas = 9,5; 
    }
    var egysegar = document.getElementById("uzemanyagar").value;
    var km = document.getElementById("kminput").value;
    var utikoltseg = fogyasztas * egysegar * km / 100;
    var amortizacio = km * 15;
    if(km==0 || utikoltseg ==0 || egysegar ==  0){
        alert("Tölts ki minden adatot!");
    }else{
        document.getElementById("utikoltseg").innerHTML = utikoltseg;
        document.getElementById("amortizacio").innerHTML = amortizacio;
    }
    

}