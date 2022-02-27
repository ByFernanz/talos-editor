// para convertir al gráfico usando mermaid
// regex para capturar links /\[(\S*)\](?!\()/gm
// regex para capturar titulos /^\#{1}\s*(.*\S)\s*$/gm
// easyMDE.value() devuelve el texto del editor
// se debe guardar la posicion de la linea donde esta el header para crear el link en cada nodo
// se debe iluminar el nodo el que se esté editando, es el que debe enfoncar
// se debe iluminar cuando se haga click en el nodo
// cuando se haga click en el nodo el cursor debe posicionarse en la cabecera
// antes de dibujar el grafico debe ubicar los enlaces rotos

//para convertir a html
//procesar primero con la version js de pangamebook
//antes convertir a html transformar los enlaces simples a los comunes [second](#second)
//procesar usando showdown
//mostrar el resultado en un popup, como lo hacia ficdown

