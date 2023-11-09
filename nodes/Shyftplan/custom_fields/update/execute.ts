import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function putApiV1CustomFieldsIdUpdateExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	const credentials = await node.getCredentials('shyftplanApi');
	let responseData;
	const id = node.getNodeParameter('id', i) as number;
	const name = node.getNodeParameter('name', i) as string;
	const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
	let data: IDataObject = {
		id,
		name,
	};

	// put it  all inputs together
	Object.assign(data, additionalFields);
	Object.assign(data, credentials);

	// construct request
	const myOptions: IHttpRequestOptions = {
		url: credentials.domain + '/api' + '/v1' + '/custom_fields' + '/' + id,
		method: 'PUT',
		body: data,
		arrayFormat: 'repeat',
	};

	responseData = await node.helpers.httpRequest(myOptions);
	return responseData;
}
