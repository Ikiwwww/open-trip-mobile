import { getHome } from "../api/homeApi";

export async function fetchHome() {

    const response = await getHome();

    return response.data;

}

