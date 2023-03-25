import axios from "axios";
import defaultConfig from "../config";

const baseUrl = defaultConfig.apiBase + "/journal";

/**
 * add a new journal
 * @param {{title: String, publishedDate:String, body?:String}} body 
 */
async function addJournal(body) {
    try {
        return axios.post(baseUrl, body);
    } catch (error) {
        throw error;
    }
}

/**
 * lists journal with pagination
 * @param {{limit: Number, search?:String, page: Number}} param0 
 * @returns 
 */
async function listJournal({ limit = 10,page=1, search }) {
    try {
        return (await axios.get(baseUrl + `?limit=${limit}&page=${page}${search ? "&search=" + search : ""}`)).data;
    } catch (error) {
        throw error;
    }
}

export default { addJournal, listJournal };