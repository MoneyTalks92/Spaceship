const SpaceShip = {
  Fuel: 400,
  Passengers: ['John', 'Steve', 'Sam', 'Danielle'],
  Shields: true,
  Speedometer: 0,
  listPassengers: function () {
    for (let i = 0; i < this.Passengers.length; i++) {
      console.log('Passenger:', this.Passengers[i]);
    }
  },
  addPassenger: function (newPassenger) {
    this.Passengers.push(newPassenger);
    console.log(newPassenger, 'was added to the ship');
  },
  travel: function (distance) {
    console.log('trying to travel:', distance);
    if (this.Fuel === 0) {
      console.log('can\'t go further, tank is empty');
    } else {
      this.Fuel = this.Fuel - (distance / 2);
      if (this.Fuel < 0) {
        distance = distance - (this.Fuel * -2);
        console.log('can only travel:', distance);
        this.Fuel = 0;
      }
      this.Speedometer = this.Speedometer + distance;
      if (this.Fuel < 30) {
        this.Shields = false;
        console.log('fuel is low, turning off shields...');
      }
      console.log('the Spaceship is at:', this.Speedometer);
      console.log('the Spaceship has:', this.Fuel, 'fuel');
    }
  }
};

SpaceShip.listPassengers();
SpaceShip.addPassenger('Lindsay');
SpaceShip.listPassengers();
SpaceShip.travel(750);
SpaceShip.travel(200);
SpaceShip.travel(100);