const { assert } = require("chai");
const { rgbToHexColor } = require("./rgb-to-hex");

describe('rgbToHex', () => {
    it('should return the desired color in hex format', () => {
        const result = rgbToHexColor(0, 255, 242);
        assert.strictEqual(result, '#00FFF2');
    });
    it('should return undefined if the arguments are not numbers', () => {
        let resul1 = rgbToHexColor(5, 155, 'g');
        let resul2 = rgbToHexColor('g', 155, 155);
        let resul3 = rgbToHexColor(5, 'g', 155);

        assert.equal(undefined, resul1);
        assert.equal(undefined, resul2);
        assert.equal(undefined, resul3);
    })

    it('should return false if any of the arguments is above 255', () => {
        let resul1 = rgbToHexColor(355, 155, 155);
        let resul2 = rgbToHexColor(155, 355, 155);
        let resul3 = rgbToHexColor(155, 155, 355);

        assert.equal(undefined, resul1);
        assert.equal(undefined, resul2);
        assert.equal(undefined, resul3);
    });

    it('should return false if any of the arguments is below 0', () => {
        let resul1 = rgbToHexColor(-10, 155, 155);
        let resul2 = rgbToHexColor(155, -10, 155);
        let resul3 = rgbToHexColor(155, 155, -10);

        assert.equal(undefined, resul1);
        assert.equal(undefined, resul2);
        assert.equal(undefined, resul3);
    })
})