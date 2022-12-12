/* let nombre="valeria duque";
nombre=nombre.toLocaleUpperCase();
nombre.charAt(0);
let aux=0,aux2=0,aux3="",i=0;
function iguales() {
    for (let index = 0; index < nombre.length; index++) {        
        aux=nombre.charAt(index);
        for (let index1 = index+1; index1 < nombre.length; index1++) {
            aux2=nombre.charAt(index1);
            if (aux===aux2) {
                i++;
                aux3=aux2;
            }
        }   
    }
    if (i==0) {
        console.log("no se repiten letras");
    }else
    console.log("la  letra que mas se repite es:"+ aux3 + ", se repitio: " + i +" veces");
} */


let nombre="rogelio"
let aux=0,aux2=0,aux3="",i=0;
nombre.charAt(0);
function iguales() {


    
        for ( aux = nombre.length; aux >=0; aux--) {
            
            aux2=nombre.charAt(aux);
            console.log(aux2)
            
        }        
    




}