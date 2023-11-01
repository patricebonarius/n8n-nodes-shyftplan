import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function postApiV1ShiftsCreateExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	const credentials = await node.getCredentials('shyftplanApi');
	let responseData;
	const starts_at = node.getNodeParameter('starts_at', i) as string;
	const ends_at = node.getNodeParameter('ends_at', i) as string;
	const workers = node.getNodeParameter('workers', i) as number;
	const shiftplan_id = node.getNodeParameter('shiftplan_id', i) as number;
	const locations_position_id = node.getNodeParameter('locations_position_id', i) as number;
	const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
	const data: IDataObject = {
		starts_at,
		ends_at,
		workers,
		shiftplan_id,
		locations_position_id,
	};

	// put it  all inputs together
	Object.assign(data, additionalFields);
	Object.assign(data, credentials);

	// construct request
	const myOptions: IHttpRequestOptions = {
		url: credentials.domain + '/api/v1/shifts',
		method: 'POST',
		body: data,
	};

	responseData = await node.helpers.httpRequest(myOptions);
	return responseData;
}
