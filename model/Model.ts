export interface Mappable {
  location: google.maps.LatLngLiteral;
  display(): string;
}

export class User implements Mappable {
  firstName: string;
  lastName: string;
  age: number;
  location: google.maps.LatLngLiteral;

  constructor() {
    this.firstName = "John";
    this.lastName = "Johnson";
    this.age = 25;
    this.location = { lng: 30, lat: 40 };
  }

  display(): string {
    return `<h1>${this.firstName} ${this.lastName}</h1>`;
  }
}

export class Company implements Mappable {
  title: string;
  catchphrase: string;
  location: google.maps.LatLngLiteral;

  constructor() {
    this.title = "Number one";
    this.catchphrase = "Catch me if you can";
    this.location = { lng: 50, lat: 50 };
  }

  display() {
    return `<h1>${this.title}</h1><div>${this.catchphrase}</div>`;
  }
}
