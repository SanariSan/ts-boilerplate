import { AxiosError, AxiosResponse } from "axios";

const handleSuccessResponse = async (response: AxiosResponse): Promise<{ data } | string> => {
	let res;
	if (response.data) {
		res = response.data;
	}

	return res;
};

const handleErrorResponse = async (response: AxiosError): Promise<any> => {
	return Promise.reject(response.response);
};

export { handleSuccessResponse, handleErrorResponse };
