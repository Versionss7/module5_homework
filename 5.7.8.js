let cars = new Map()

cars.set ('Audi', 'white')
cars.set ('BMW', 'black')
cars.set ('Ferrari', 'red')
cars.set ('Toyota', 'green')

for (let name of cars) {

console.log(`Машина - ${name[0]}; Цвет - ${name[1]}`)

}
