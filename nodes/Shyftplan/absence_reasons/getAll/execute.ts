import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function absence_reasonsGetAllExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	const credentials = await node.getCredentials('shyftplanApi');
	console.log(credentials);
	let responseData;
	/* 	const user_email = node.getNodeParameter('user_email', i) as string;
	const authentication_token = node.getNodeParameter('authentication_token', i) as string; */
	const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
	/* 	const data: IDataObject = {
		user_email,
		authentication_token,
	}; */
	const data: IDataObject = {};

	// put it  all inputs together
	Object.assign(data, additionalFields);
	Object.assign(data, credentials);

	const header = {
		'content-type': 'x-www-form-urlencoded',
	};

	// construct request
	const myOptions: IHttpRequestOptions = {
		url: credentials.domain + '/api/v1/absence_reasons',
		method: 'GET',
		headers: header,
		qs: data,
	};
	console.log(responseData);
	responseData = await node.helpers.httpRequest(myOptions);
	console.log(responseData);
	return responseData;
}
