import {WeatherData} from "../utils/types.ts";

interface Props {
    weather: WeatherData | null,
    message: string
}

const Weather = ({weather, message}: Props) => {
    if (!weather) {
        return <div>{message}</div>
    }

    const timestamp = weather.sunset;
    const date = new Date(timestamp * 1000);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const sunsetTime = `${hours}:${minutes}`;
    return (
        <div className={'infoWeath'}>
            {!message &&
                <>
                    <p>Location: {weather.country}, {weather.city}</p>
                    <p>Temp: {weather.temp}</p>
                    <p>Pressure: {weather.pressure}</p>
                    <p>Sunset: {`${sunsetTime}`}</p>
                </>
            }
            <>{message}</>
        </div>
    )
}

export default Weather;