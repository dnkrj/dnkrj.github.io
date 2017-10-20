const NUMBER_OF_CARS = 30;
const NUMBER_OF_ROWS = 14;
const MAX_SPEED = 40;
const STARTING_DISTANCE = 200;
const MINIMUM_DISTANCE = 20;
const ACCELERATION = 1;
const INNER_RADIUS = 100;
const ROW_DISTANCE = 15;
const SLOWDOWN = 5000;
const PI = 3.14

class Car {
	constructor(t, row, color, opt_following) {
    this.t = t;
    this.row = row;
    this.color = color;
    this.following = opt_following;
    this.speed = 0;
    this.nextSpeed = 0;
    this.element = document.createElement('div');
    this.element.style.color = color;
    this.element.classList.add('car');
    document.body.appendChild(this.element);
  }
  
  updateSpeed() {
    if (this.following &&
          this.following.t < this.t + MINIMUM_DISTANCE * this.row) {
      const reducedSpeed =
          (this.following.t + this.following.speed - this.t) / MAX_SPEED;
      this.nextSpeed =
          reducedSpeed < this.nextSpeed ? reducedSpeed : this.nextSpeed;
    } else if (!this.following ||
          this.following.t > (this.t + STARTING_DISTANCE)) {
      this.nextSpeed = this.nextSpeed + ACCELERATION;
    }
    this.nextSpeed = Math.min(this.nextSpeed, MAX_SPEED);
  }
  
  animate() {
    this.updateSpeed();
    this.element.style.color =
        this.nextSpeed < this.speed ? '#8069ff' : this.color;
    this.speed = this.nextSpeed;
  	this.t += this.speed;
    this.element.style.left = Math.floor(
        window.innerWidth / 2 +
            ((INNER_RADIUS + this.row * ROW_DISTANCE) *
                Math.cos(this.t / SLOWDOWN))) + 'px';
    this.element.style.top = Math.floor(
        window.innerHeight / 2 +
            ((INNER_RADIUS + this.row * ROW_DISTANCE) *
                Math.sin(this.t / SLOWDOWN))) + 'px';
  	requestAnimationFrame(() => this.animate());
  }
}

class Leader extends Car {
  constructor(t, row) {
    super(t, row, '#000');
    window.addEventListener('keydown', () => this.brake());
  }

  updateSpeed() {
    super.updateSpeed();
    if (Math.floor(this.t / MAX_SPEED) ==
        Math.floor(SLOWDOWN * PI / MAX_SPEED)) {
      this.nextSpeed = 1;
    }
  }

  brake() {
    this.nextSpeed = Math.max(0, this.speed - 10);
  }
}

for (let row = 1; row < NUMBER_OF_ROWS + 1; row++) {
  let leader = new Leader(NUMBER_OF_CARS, row);
  leader.animate();
  for (let c = 1; c < NUMBER_OF_CARS; c++) {
    const value = Math.floor(c / NUMBER_OF_CARS * 100);
    const color = `hsl(12, 83%, ${value}%)`;
    let car = new Car((NUMBER_OF_CARS - c), row, color, leader);
    leader = car;
    leader.animate();
  }
}
