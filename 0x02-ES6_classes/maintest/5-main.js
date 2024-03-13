import Building from '../5-building.js';

const b = new Building("jjj");
console.log(b);

class TestBuilding extends Building {}

try {
    new TestBuilding(200)
}
catch(err) {
    console.log(err);
}
