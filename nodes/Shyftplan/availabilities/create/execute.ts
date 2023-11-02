import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function postApiV1AvailabilitiesCreateExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	const credentials = await node.getCredentials('shyftplanApi');
	let responseData;
	const starts_at = node.getNodeParameter('starts_at', i) as string;
	const ends_at = node.getNodeParameter('ends_at', i) as string;
	const override = node.getNodeParameter('override', i) as boolean;
	const available = node.getNodeParameter('available', i) as boolean;
	const employment_id = node.getNodeParameter('employment_id', i) as number;
	const repeat = node.getNodeParameter('repeat', i) as boolean;
	const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
	const data: IDataObject = {
		starts_at,
		ends_at,
		override,
		available,
		employment_id,
		repeat,
	};

	// put it  all inputs together
	Object.assign(data, additionalFields);
	Object.assign(data, credentials);

	// construct request
	const myOptions: IHttpRequestOptions = {
		url: credentials.domain + '/api' + '/v1' + '/availabilities',
		method: 'POST',
		body: data,
	};

	responseData = await node.helpers.httpRequest(myOptions);
	return responseData;
}
