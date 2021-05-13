// készítünk egy SpaceShip objectet
const SpaceShip = {
  // megadjuk a propertyket
  fuel: 400,
  passengers: ['John', 'Steve', 'Sam', 'Danielle'],
  shields: true,
  speedometer: 0,
  // készítünk egy listPassengers metódust
  listPassengers: function () {
    // végigmegyünk a passengers tömbbön
    for (let i = 0; i < this.passengers.length; i++) {
      // kiírjuk, hogy "Passenger:" és a tömb elemeit
      console.log('Passenger:', this.passengers[i]);
    }
  },
  // készítünk egy addPassenger metódust newPassenger bemeneti paraméterrel
  addPassenger: function (newPassenger) {
    // a push fügvénnyel betesszük a passengers tömbbe a newPassengert
    this.passengers.push(newPassenger);
    // kiírjuk a newPassengert és hogy "was added to the ship"
    console.log(newPassenger, 'was added to the ship');
  },
  // készítünk egy travel metódust distance bemeneti paraméterrel
  travel: function (distance) {
    // kiírjuk hogy "trying to travel", majd a distance értékét
    console.log('trying to travel:', distance);
    // ha a fuel értéke 0
    if (this.fuel === 0) {
      // akkor kiírjuk, hogy "can't go further, tank is empty"
      console.log('can\'t go further, tank is empty');
      // ha nem 0
    } else {
      // a fuel értékének beállítjuk a fuel-(distance/2)-t
      this.fuel = this.fuel - (distance / 2);
      // ha a fuel értéke negatív
      if (this.fuel < 0) {
        // a distancet beállítjuk arra az értékre, amennyit még meg tud tenni a SpaceShip
        distance = distance - (this.fuel * -2);
        // kiírjuk, hogy "can only travel", majd a distance értékét
        console.log('can only travel:', distance);
        // a fuel értékének 0-t adunk
        this.fuel = 0;
      }
      // a speedometerhez hozzáadjuk a distance értékét
      this.speedometer = this.speedometer + distance;
      // ha a fuel kevesebb, mint 30 és nem 0
      if (this.fuel < 30 && this.fuel !== 0) {
        // a shieldset falsera állítjuk
        this.shields = false;
        // kiírjuk, hogy "fuel is low, turning off shields..."
        console.log('fuel is low, turning off shields...');
      }
      // kiírjuk a speedometer értékét, és a fuel mennyiségét
      console.log('the Spaceship is at:', this.speedometer);
      console.log('the Spaceship has:', this.fuel, 'fuel');
    }
  }
};

// meghívjuk a SpaceShip object metódusait
SpaceShip.listPassengers();
SpaceShip.addPassenger('Lindsay');
SpaceShip.listPassengers();
SpaceShip.travel(750);
SpaceShip.travel(200);
SpaceShip.travel(100);