
import {apiFactory} from "../../api-factory/apiFactory";

const appApiConfig = {
    hostURL: "http://localhost:2000/api/typeform"
};

export const appApi = apiFactory.createApi(appApiConfig);
