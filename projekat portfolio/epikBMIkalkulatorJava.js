document.addEventListener('DOMContentLoaded', function () {
    const visinaInput = document.getElementById('visina');
    const tezinaInput = document.getElementById('tezina');
    const dugme = document.getElementById('calculateBtn');

    dugme.addEventListener('click', calculateBMI);

    function calculateBMI() {
        let visina = parseFloat(visinaInput.value);
        let tezina = parseFloat(tezinaInput.value);

        if (isNaN(visina) || isNaN(tezina) || visina <= 0 || tezina <= 0) {
            document.getElementById('result').textContent = "Molimo unesite validne vrednosti za visinu i težinu.";
            return;
        }

        const pol = document.querySelector('input[name="pol"]:checked')?.id;

        if (!pol) {
            document.getElementById('result').textContent = "Molimo odaberite vaš pol.";
            return;
        }

        let bmi = tezina / (visina * visina);
        let classification = '';

        if (pol === 'musko') {
            if (bmi < 18.5) classification = 'Anoreksija c c c c kakav si ti to covek';
            else if (bmi < 24.9) classification = 'Prihvaćen si u društvo';
            else if (bmi < 29.9) classification = 'Fat American';
            else classification = 'Kako si ziv?';
        } else if (pol === 'zensko') {
            if (bmi < 18.5) classification = 'Anoreksija c c c c';
            else if (bmi < 24.9) classification = 'Prihvaćena si u društvo';
            else if (bmi < 29.9) classification = 'Fat American Karen';
            else classification = 'Kako si ziva?';
        } else if (pol === 'sigma') {
            classification = 'Sticking out your gyatt for the rizzler,\nyoure so skibidi,\nso fanum tax,\nI just wanna be your sigma,\nfreaking come here,\ngive me your Ohio';
        }

        document.getElementById('result').textContent =
            `Vaš BMI je: ${bmi.toFixed(2)}. Klasifikacija: ${classification}`;
    }
});
