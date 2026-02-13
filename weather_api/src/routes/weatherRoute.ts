import express from "express";
import { getWeatherData, getLondonForecast } from "../controllers/weatherController.js";
import { validateCityName } from "../middleware/validators.js";

// We will create a router object
const router = express.Router();

router.get("/london/forecast", getLondonForecast);


// We will create a route for the weather data based on the city name
router.get("/:city", validateCityName, getWeatherData);

// We will export the router
export default router;
