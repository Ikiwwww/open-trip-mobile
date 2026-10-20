import {getDestination} from "../api/destinationApi";
export async function getDestinationService(id){

    const response = await getDestination(id);

    return response.data;
}
