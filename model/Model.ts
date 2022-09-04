import { faker } from "@faker-js/faker";

export interface Mappable {
  location: google.maps.LatLngLiteral;
  display(): string;
}

export class User implements Mappable {
  firstName: string;
  lastName: string;
  age: number;
  location: google.maps.LatLngLiteral;

  constructor(
    first_name: string,
    last_name: string,
    age: number,
    location: google.maps.LatLngLiteral
  ) {
    this.firstName = first_name;
    this.lastName = last_name;
    this.age = age;
    this.location = location;
  }

  static createRandom() {
    return new User(
      faker.name.firstName(),
      faker.name.lastName(),
      parseInt(faker.random.numeric(2)),
      {
        lat: parseFloat(faker.address.latitude()),
        lng: parseFloat(faker.address.longitude()),
      }
    );
  }
  display(): string {
    return `<h1>${this.firstName} ${this.lastName}</h1>`;
  }
}

export class Company implements Mappable {
  title: string;
  catchphrase: string;
  location: google.maps.LatLngLiteral;

  constructor(
    title: string,
    catchphrase: string,
    location: google.maps.LatLngLiteral
  ) {
    this.title = title;
    this.catchphrase = catchphrase;
    this.location = location;
  }

  static createRandom() {
    return new Company(faker.company.name(), faker.company.catchPhrase(), {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    });
  }

  display() {
    return `<h1>${this.title}</h1><div>${this.catchphrase}</div>`;
  }
}
