let pais = document.getElementById('pais')
let region = document.getElementById('region')
let nombre = document.getElementById('nombre')
let hora = document.getElementById('hora')
let icono = document.getElementById('icono')
let descripcion = document.getElementById('descripcion')
let temperatura = document.getElementById('temperatura')

const url = `http://api.weatherapi.com/v1/current.json?key=81373777a5a74f05997155416223005&q=La Plata&aqi=no`

fetch(url)
    .then( response => {return response.json()})
    .then( data => {
        let country = data.location.country
        pais.textContent = country

        let reg = data.location.region
        region.textContent = reg

        let name = data.location.name
        nombre.textContent = name

        let time = data.location.localtime
        hora.textContent = time.slice(-5)

        let cond = data.current.condition.text
        descripcion.textContent = cond

        let temp = Math.round(data.current.temp_c)
        temperatura.textContent = `${temp} °C`

        let img = data.current.condition.icon
        icono.src = `https:${img}`
    })

    /* -------API2------- */ 
    let fecha = document.getElementById('fecha')
    let ARS1 = document.getElementById('ARS1')
    let ARS2 = document.getElementById('ARS2')
    let EUR1 = document.getElementById('EUR1')
    
    const url1 = `https://api.exchangerate.host/convert?from=USD&to=ARS`
    fetch(url1)
        .then( response => {return response.json()})
        .then( data => {
            let date = data.date
            fecha.textContent = date
            let pesos = data.result
            ARS1.textContent = pesos
        })
    
    const url2 = `https://api.exchangerate.host/convert?from=EUR&to=ARS`
    fetch(url2)
        .then( response => {return response.json()})
        .then( data => {
    
            let pesos = data.result
            ARS2.textContent = pesos
        })
    
    const url3 = `https://api.exchangerate.host/convert?from=USD&to=EUR`
    fetch(url3)
        .then( response => {return response.json()})
        .then( data => {
    
            let euros = data.result
            EUR1.textContent = euros
        })

frases = new Array()
frases[0] = "Salgo volando por la ventana, Y tantos días quedan atrás, Ya no me duelen todas las cosas, Que ayer me podían molestar (El fantasma - Árbol)"
frases[1] = "Son cajones que se cierran para que nadie los vea, Son palabras que no pude decir, Pero ya no me importa porque nada me toca, Y no hay nada vivo dentro de mí (El fantasma - Árbol)"
frases[2] = "Floto en el aire desde esta tarde, Cuando mi cabeza explotó, Ahora el piso es de nubes, Y me asomo cada tanto a espiarte desde donde estoy (El fantasma - Árbol)"
frases[3] = "El barrio se ilumina y la noche se hace día, Brilla como un árbol de navidad, Y estoy alto, muy alto, y las luces de los autos, Que se frenan cada tanto y vuelven a arrancar (El fantasma - Árbol)"
aleatorio = Math.random() * (frases.length)
aleatorio = Math.floor(aleatorio)
var frase = document.getElementById("frase");
frase.innerHTML = frases[aleatorio];
var estilo = new Array('css1','css2','css3');
var i = Math.floor(Math.random()*estilo.length);
var frase = document.getElementById('frase');
frase.className = estilo[i];






