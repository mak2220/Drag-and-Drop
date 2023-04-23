const parrafos = document.querySelectorAll(".parrafo");
const seccinoes = document.querySelectorAll(".seccion");
const papelera = document.querySelector(".papelera");

parrafos.forEach(parrafo =>{
    parrafo.addEventListener("dragstart",event => {
        console.log('Inicio de arrastre ' + parrafo.innerText)
        parrafo.classList.add('draging')
        event.dataTransfer.setData('id', parrafo.id)
        const elem_fantasma = document.querySelector('.imagen-fantasma');
        event.dataTransfer.setDragImage(elem_fantasma, 0, 0)
    })

    parrafo.addEventListener("dragend",() =>{
        //console.log('Fin de arrastre')
        parrafo.classList.remove('draging')
    })
})

seccinoes.forEach(seccion => {
    seccion.addEventListener('dragover',event =>{
        event.preventDefault()
        event.dataTransfer.dropEffect = 'move';
        //console.log('Drag Over')
    })

    seccion.addEventListener('drop', event =>{
        console.log('Drop');
        const id_parrafo = event.dataTransfer.getData('id');
        //console.log('Parrafo id : ', id_parrafo);
        const parrafo = document.getElementById(id_parrafo);
        seccion.appendChild(parrafo)
    })
})



papelera.addEventListener('dragover', event =>{
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy'
})

papelera.addEventListener('drop',event =>{
    const id_parrafo = event.dataTransfer.getData('id');
    document.getElementById(id_parrafo).remove();
})