import fs from 'fs';
import path from 'path';


export function getAllCubes() {
    const jsonData = fs.readFileSync("../db.json", 'utf-8');
    return JSON.parse(jsonData);
}


export function getOneCube(id) {
    const cubes = getAllCubes();
    const cube = cubes.find(cube => cube.id == id);

    return cube;
}

export function createNewCube(data) {
    const existingCubes = getAllCubes();
    const id = existingCubes.length;
    const newCube = { id, ...data };

    fs.writeFileSync("../db.json", JSON.stringify([...existingCubes, newCube], null, 4));

    return newCube;
}


export function filterCubes(search = "", from, to) {
    const cubes = getAllCubes();

    const isSearched = (cubeName) => cubeName.toLowerCase().startsWith(search.toLowerCase());
    const isWithinRange = (level) => Number(from) <= Number(level) && Number(level) <= Number(to);

    const filteredCubes = cubes.filter(cube => isSearched(cube.name) && isWithinRange(cube.difficultyLevel));

    return filteredCubes;
}
