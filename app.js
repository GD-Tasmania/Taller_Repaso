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

boton1.addEventListener('click',ejercicio1)
boton2.addEventListener('click',ejercicio2)
boton3.addEventListener('click',ejercicio3)
boton4.addEventListener('click',ejercicio4)

// let name_age = (str) => {
//     return people.filter((datos) => {
//         if(datos.name.indexOf(str) != -1) return true
//         return false
//     })
// }
// console.log(name_age('Jo'))


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

// let order_age = () => {
//     return people.reduce((order_age,persona) => {
//         if (persona.age<=20){
//             order_age.menor.push(persona)
//             return order_age
//         } else {
//             order_age.mayor.push(persona)
//         }
//         return order_age
//     },{menor:[], mayor:[]})
// }
// console.log(order_age());

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
    porcentaje.textContent = x*100/(y+x)
    card.appendChild(porcentaje)
    container.appendChild(card)
}



function ejercicio4(){people.filter((hola) => {
    const card = document.createElement('div')
    const name = document.createElement('p')
    const age = document.createElement('p')
    const gender = document.createElement('p')
    const imgCard = document.createElement('img')

    imgCard.setAttribute('src',img)
    imgCard.setAttribute('alt',name)
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
