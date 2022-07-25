// Crear las siguientes funciones:
// 1. Cree una función que liste todos los nombres con sus respectiva edad.
// 2. Liste solamente los nombres que tengan una edad mayor a 20.
// 3. ¿Cuál es el porcentaje de mujeres que hay en el grupo?
// 4. Agregue una foto a cada personaje, y muestrelos en el navegador
// 5. Cree un nuevo personaje desde el navegador incluyendo imagen.
import{people} from './people.js'

const container = document.getElementById("container")
const boton1 = document.getElementById("boton1")
const boton2 = document.getElementById("boton2")
const boton3 = document.getElementById("boton3")
const boton4 = document.getElementById("boton4")
const boton5 = document.getElementById("boton5")
const selectProducts = document.getElementById("select-products")

boton1.addEventListener('click',ejercicio1)
boton2.addEventListener('click',ejercicio2)
boton3.addEventListener('click',ejercicio3)
boton4.addEventListener('click',ejercicio4)


let imgSelect = " "
const modal = document.querySelector('.modal')
const name1 = document.getElementById('new-name')
const age = document.getElementById('new-age')
const gender = document.getElementById('new-gender')
const btnx = document.getElementById('close-modal')
const imagen1 = document.getElementById('new-image')
const crear = document.getElementById('new-create')

window.addEventListener("load",listSelect)
selectProducts.addEventListener('change',renderCards)
boton5.addEventListener('click', showModal)
crear.addEventListener('click', createProduct)
imagen1.addEventListener('change', importImg)
btnx.addEventListener('click',borrar)

function importImg(event){
    const traer = event.target.files[0]
    const objectUrl = URL.createObjectURL(traer)
    imgSelect = objectUrl
}
function createProduct(){
    const capturarName = name1.value;
    const capturarAge = age.value;
    const capturarGender = gender.value;
    const nuevaPersona = {name: capturarName, age: capturarAge, gender: capturarGender, img: imgSelect}
    people.push(nuevaPersona)
    listSelect()
    modal.style.display = 'none'
}
function showModal(){
    modal.style.display = 'flex'
}
function borrar(){
    modal.style.display = 'none'
}
function renderCards (){
    people.map( personas => {personas.name ===  selectProducts.value ? createCards(personas): null})
}
function listSelect(){
    selectProducts.innerHTML = '' 
    const anyOption = document.createElement('option')
    selectProducts.appendChild(anyOption)
    anyOption.textContent = 'Select a Product'
    people.map( personas => {
        const option = document.createElement('option')
        option.value = personas.name
        option.textContent = personas.name
        selectProducts.appendChild(option)
        })
}

function createCards(personas){
    const{name, age, gender, img} = personas

    const card = document.createElement("div")
    card.classList.add('card-product')

    const imgCard  = document.createElement('img')
    imgCard.setAttribute('src',img)
    //imgCard.setAttribute('alt',name)
    imgCard.classList.add('img-product')

    const nameCard = document.createElement('p')
    nameCard.textContent = 'Nombre: ' + name
    nameCard.classList.add('name-product')

    const tipoCard = document.createElement('p')
    tipoCard.textContent = 'Edad: ' + age

    const ciudadCard = document.createElement('p')
    ciudadCard.textContent = 'Genero: ' + gender

    card.appendChild(imgCard)
    card.appendChild(nameCard)
    card.appendChild(tipoCard)
    card.appendChild(ciudadCard)

    container.appendChild(card)
}

function ejercicio1 (){people.filter((hola) => {
    const card = document.createElement('div')
    const name = document.createElement('p')
    const age = document.createElement('p')

    card.classList.add('card')

    name.textContent = hola.name
    age.textContent = hola.age

    card.appendChild(name)
    card.appendChild(age)
    container.appendChild(card)
})
}

function ejercicio2 (){people.filter((hola) => {
    const card = document.createElement('div')
    const name = document.createElement('p')
    const age = document.createElement('p')

    card.classList.add('card')

    if(hola.age >= 20){

    name.textContent = hola.name
    age.textContent = hola.age

    card.appendChild(name)
    card.appendChild(age)
    container.appendChild(card)
    }
})
}

function ejercicio3() {
    const card = document.createElement('div')
    const porcentaje = document.createElement('p')
    let x = 0
    let y = 0
    people.filter((persona) => {
        if (persona.gender == 'Feminine'){
            x++
        } else {
            y++
        }
    },{})
    porcentaje.textContent = (x*100/(y+x)).toFixed(2)+'%'
    card.appendChild(porcentaje)
    container.appendChild(card)
}

function ejercicio4(){people.filter((hola) => {
    const card = document.createElement('div')
    const name = document.createElement('p')
    const age = document.createElement('p')
    const gender = document.createElement('p')
    const imgCard = document.createElement('img')

    imgCard.setAttribute('src',imgCard)
    imgCard.classList.add('img-product')

    card.classList.add('card')

    name.textContent = hola.name
    age.textContent = hola.age
    gender.textContent = hola.gender

    card.appendChild(imgCard)
    card.appendChild(name)
    card.appendChild(age)
    card.appendChild(gender)
    container.appendChild(card)
})
}


// [...people,newperson]
// let name_age = (str) => {
//     return people.filter((datos) => {
//         if(datos.name.indexOf(str) != -1) return true
//         return false
//     })
// }
// console.log(name_age('Jo'))