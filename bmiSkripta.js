document.addEventListener('DOMContentLoaded', function() {
    // Uzmi inpute i dodaj event listener za unos vrednosti
    const visinaInput = document.getElementById('visina');
    const tezinaInput = document.getElementById('tezina');
    const genderInputs = document.querySelectorAll('input[name="radio-group"]'); // Uzima radio dugmadi za odabir spola
    
    // Dodaj event listener za svaki input da bi odmah proračunali BMI kada se menja vrednost
    visinaInput.addEventListener('input', calculateBMI);
    tezinaInput.addEventListener('input', calculateBMI);
    // Dodaj event listener za promenu spola
    genderInputs.forEach(input => input.addEventListener('change', calculateBMI));

    // Funkcija koja računa BMI i prikazuje ga
    function calculateBMI() {
        // Uzmi unete vrednosti za visinu i težinu
        let visina = parseFloat(visinaInput.value);
        let tezina = parseFloat(tezinaInput.value);

        // Provjera spola
        const maleSelected = document.getElementById('radio1').checked;
        const femaleSelected = document.getElementById('radio2').checked;

        // Provera da li su vrednosti validne
        if (isNaN(visina) || isNaN(tezina) || visina <= 0 || tezina <= 0) {
            document.getElementById('result').textContent = "Molimo unesite validne vrednosti za visinu i težinu.";
            return; // Prekida dalje računanje u slučaju greške
        }

        // Izračunaj BMI
        let bmi = tezina / (visina * visina);

        // Klasifikacija BMI-a na osnovu spola
        let classification = '';
        if (maleSelected) {
            // Klasifikacija za muškarce
            if (bmi < 18.5) {
                classification = 'Anoreksija c c c c kakav si ti to covek';
            } else if (bmi >= 18.5 && bmi < 24.9) {
                classification = 'Prihvaćen si u društvo';
            } else if (bmi >= 25 && bmi < 29.9) {
                classification = 'Fat American';
            } else {
                classification = 'Pretilost';
            }
        } else if (femaleSelected) {
            // Klasifikacija za žene
            if (bmi < 18.5) {
                classification = 'Anoreksija c c c c';
            } else if (bmi >= 18.5 && bmi < 24.9) {
                classification = 'Prihvaćena si u društvo';
            } else if (bmi >= 25 && bmi < 29.9) {
                classification = 'Fat American Karen';
            } else {
                classification = 'Pretilost';
            }
        } else {
            document.getElementById('result').textContent = "Molimo odaberite vaš spol.";
            return; // Ako nije odabran spol
        }

        // Prikazivanje rezultata na stranici odmah
        let resultText = `Vaš BMI je: ${bmi.toFixed(2)}. Klasifikacija: ${classification}`;
        document.getElementById('result').textContent = resultText;
    }
});
