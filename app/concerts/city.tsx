import {useParams} from "react-router";

export default function ConcertsCity() {
    const { city } = useParams();
    return <h1>Concerts City {city}Page</h1>;
}