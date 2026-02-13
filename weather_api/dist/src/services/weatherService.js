import { faker } from "@faker-js/faker";
export const generateLondonWeatherData = () => {
    // Generate random weather data
    const generatedWeatherData = {
        temperature: faker.number.int({ min: -15, max: 30 }),
        humidity: faker.number.int({ min: 79, max: 86 }),
        wind: faker.number.int({ min: 2, max: 78 }),
        rain: faker.number.int({ min: 65, max: 75 }),
    };
    // Return weather data
    return generatedWeatherData;
};
export const generateDublinWeatherData = () => {
    // Generate random weather data
    const generatedWeatherData = {
        temperature: faker.number.int({ min: -15, max: 30 }),
        humidity: faker.number.int({ min: 79, max: 86 }),
        wind: faker.number.int({ min: 2, max: 78 }),
        rain: faker.number.int({ min: 65, max: 75 }),
    };
    // Return weather data
    return generatedWeatherData;
};
export const generateDubaiWeatherData = () => {
    // Generate random weather data
    const generatedWeatherData = {
        temperature: faker.number.int({ min: -15, max: 30 }),
        humidity: faker.number.int({ min: 79, max: 86 }),
        wind: faker.number.int({ min: 2, max: 78 }),
        rain: faker.number.int({ min: 65, max: 75 }),
    };
    // Return weather data
    return generatedWeatherData;
};
export const generateParisWeatherData = () => {
    // Generate random weather data
    const generatedWeatherData = {
        temperature: faker.number.int({ min: -15, max: 30 }),
        humidity: faker.number.int({ min: 79, max: 86 }),
        wind: faker.number.int({ min: 2, max: 78 }),
        rain: faker.number.int({ min: 65, max: 75 }),
    };
    // Return weather data
    return generatedWeatherData;
};
//# sourceMappingURL=weatherService.js.map