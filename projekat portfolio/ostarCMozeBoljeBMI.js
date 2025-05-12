document.addEventListener('DOMContentLoaded', function () {
    const visinaInput = document.getElementById('visina');
    const tezinaInput = document.getElementById('tezina');
    const dugme = document.getElementById('calculateBtn');

    const bmiKategorije = {
        musko: [
            { max: 18.5, opis: 'Anoreksija c c c c kakav si ti to covek' },
            { max: 24.9, opis: 'Prihvaćen si u društvo' },
            { max: 29.9, opis: 'Fat American' },
            { max: Infinity, opis: 'Kako si ziv?' }
        ],
        zensko: [
            { max: 18.5, opis: 'Anoreksija c c c c' },
            { max: 24.9, opis: 'Prihvaćena si u društvo' },
            { max: 29.9, opis: 'Fat American Karen' },
            { max: Infinity, opis: 'Kako si ziva?' }
        ],
        sigma: [
            { max: Infinity, opis: 'Sticking out your gyatt for the rizzler,\nyoure so skibidi,\nso fanum tax,\nI just wanna be your sigma,\nfreaking come here,\ngive me your Ohio' }
        ]
    };

    dugme.addEventListener('click', calculateBMI);

    function calculateBMI() {
        let visina = parseFloat(visinaInput.value);
        let tezina = parseFloat(tezinaInput.value);

        if (isNaN(visina) || isNaN(tezina) || visina <= 0 || tezina <= 0) {
            document.getElementById('result').textContent = "Molimo unesite validne vrednosti za visinu i težinu.";
            return;
        }

        visina = visina / 100; // Pretvori cm u metre
        const pol = document.querySelector('input[name="pol"]:checked')?.id;

        if (!pol || !bmiKategorije[pol]) {
            document.getElementById('result').textContent = "Molimo odaberite vaš pol.";
            return;
        }

        let bmi = tezina / (visina * visina);
        let klasifikacija = bmiKategorije[pol].find(k => bmi < k.max)?.opis || "Nepoznata klasifikacija.";

        document.getElementById('result').textContent =
            `Vaš BMI je: ${bmi.toFixed(2)}. Klasifikacija: ${klasifikacija}`;
    }
});
