import { Celebrity } from "../types/listOfUsers";

const getListOfUsers: () => Promise<Celebrity[]> = async () => {
    try {
        const response = await fetch("./model/celebrities.json");
        return response.json();
    } catch(err) {
        console.error(err);
    }
}

export { getListOfUsers }