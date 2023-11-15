//------------- declarando variables y constantes--------------
const productoSeleccionado = document.getElementById("producto-seleccionado");
const botonBuscar = document.getElementById("btn-buscar");
const errorBuscar = document.getElementById("error-buscar");

const resultadoBusqueda = document.getElementById("resultado-busqueda");
const productoImg = document.getElementById("imagen-producto");
const productoNombre = document.getElementById("producto");
const productoMarca = document.getElementById("marca");
const productoPeso = document.getElementById("peso");

const tablaBusqueda = document.getElementById("tabla-busqueda");
const precioDia1 = document.getElementById("precio-dia-1");
const precioDia2 = document.getElementById("precio-dia-2");
const precioDia3 = document.getElementById("precio-dia-3");
const incrementoDia = document.getElementById("incremento-dia");

const graficoBusqueda = document.getElementById("grafico-busqueda");
const precioCarrefour1 = document.getElementById("precio-carrefour-1");
const precioCarrefour2 = document.getElementById("precio-carrefour-2");
const precioCarrefour3 = document.getElementById("precio-carrefour-3");
const incrementoCarrefour = document.getElementById("incremento-carrefour");

// --------creando clases para los objetos-------------
// creando una clase para los productos del dia
class ProductoDia{
    constructor(precio1, precio2, precio3, incremento){
        this.precio1= precio1;
        this.precio2= precio2;
        this.precio3= precio3;
        this.incremento= incremento;
    }
};

// creando una clase para los productos de Carrefour
class ProductoCarrefour{
    constructor(precio1, precio2, precio3, incremento){
        this.precio1= precio1;
        this.precio2= precio2;
        this.precio3= precio3;
        this.incremento= incremento;
    }
};

//-----------------creando los objetos----------------

// creando la funcion que calcule la inflación
const calculoInflacion = (precioInicial, precioFinal) =>{
    let resultado = parseFloat((precioFinal - precioInicial) / precioInicial * 100);
    let resultadoRedondeado = resultado.toFixed(2);
    return resultadoRedondeado
};
// LECHE
const lecheDia = new ProductoDia(506, 412, 402, calculoInflacion(506, 402));
const lecheCarrefour = new ProductoCarrefour(533, 413, 407, calculoInflacion(533, 407));

// QUESO CREMA COMUN
const quesoDia = new ProductoDia(935, 1198, 1467, calculoInflacion(935, 1467));
const quesoCarrefour = new ProductoCarrefour(1001, 913, 1480, calculoInflacion(1001, 1480));

// MANTECA
const mantecaDia = new ProductoDia(702, 733, 733, calculoInflacion(702, 733));
const mantecaCarrefour = new ProductoCarrefour(712, 764, 784, calculoInflacion(712, 784));

// CREMA PARA COCINAR 
const cremaDia = new ProductoDia(1061, 1070, 1281, calculoInflacion(1061, 1281));
const cremaCarrefour = new ProductoCarrefour(1070, 1125, 1113, calculoInflacion(1070, 1113));

// YOGURT BEBIBLE
const yogurtDia = new ProductoDia(820, 861, 861, calculoInflacion(820, 861));
const yogurtCarrefour = new ProductoCarrefour(820, 864, 864, calculoInflacion(820, 864));

// -----Creando funciones-----------

const ocultarResultados = () =>{
    resultadoBusqueda.style.display = "none";
    tablaBusqueda.style.display = "none";
    graficoBusqueda.style.display = "none";
};


ocultarResultados();


const mostrarResultados = () =>{
    resultadoBusqueda.style.display = "block";
    tablaBusqueda.style.display = "grid";
    graficoBusqueda.style.display = "block";
};

const removerClases = () =>{
    precioDia1.classList.remove("incremento");
    precioDia2.classList.remove("incremento");
    precioDia3.classList.remove("incremento");
    precioCarrefour1.classList.remove("incremento");
    precioCarrefour2.classList.remove("incremento");
    precioCarrefour3.classList.remove("incremento");

    precioDia1.classList.remove("decremento");
    precioDia2.classList.remove("decremento");
    precioDia3.classList.remove("decremento");
    precioCarrefour1.classList.remove("decremento");
    precioCarrefour2.classList.remove("decremento");
    precioCarrefour3.classList.remove("decremento");

    precioDia1.classList.remove("equilibrio");
    precioDia2.classList.remove("equilibrio");
    precioDia3.classList.remove("equilibrio");
    precioCarrefour1.classList.remove("equilibrio");
    precioCarrefour2.classList.remove("equilibrio");
    precioCarrefour3.classList.remove("equilibrio");


    incrementoDia.classList.remove("incremento");
    incrementoCarrefour.classList.remove("decremento");
};

const corroborarLeche = ()=>{

    removerClases();
    // DIA

    if (lecheDia.precio2 > lecheDia.precio1){
        precioDia2.classList.add("incremento");
    } else if (lecheDia.precio2 < lecheDia.precio1){
        precioDia2.classList.add("decremento");
    }else if (lecheDia.precio2 == lecheDia.precio1){
        precioDia2.classList.add("equilibrio");
    }

    if (lecheDia.precio3 > lecheDia.precio2){
        precioDia3.classList.add("incremento");
    } else if (lecheDia.precio3 < lecheDia.precio2){
        precioDia3.classList.add("decremento");
    }else if (lecheDia.precio3 == lecheDia.precio2){
        precioDia3.classList.add("equilibrio");
    }

    if (lecheDia.incremento > 0){
        incrementoDia.classList.add("incremento");
    } else if (lecheDia.incremento < 0){
        incrementoDia.classList.add("decremento");
    }

    // CARREFOUR
    if (lecheCarrefour.precio2 > lecheCarrefour.precio1){
        precioCarrefour2.classList.add("incremento");
    } else if (lecheCarrefour.precio2 < lecheCarrefour.precio1){
        precioCarrefour2.classList.add("decremento");
    }else if (lecheCarrefour.precio2 == lecheCarrefour.precio1){
        precioCarrefour2.classList.add("equilibrio");
    }

    if (lecheCarrefour.precio3 > lecheCarrefour.precio2){
        precioCarrefour3.classList.add("incremento");
    } else if (lecheCarrefour.precio3 < lecheCarrefour.precio2){
        precioCarrefour3.classList.add("decremento");
    }else if (lecheCarrefour.precio3 == lecheCarrefour.precio2){
        precioCarrefour3.classList.add("equilibrio");
    }

    if (lecheCarrefour.incremento > 0){
        incrementoCarrefour.classList.add("incremento");
    } else if (lecheCarrefour.incremento < 0){
        incrementoCarrefour.classList.add("decremento");
    }
}

const corroborarYogurt = ()=>{

    removerClases();
    // DIA

    if (yogurtDia.precio2 > yogurtDia.precio1){
        precioDia2.classList.add("incremento");
    } else if (yogurtDia.precio2 < yogurtDia.precio1){
        precioDia2.classList.add("decremento");
    }else if (yogurtDia.precio2 == yogurtDia.precio1){
        precioDia2.classList.add("equilibrio");
    }

    if (yogurtDia.precio3 > yogurtDia.precio2){
        precioDia3.classList.add("incremento");
    } else if (yogurtDia.precio3 < yogurtDia.precio2){
        precioDia3.classList.add("decremento");
    }else if (yogurtDia.precio3 == yogurtDia.precio2){
        precioDia3.classList.add("equilibrio");
    }

    if (yogurtDia.incremento > 0){
        incrementoDia.classList.add("incremento");
    } else if (yogurtDia.incremento < 0){
        incrementoDia.classList.add("decremento");
    }

    // CARREFOUR
    if (yogurtCarrefour.precio2 > yogurtCarrefour.precio1){
        precioCarrefour2.classList.add("incremento");
    } else if (yogurtCarrefour.precio2 < yogurtCarrefour.precio1){
        precioCarrefour2.classList.add("decremento");
    }else if (yogurtCarrefour.precio2 == yogurtCarrefour.precio1){
        precioCarrefour2.classList.add("equilibrio");
    }

    if (yogurtCarrefour.precio3 > yogurtCarrefour.precio2){
        precioCarrefour3.classList.add("incremento");
    } else if (yogurtCarrefour.precio3 < yogurtCarrefour.precio2){
        precioCarrefour3.classList.add("decremento");
    }else if (yogurtCarrefour.precio3 == yogurtCarrefour.precio2){
        precioCarrefour3.classList.add("equilibrio");
    }

    if (yogurtCarrefour.incremento > 0){
        incrementoCarrefour.classList.add("incremento");
    } else if (yogurtCarrefour.incremento < 0){
        incrementoCarrefour.classList.add("decremento");
    }
}

const corroborarManteca = ()=>{

    removerClases();
    // DIA

    if (mantecaDia.precio2 > mantecaDia.precio1){
        precioDia2.classList.add("incremento");
    }else if (mantecaDia.precio2 < mantecaDia.precio1){
        precioDia2.classList.add("decremento");
    }else if (mantecaDia.precio2 == mantecaDia.precio1){
        precioDia2.classList.add("equilibrio");
    }

    if (mantecaDia.precio3 > mantecaDia.precio2){
        precioDia3.classList.add("incremento");
    }else if (mantecaDia.precio3 < mantecaDia.precio2){
        precioDia3.classList.add("decremento");
    }else if (mantecaDia.precio3 == mantecaDia.precio2){
        precioDia3.classList.add("equilibrio");
    }

    if (mantecaDia.incremento > 0){
        incrementoDia.classList.add("incremento");
    }else if (mantecaDia.incremento < 0){
        incrementoDia.classList.add("decremento");
    }

    // CARREFOUR
    if (mantecaCarrefour.precio2 > mantecaCarrefour.precio1){
        precioCarrefour2.classList.add("incremento");
    }else if (mantecaCarrefour.precio2 < mantecaCarrefour.precio1){
        precioCarrefour2.classList.add("decremento");
    }else if (mantecaCarrefour.precio2 == mantecaCarrefour.precio1){
        precioCarrefour2.classList.add("equilibrio");
    }

    if (mantecaCarrefour.precio3 > mantecaCarrefour.precio2){
        precioCarrefour3.classList.add("incremento");
    }else if (mantecaCarrefour.precio3 < mantecaCarrefour.precio2){
        precioCarrefour3.classList.add("decremento");
    }else if (mantecaCarrefour.precio3 == mantecaCarrefour.precio2){
        precioCarrefour3.classList.add("equilibrio");
    }

    if (mantecaCarrefour.incremento > 0){
        incrementoCarrefour.classList.add("incremento");
    }else if (mantecaCarrefour.incremento < 0){
        incrementoCarrefour.classList.add("decremento");
    }
}

const corroborarQueso = ()=>{

    removerClases();
    // DIA

    if (quesoDia.precio2 > quesoDia.precio1){
        precioDia2.classList.add("incremento");
    }else if (quesoDia.precio2 < quesoDia.precio1){
        precioDia2.classList.add("decremento");
    }else if (quesoDia.precio2 == quesoDia.precio1){
        precioDia2.classList.add("equilibrio");
    }

    if (quesoDia.precio3 > quesoDia.precio2){
        precioDia3.classList.add("incremento");
    }else if (quesoDia.precio3 < quesoDia.precio2){
        precioDia3.classList.add("decremento");
    }else if (quesoDia.precio3 == quesoDia.precio2){
        precioDia3.classList.add("equilibrio");
    }

    if (quesoDia.incremento > 0){
        incrementoDia.classList.add("incremento");
    }else if (quesoDia.incremento < 0){
        incrementoDia.classList.add("decremento");
    }

    // CARREFOUR
    if (quesoCarrefour.precio2 > quesoCarrefour.precio1){
        precioCarrefour2.classList.add("incremento");
    }else if (quesoCarrefour.precio2 < quesoCarrefour.precio1){
        precioCarrefour2.classList.add("decremento");
    }else  if (quesoCarrefour.precio2 == quesoCarrefour.precio1){
        precioCarrefour2.classList.add("equilibrio");
    }

    if (quesoCarrefour.precio3 > quesoCarrefour.precio2){
        precioCarrefour3.classList.add("incremento");
    }else if (quesoCarrefour.precio3 < quesoCarrefour.precio2){
        precioCarrefour3.classList.add("decremento");
    }else if (quesoCarrefour.precio3 == quesoCarrefour.precio2){
        precioCarrefour3.classList.add("equilibrio");
    }

    if (quesoCarrefour.incremento > 0){
        incrementoCarrefour.classList.add("incremento");
    }else if (quesoCarrefour.incremento < 0){
        incrementoCarrefour.classList.add("decremento");
    }
}

const corroborarCrema= ()=>{

    removerClases();
    // DIA

    if (cremaDia.precio2 > cremaDia.precio1){
        precioDia2.classList.add("incremento");
    }else if (cremaDia.precio2 < cremaDia.precio1){
        precioDia2.classList.add("decremento");
    }else if (cremaDia.precio2 == cremaDia.precio1){
        precioDia2.classList.add("equilibrio");
    }

    if (cremaDia.precio3 > cremaDia.precio2){
        precioDia3.classList.add("incremento");
    }else if (cremaDia.precio3 < cremaDia.precio2){
        precioDia3.classList.add("decremento");
    }else if (cremaDia.precio3 == cremaDia.precio2){
        precioDia3.classList.add("equilibrio");
    }

    if (cremaDia.incremento > 0){
        incrementoDia.classList.add("incremento");
    }else if (cremaDia.incremento < 0){
        incrementoDia.classList.add("decremento");
    }

    // CARREFOUR
    if (cremaCarrefour.precio2 > cremaCarrefour.precio1){
        precioCarrefour2.classList.add("incremento");
    }else if (cremaCarrefour.precio2 < cremaCarrefour.precio1){
        precioCarrefour2.classList.add("decremento");
    }else if (cremaCarrefour.precio2 == cremaCarrefour.precio1){
        precioCarrefour2.classList.add("equilibrio");
    };

    if (cremaCarrefour.precio3 > cremaCarrefour.precio2){
        precioCarrefour3.classList.add("incremento");
    }else if (cremaCarrefour.precio3 < cremaCarrefour.precio2){
        precioCarrefour3.classList.add("decremento");
    }else if (cremaCarrefour.precio3 == cremaCarrefour.precio2){
        precioCarrefour3.classList.add("equilibrio");
    };

    if (cremaCarrefour.incremento > 0){
        incrementoCarrefour.classList.add("incremento");
    } else if (cremaCarrefour.incremento < 0){
        incrementoCarrefour.classList.add("decremento");
    }
}

// -----------agregando event listeners-------------
botonBuscar.addEventListener("click", ()=>{
    const errorDeBusqueda = ()=>{
        errorBuscar.innerHTML = "Seleccione un producto";
        ocultarResultados();
    }
    const sinErrorDeBusqueda = ()=>{
        errorBuscar.innerHTML = "";
    }
    if (productoSeleccionado.value == "default"){
        errorDeBusqueda();
    }
    else{
        sinErrorDeBusqueda();
        mostrarResultados();

        if (productoSeleccionado.value == "leche"){
            productoImg.setAttribute("src", "src/leche.webp");
            productoNombre.innerHTML = "Leche";
            productoMarca.innerHTML = "La Serenísima 3%";
            productoPeso.innerHTML = "1L";

            // modificando la tabla
            precioDia1.innerHTML = `$${lecheDia.precio1}`;
            precioDia2.innerHTML = `$${lecheDia.precio2}`;
            precioDia3.innerHTML = `$${lecheDia.precio3}`;
            incrementoDia.innerHTML = `${lecheDia.incremento}%`;

            precioCarrefour1.innerHTML = `$${lecheCarrefour.precio1}`;
            precioCarrefour2.innerHTML = `$${lecheCarrefour.precio2}`;
            precioCarrefour3.innerHTML = `$${lecheCarrefour.precio3}`;
            incrementoCarrefour.innerHTML = `${lecheCarrefour.incremento}%`;
            corroborarLeche();

            // poner para que publique el gráfico
        } else if (productoSeleccionado.value == "yogurt"){
            productoImg.setAttribute("src", "src/yogurt.webp");
            productoNombre.innerHTML = "Yogurt Bebible Frutilla";
            productoMarca.innerHTML = "La Serenísima";
            productoPeso.innerHTML = "900ml";

            // modificando la tabla
            precioDia1.innerHTML = `$${yogurtDia.precio1}`;
            precioDia2.innerHTML = `$${yogurtDia.precio2}`;
            precioDia3.innerHTML = `$${yogurtDia.precio3}`;
            incrementoDia.innerHTML = `${yogurtDia.incremento}%`;

            precioCarrefour1.innerHTML = `$${yogurtCarrefour.precio1}`;
            precioCarrefour2.innerHTML = `$${yogurtCarrefour.precio2}`;
            precioCarrefour3.innerHTML = `$${yogurtCarrefour.precio3}`;
            incrementoCarrefour.innerHTML = `${yogurtCarrefour.incremento}%`;
            
            corroborarYogurt();

        } else if (productoSeleccionado.value == "manteca"){
            productoImg.setAttribute("src", "src/manteca.webp");
            productoNombre.innerHTML = "Manteca";
            productoMarca.innerHTML = "Tonadita";
            productoPeso.innerHTML = "200g";

            // modificando la tabla
            precioDia1.innerHTML = `$${mantecaDia.precio1}`;
            precioDia2.innerHTML = `$${mantecaDia.precio2}`;
            precioDia3.innerHTML = `$${mantecaDia.precio3}`;
            incrementoDia.innerHTML = `${mantecaDia.incremento}%`;

            precioCarrefour1.innerHTML = `$${mantecaCarrefour.precio1}`;
            precioCarrefour2.innerHTML = `$${mantecaCarrefour.precio2}`;
            precioCarrefour3.innerHTML = `$${mantecaCarrefour.precio3}`;
            incrementoCarrefour.innerHTML = `${mantecaCarrefour.incremento}%`;

            corroborarManteca();

        } else if (productoSeleccionado.value == "queso-crema"){
            productoImg.setAttribute("src", "src/quesoCrema.webp");
            productoNombre.innerHTML = "Queso Crema Común";
            productoMarca.innerHTML = "Casancrem";
            productoPeso.innerHTML = "290g";

            // modificando la tabla
            precioDia1.innerHTML = `$${quesoDia.precio1}`;
            precioDia2.innerHTML = `$${quesoDia.precio2}`;
            precioDia3.innerHTML = `$${quesoDia.precio3}`;
            incrementoDia.innerHTML = `${quesoDia.incremento}%`;

            precioCarrefour1.innerHTML = `$${quesoCarrefour.precio1}`;
            precioCarrefour2.innerHTML = `$${quesoCarrefour.precio2}`;
            precioCarrefour3.innerHTML = `$${quesoCarrefour.precio3}`;
            incrementoCarrefour.innerHTML = `${quesoCarrefour.incremento}%`;

            corroborarQueso();

        } else if (productoSeleccionado.value == "crema"){
            productoImg.setAttribute("src", "src/cremaParaCocinar.webp");
            productoNombre.innerHTML = "Crema para Cocinar";
            productoMarca.innerHTML = "La Serenísima";
            productoPeso.innerHTML = "330ml";

            // modificando la tabla
            precioDia1.innerHTML = `$${cremaDia.precio1}`;
            precioDia2.innerHTML = `$${cremaDia.precio2}`;
            precioDia3.innerHTML = `$${cremaDia.precio3}`;
            incrementoDia.innerHTML = `${cremaDia.incremento}%`;

            precioCarrefour1.innerHTML = `$${cremaCarrefour.precio1}`;
            precioCarrefour2.innerHTML = `$${cremaCarrefour.precio2}`;
            precioCarrefour3.innerHTML = `$${cremaCarrefour.precio3}`;
            incrementoCarrefour.innerHTML = `${cremaCarrefour.incremento}%`;

            corroborarCrema();

        }
    }
});
