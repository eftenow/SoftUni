function attachEvents() {
    let inputField = document.getElementById('location');
    let currentEl = document.getElementById('current');
    let upcomingEl = document.getElementById('upcoming');
    let forecastSection = document.getElementById('forecast');
    let upcomingSection = document.getElementById('upcoming');
    let locationsUrl = 'http://localhost:3030/jsonstore/forecaster/locations'
    let currentConditionsUrl = 'http://localhost:3030/jsonstore/forecaster/today/'
    let upcomingConditionsUrl = 'http://localhost:3030/jsonstore/forecaster/upcoming/'
    let getSymbol = {
        'Sunny': '\u2600',
        'Partly sunny': '\u26C5',
        'Overcast': '\u2601',
        'Rain': '\u2614',
        'degree': '\xB0'
    }

    let submitBtn = document.getElementById('submit');
    let upcomingWraper = document.createElement('div');
    upcomingWraper.className = 'forecast-info';
    let currentWrapper = document.createElement('div');
    currentWrapper.className = 'forecasts';

    submitBtn.addEventListener('click', onClick)

    async function onClick() {
        
        try {
            let allLocations = await ((await (fetch(locationsUrl))).json());
            let location = allLocations.find(l => l.name == inputField.value);
            let code = location.code;
            forecastSection.style.display = 'block';
            upcomingSection.style.display = 'block';
            let currentConditions = await ((await (fetch(`${currentConditionsUrl}${code}`))).json());
            let upcomingConditions = await ((await (fetch(`${upcomingConditionsUrl}${code}`))).json());
            addCurrentForecast(currentConditions);
            addUpcomingForecast(upcomingConditions);
            inputField.value = '';

        } catch (error) {
            inputField.value = 'Error';
            forecastSection.style.display = 'none';
            upcomingSection.style.display = 'none';
        }

    }

    function addCurrentForecast(conditionsObj) {
        let locationData = conditionsObj.forecast;
        let name = conditionsObj.name;
        currentWrapper.innerHTML = '';

        let symbolSpan = document.createElement('span');
        symbolSpan.textContent = getSymbol[locationData.condition];
        symbolSpan.classList.add('condition', 'symbol');

        let forecastWrapperSpan = document.createElement('span');
        forecastWrapperSpan.className = 'condition';

        let nameSpan = document.createElement('span');
        nameSpan.textContent = name;

        let degreesSpan = document.createElement('span');
        degreesSpan.textContent = `${locationData.low}${getSymbol.degree}/${locationData.high}${getSymbol.degree}`

        let conditionSpan = document.createElement('span');
        conditionSpan.textContent = locationData.condition;

        [nameSpan, degreesSpan, conditionSpan].map(el => el.className = 'forecast-data');

        forecastWrapperSpan.append(nameSpan, degreesSpan, conditionSpan);
        currentWrapper.append(symbolSpan, forecastWrapperSpan);
        currentEl.append(currentWrapper);

    }

    function addUpcomingForecast(conditionsObj) {
        let locationData = conditionsObj.forecast;
        let name = conditionsObj.name;
        upcomingWraper.innerHTML = '';


        locationData.map(data => {
            let innerWrapper = document.createElement('span');
            innerWrapper.className = 'upcoming';

            let symbolSpan = document.createElement('span');
            symbolSpan.className = 'symbol';
            symbolSpan.textContent = getSymbol[data.condition];

            let degreesSpan = document.createElement('span');
            degreesSpan.textContent = `${data.low}${getSymbol.degree}/${data.high}${getSymbol.degree}`

            let conditionSpan = document.createElement('span');
            conditionSpan.textContent = data.condition;

            [degreesSpan, conditionSpan].map(el => el.className = 'forecast-data');

            innerWrapper.append(symbolSpan, degreesSpan, conditionSpan);
            upcomingWraper.appendChild(innerWrapper);
        })
        upcomingEl.append(upcomingWraper);


    }
}
attachEvents();