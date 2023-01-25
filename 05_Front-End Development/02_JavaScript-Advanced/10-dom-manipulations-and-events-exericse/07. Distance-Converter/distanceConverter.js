function attachEventsListeners() {
    const convertBtn = document.getElementById('convert').addEventListener('click', onClickConvert);

    function onClickConvert(ev) {
        const fromUnit = document.getElementById('inputUnits').value;
        const toUnit = document.getElementById('outputUnits').value;
        const inputValue = document.getElementById('inputDistance').value;
        const outputField = document.getElementById('outputDistance');

        let valueInMeters = 0
        switch (fromUnit) {
            case 'km':
                valueInMeters = inputValue * 1000;
                break;
            case 'm':
                valueInMeters = inputValue * 1;
                break;
            case 'cm':
                valueInMeters = inputValue * 0.01;
                break;
            case 'mm':
                valueInMeters = inputValue * 0.001;
                break;
            case 'mi':
                valueInMeters = inputValue * 1609.34;
                break;
            case 'yrd':
                valueInMeters = inputValue * 0.9144;
                break;
            case 'ft':
                valueInMeters = inputValue * 0.3048;
                break;
            case 'in':
                valueInMeters = inputValue * 0.0254;
                break;
        }

        let valueInTargetUnits = 0;

        switch (toUnit) {
            case 'km':
                valueInTargetUnits = valueInMeters / 1000;
                break;
            case 'm':
                valueInTargetUnits = valueInMeters / 1;
                break;
            case 'cm':
                valueInTargetUnits = valueInMeters / 0.01;
                break;
            case 'mm':
                valueInTargetUnits = valueInMeters / 0.001;
                break;
            case 'mi':
                valueInTargetUnits = valueInMeters / 1609.34;
                break;
            case 'yrd':
                valueInTargetUnits = valueInMeters / 0.9144;
                break;
            case 'ft':
                valueInTargetUnits = valueInMeters / 0.3048;
                break;
            case 'in':
                valueInTargetUnits = valueInMeters / 0.0254;
                break;
        }
        outputField.value = valueInTargetUnits;

    }

}