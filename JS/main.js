window.addEventListener("load", () => {
    const inputTarea = document.getElementById("inputTarea")
    const btnAdd = document.getElementById("btn-add")
    const tabla = document.getElementById("tabla")


    // const encabezado = tabla.createTHead()
    // const filaEncabezado = encabezado.insertRow()
    // const tarea = filaEncabezado.insertCell()
    // const textoTarea = document.createTextNode("Tarea")
    // tarea.appendChild(textoTarea)
    // tarea.setAttribute("class", "tarea")

    // const celdaEncabezadoCheck = filaEncabezado.insertCell()
    // const textoCheck = document.createTextNode("✔️")
    // celdaEncabezadoCheck.appendChild(textoCheck)
    // celdaEncabezadoCheck.setAttribute("class", "check")

    // const celdaEncabezadoRemove = filaEncabezado.insertCell()
    // const textoRemove = document.createTextNode("✖️")
    // celdaEncabezadoRemove.appendChild(textoRemove)
    // celdaEncabezadoRemove.setAttribute("class", "remove")


    
    
    

    btnAdd.addEventListener("click", () => {
        const nuevaTarea = inputTarea.value
        
        const nuevalinea = tabla.insertRow()

        const celdaTarea = nuevalinea.insertCell()
        const textoNuevaTarea = document.createTextNode(nuevaTarea)
        celdaTarea.appendChild(textoNuevaTarea)

        const celdaCheck = nuevalinea.insertCell()  
        const btnCheck = document.createElement("button")
        const imgChecked = document.createElement("img")
        imgChecked.setAttribute('src', '../Image/check_black.png')
        btnCheck.appendChild(imgChecked)
        btnCheck.setAttribute("class", "imgCheck")
        celdaCheck.appendChild(btnCheck)
        celdaCheck.setAttribute("class", "check")
        

        const celdaRemove = nuevalinea.insertCell()
        const btnRemove = document.createElement("button")
        const remove = document.createElement("img")
        remove.setAttribute('src', '../Image/delete.png')
        btnRemove.appendChild(remove)
        celdaRemove.appendChild(btnRemove)
        celdaRemove.setAttribute("class", "remove")

        // Evento check
        btnCheck.addEventListener("click", () => {
            const rutaActual = imgChecked.getAttribute("src");
            const esCheckNegro = rutaActual.includes("check_black");

            imgChecked.setAttribute(
                "src",
                esCheckNegro ? "./Image/check_green.png" : "./Image/check_black.png"
            )
        })

        // Evento remove
        btnRemove.addEventListener("click", () => {
            tabla.deleteRow(nuevalinea.rowIndex)
        })

        // Limpiar input
        inputTarea.value = ""
        
    })

})