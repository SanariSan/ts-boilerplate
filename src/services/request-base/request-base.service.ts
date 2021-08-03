import axios, { AxiosInstance } from "axios";
import { handleErrorResponse, handleSuccessResponse } from "../../helpers/services/response.helper";
import { DEFAULT_HEADERS } from "../request-base/request-base.service.const";
import { IRequest } from "./request-base.service.type";

const axiosApiBase: AxiosInstance = axios.create({
	baseURL: process.env.BASE_URL,
	headers: DEFAULT_HEADERS,
	timeout: 10000,
});

const handleRequest =
	(req) =>
	({ path, headers, data, extra }: IRequest): Promise<any> =>
		req(path, data ? data : { ...extra, headers }, { ...extra, headers })
			.then(handleSuccessResponse)
			.catch(handleErrorResponse);
export { handleRequest, axiosApiBase };
