import {wipeHTML, showError, showSpinner} from "../app.js";


export function consultarAPI(ciudad, pais) {
    const API_key = "84d0c3b1cdd40dacf022a5d51297c764";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${API_key}`;

    showSpinner(); // Mostramos el spinner

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            wipeHTML();

            if (data.cod === "404") {
                showError("Ciudad no encontrada");
                return;
            }

            mostrarClima(data);
        });
}

export function mostrarClima(clima) {
    const {
        name,
        main: { temp, temp_max, temp_min },
    } = clima;

    const temperatura = kelvintoCentigrados(temp);
    const max = kelvintoCentigrados(temp_max);
    const min = kelvintoCentigrados(temp_min);

    const nombreCiudad = document.createElement("p");
    nombreCiudad.textContent = `Clima en ${name}`;
    nombreCiudad.classList.add("font-bold", "text-2xl");

    const actual = document.createElement("p");
    actual.innerHTML = `${temperatura} &#8451;`;
    actual.classList.add("font-bold", "text-6xl");

    const tempMaxima = document.createElement("p");
    tempMaxima.innerHTML = `Max: ${max} &#8451;`;
    tempMaxima.classList.add("text-xl");

    const tempMinima = document.createElement("p");
    tempMinima.innerHTML = `Min: ${min} &#8451;`;
    tempMinima.classList.add("text-xl");

    const resultadoDiv = document.createElement("div");
    resultadoDiv.classList.add("text-center", "text-white");
    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(tempMaxima);
    resultadoDiv.appendChild(tempMinima);

    resultado.appendChild(resultadoDiv);
}
export const kelvintoCentigrados = (grados) => parseInt(grados - 273.15);

export const getClimateInfo = async(lat, lon) => {
    const API_key = "84d0c3b1cdd40dacf022a5d51297c764";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`;

    showSpinner(); // Mostramos el spinner

    return new Promise(async function (resolve, reject) {
        await fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                wipeHTML();

                if (data.cod === "404") {
                    reject("Ciudad no encontrada");
                    return;
                }

                resolve(data);
            });

    })
}

export function climateMap(lat, lon) {

}
