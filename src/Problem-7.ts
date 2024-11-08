{
  // start
  // problem-7

  class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    getCarAge(): string {
      const currentYear = new Date().getFullYear();
      return `${
        currentYear - this.year
      } (assuming current year is ${currentYear})`;
  }
  }


  // end
}
