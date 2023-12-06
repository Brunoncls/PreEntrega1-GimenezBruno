 //SIMULADOR DE INTERES COMPUESTO PLAZO FIJO

let respuesta = prompt("Desea usar la calculadora de intereses ,responda si o no").toLowerCase();



function interesCompuesto (){

    if (respuesta === "si"){
        
        let dineroIngresado = parseInt(prompt("Dinero ingresado:"));
        let meses = parseInt(prompt("Duracion en meses del plazo fijo:"))
        let porcentaje = parseFloat(prompt("Porcentaje anual del plazo fijo"))


        let resultado = dineroIngresado * Math.pow((1+(porcentaje/1200)),meses)

        console.log(porcentaje)

        alert (`En el mes ${meses} usted tendra ${resultado.toFixed(2)}`)

        if(confirm("¿Desea ver la evolucion mes a mes?")){

            for (i = 1 ; i <= meses ; i++){
    
                resultado = dineroIngresado * Math.pow((1+(porcentaje/1200)),i)
                
                alert(`En el mes ${i} usted tendra ${resultado.toFixed(2)}`)
            }     

        }

    }else if(respuesta === "no"){

        alert("Espero vuelvas pronto...!")

    }else{

        alert("Por favor ingresa una opción valida")

    }

    }

    interesCompuesto();