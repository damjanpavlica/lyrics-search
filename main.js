const naslovPesme = document.getElementById("naslov-pesme")
const tekstPesme = document.getElementById("tekst-pesme")
const forma = document.getElementById("forma")
const trazeniIzvodjac = document.getElementById("trazeni-izvodjac")
const trazenaPesma = document.getElementById("trazena-pesma")

function ucitajPodatke() {
    const izvodjac = trazeniIzvodjac.value 
    const pesma = trazenaPesma.value
    const url = `https://api.lyrics.ovh/v1/${izvodjac}/${pesma}`
    fetch(url)
        .then(response => response.json())
        .then(objekat => {
            naslovPesme.innerText = izvodjac + ' - ' + pesma
            tekstPesme.innerText = objekat.lyrics ? objekat.lyrics : "Nema pesme"
        })
}

forma.addEventListener('submit', function(e) {
    e.preventDefault();
    ucitajPodatke();
})
