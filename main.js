/* const tipoDeco = prompt("Tu consulta es por deco particular o business");

switch (tipoDeco.toLowerCase()) {
          case "particular":
                    var tipoAmbiente= (prompt("Detallá si tu ambiente es interior o exterior"));
                    //var ambiente= (prompt("Ingresá que ambiente queres remodelar"));
                    
          break;
          case "business":
                    var rubro= (prompt("Ingresá el rubro de tu negocio o emprendimiento"));
          break;
          default:
                    alert("Por favor ingresá una de las dos opciones o iniciá sesión para continuar");
                    console.log("Por favor ingresá una de las dos opciones o iniciá sesión para continuar");
} 

let porcentajeCotiz = 15300;


if (tipoDeco == "particular" && tipoAmbiente== "interior"){
          var cotizM2 = Number(prompt("ingresá los m2 totales para obtener una cotización aproximada"));
          var cotizAlt = Number(prompt("Ingresá la altura de tu/s ambiente/s"));
          var cotizYear = Number(prompt("Ingresá en años la antiguedad"));
          alert("cotización aproximada para tu nuevo hogar: $" + (cotizM2 * porcentajeCotiz * cotizAlt) / cotizYear);
          console.log("cotización aproximada para tu nuevo hogar: $" + (cotizM2 * porcentajeCotiz * cotizAlt) / cotizYear)

}else if (tipoDeco == "business" || tipoAmbiente == "exterior"){
          alert("comunicate por mail o Whatsapp para brindarte mas información");
          console.log("comunicate por mail o Whatsapp para brindarte mas información");  }
else alert("debes detallar si se trata de interiores o exteriores");




if (cotizM2==""  || cotizAlt=="" || cotizYear =="" || cotizM2 == 0 || cotizAlt == 0 || cotizYear == 0){
          alert("para cotizar, deberás ingresar un valor válido: ");
          var cotizM2 = Number(prompt("ingresá los m2 totales para obtener una cotización aproximada"));
          var cotizAlt = Number(prompt("Ingresá la altura de tu/s ambiente/s"));
          var cotizYear = Number(prompt("Ingresá en años la antiguedad"));
          alert("cotización aproximada para tu nuevo hogar: $" + (cotizM2 * porcentajeCotiz * cotizAlt) / cotizYear);
          console.log("cotización aproximada para tu nuevo hogar: $" + (cotizM2 * porcentajeCotiz * cotizAlt) / cotizYear);
} 

 */



// Interfaz Clima en footer

          const key = "bb457fdee56c9cc75a501f6ca3a36325";
          let ciudad = "buenos aires"

                    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}`
                    fetch(url)
                    .then((res)=> {
                              return res.json()
                    })
                    .then((clima)=> {
                              /* console.log(clima) */
                              let temp = clima.main.temp;
                              let tempB = clima.main.humidity;
                              let tempC = temp - 273.15;
                             /*  console.log(tempC); */
                              let html = document.querySelector('#temperatura');
                              
                              if(tempB >= 90) {
                            html.innerHTML = tempC.toFixed(0) + "° " + "🌧️" ;
                          } else if (tempB >= 70 && tempB <= 89) {
                            html.innerHTML = tempC.toFixed(0) + "° " + "⛅" ;
                          } else {
                            html.innerHTML = tempC.toFixed(0) + "° " + "☀️" ;
                          }


                    })
                    .catch((err)=> {
                        Swal.fire('Error al obtener clima :´(')

                    })
        

const btn = document.querySelector('#btn')
btn.addEventListener('click', miAlerta)


function miAlerta(evt){
    evt.preventDefault()
    Swal.fire({
        title: 'Serás dirigido a otra página',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Ir',
        denyButtonText: `Permanecer en MB`,
      }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "https://www.accuweather.com/en/ar/buenos-aires/7894/weather-forecast/7894";
        } 
      })
}



// Evitar reload de pagina
 

/* let urlPages ;


const links = document.querySelectorAll('#pages')

for(let link of links){
    link.addEventListener('click', setURL)
}

function setURL(evt){
    evt.preventDefault()
    // console.log(evt.target.href)
    urlPages = evt.target.href
    pedirPagina(urlPages)

}

function pedirPagina(urlPages) {
  fetch(urlPages)
      .then((res)=>{
        //console.log(res);
        return res.text()
      })
      .then((pagina)=>{
        //console.log(pagina)
        document.querySelector('html').innerHTML = pagina;
      })
      .catch((err)=>{
        alert(err);
      })
}
 */