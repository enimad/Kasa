import ListeLogements from "@/Assets/Api/logements.json";

import { useParams } from "react-router-dom";

let GetAllLogement = () => {
    return ListeLogements;
}

let GetId = () => {
    const params = useParams();
    const id = params.id;
    return id;
}

let GetLogementById = () => {
    ListeLogements.forEach(logement => {
        if (logement.id === GetId()) {
            return logement;
        }
    });
}




export const Service = {
    GetAllLogement,
    GetId,
    GetLogementById,
}

export default Service
