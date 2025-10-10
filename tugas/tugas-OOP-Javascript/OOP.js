class Animal {
  constructor(name) {
    this._name = name;    
    this._legs = 4;         
    this._cold_blooded = false; 
  }

  
  get name() {
    return this._name;
  }

  
  get legs() {
    return this._legs;
  }

  
  set legs(value) {
    if (typeof value === 'number' && value >= 0) {
      this._legs = value;
    } else {
      console.warn("Jumlah kaki harus berupa angka positif.");
    }
  }

  
  get cold_blooded() {
    return this._cold_blooded;
  }
}


class Ape extends Animal {
  constructor(name) {
    super(name);            
    this.legs = 2;         
  }

  yell() {
    console.log("Auooo");
  }
}


class Frog extends Animal {
  constructor(name) {
    super(name);            
  }

  jump() {
    console.log("hop hop");
  }
}


var sheep = new Animal("shaun");

console.log(sheep.name); 
console.log(sheep.legs);
console.log(sheep.cold_blooded); 
sheep.legs = 3;
console.log(sheep.legs);

var sungokong = new Ape("kera sakti");
sungokong.yell(); 
sungokong.legs = 2; 
console.log(sungokong.name); 
console.log(sungokong.legs); 
console.log(sungokong.cold_blooded);

var kodok = new Frog("buduk");
kodok.jump(); 
console.log(kodok.name); 
console.log(kodok.legs); 
console.log(kodok.cold_blooded); 

console.log("---------------------------------------------------------------------------------------")

class Clock {
  constructor({ template }) {
    this.template = template;  // Simpan
    this.timer = null;        
  }

  render() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    var output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
    this.timer = null;  
  }

  start() {
    this.render();  
    this.timer = setInterval(() => this.render(), 1000);
  }
}

var clock = new Clock({ template: 'h:m:s' });
clock.start();

// Catatan: Untuk menghentikan, panggil clock.stop() atau tekan Ctrl+C di terminal
