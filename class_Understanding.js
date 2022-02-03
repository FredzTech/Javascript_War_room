const utensils = [
  "mugs",
  "plates",
  "spoons",
  "salt",
  "sugar",
  "table",
  "cooker",
];
class House {
  displayData(data) {
    //The data is just a general placeholder
    console.log(data);
  }

  displayOtherUtensils() {
    const utensilz = [
      "mugz",
      "platez",
      "spoonz",
      "saltz",
      "sugaz",
      "tablez",
      "cookerz",
    ];
    this.displayData(utensilz);
  }

  displayingObjects() {
    let weatherData = [
      {
        coord: {
          lon: 36.8167,
          lat: -1.2833,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04n",
          },
        ],
        base: "stations",
        main: {
          temp: 291.96,
          feels_like: 291.38,
          temp_min: 289.8,
          temp_max: 292.08,
          pressure: 1022,
          humidity: 57,
        },
        visibility: 10000,
        wind: {
          speed: 0,
          deg: 0,
        },
        clouds: {
          all: 75,
        },
        dt: 1631385907,
        sys: {
          type: 1,
          id: 2558,
          country: "KE",
          sunrise: 1631330797,
          sunset: 1631374348,
        },
        timezone: 10800,
        id: 184745,
        name: "Nairobi",
        cod: 200,
      },
      {
        coord: {
          lon: 36.8167,
          lat: -1.2833,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04n",
          },
        ],
        base: "stations",
        main: {
          temp: 291.96,
          feels_like: 291.38,
          temp_min: 289.8,
          temp_max: 292.08,
          pressure: 1022,
          humidity: 57,
        },
        visibility: 10000,
        wind: {
          speed: 0,
          deg: 0,
        },
        clouds: {
          all: 75,
        },
        dt: 1631385907,
        sys: {
          type: 1,
          id: 2558,
          country: "KE",
          sunrise: 1631330797,
          sunset: 1631374348,
        },
        timezone: 10800,
        id: 184745,
        name: "Nyahururu",
        cod: 200,
      },
      {
        coord: {
          lon: 36.8167,
          lat: -1.2833,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04n",
          },
        ],
        base: "stations",
        main: {
          temp: 291.96,
          feels_like: 291.38,
          temp_min: 289.8,
          temp_max: 292.08,
          pressure: 1022,
          humidity: 57,
        },
        visibility: 10000,
        wind: {
          speed: 0,
          deg: 0,
        },
        clouds: {
          all: 75,
        },
        dt: 1631385907,
        sys: {
          type: 1,
          id: 2558,
          country: "KE",
          sunrise: 1631330797,
          sunset: 1631374348,
        },
        timezone: 10800,
        id: 184745,
        name: "Kirinyaga",
        cod: 200,
      },
      {
        coord: {
          lon: 36.8167,
          lat: -1.2833,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04n",
          },
        ],
        base: "stations",
        main: {
          temp: 291.96,
          feels_like: 291.38,
          temp_min: 289.8,
          temp_max: 292.08,
          pressure: 1022,
          humidity: 57,
        },
        visibility: 10000,
        wind: {
          speed: 0,
          deg: 0,
        },
        clouds: {
          all: 75,
        },
        dt: 1631385907,
        sys: {
          type: 1,
          id: 2558,
          country: "KE",
          sunrise: 1631330797,
          sunset: 1631374348,
        },
        timezone: 10800,
        id: 184745,
        name: "Nyeri",
        cod: 200,
      },
    ];
    let simpler_Data = this.destructureData(weatherData);
    this.displayData(simpler_Data);
  }

  destructureData(rnData) {
    let newData = rnData.map((datas) => {
      let { lon: longitude, lat: latitude } = datas.coord;
      let { temp, pressure, humidity } = datas.main;
      let { name: city } = datas;
      return {
        city,
        longitude,
        latitude,
        pressure,
        humidity,
        temp,
      };
    });
    return newData;
  }
}

const House_1 = new House();
House_1.displayOtherUtensils();
House_1.displayingObjects();
