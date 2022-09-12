class Vehicle2 {
  // kalau kita mau menerima argument, maka kita harus gunakan constructor
  // constructor merupakan special method di dalam class, yang mana akan langsung di execute ketika kita membuat instance class
  // kita tambahkan public (yang juga bisa digunakan untuk field), artinya dia akan mengambil apapun argument yang diinput
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle2("orange");
console.log(vehicle.color);

class Car extends Vehicle2 {
  // kenapa kita ga buat color public? Karena si parent sudah define
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log("vroom vroom");
  }

  // ini bisa call drive karena ada di dalam class
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, "red");

car.startDrivingProcess();
