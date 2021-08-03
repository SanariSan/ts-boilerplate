import { axiosApiBase, handleRequest } from "./../request-base";

const exampleRequest = ({ arg1 }) => {
	handleRequest(axiosApiBase.post)({
		path: "/path",
		data: {
			arg1,
		},
	});
};

export { exampleRequest };
