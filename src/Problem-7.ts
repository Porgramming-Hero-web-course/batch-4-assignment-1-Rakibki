{
  // start
  // problem-7

  class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
      make = this.make;
      model = this.model;
      year = this.year;
    }

    getCarAge() {
      console.log(this.year);
      const currentYear = new Date().getFullYear();
      console.log(this.year);
      return currentYear - this.year;
    }
  }

  const carOnject = new Car("Honda", "Civic", 2018);
  carOnject.getCarAge();

  // end
}
