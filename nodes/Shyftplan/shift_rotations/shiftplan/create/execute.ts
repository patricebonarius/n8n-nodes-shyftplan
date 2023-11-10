import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function postApiV1ShiftRotationsIdShiftplanCreateExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	const credentials = await node.getCredentials('shyftplanApi');
	let responseData;
	const company_id = node.getNodeParameter('company_id', i) as number;
	const location_id = node.getNodeParameter('location_id', i) as number;
	const name = node.getNodeParameter('name', i) as string;
	const starts_at = node.getNodeParameter('starts_at', i) as string;
	const ends_at = node.getNodeParameter('ends_at', i) as string;
	const workers_per_positions_listSTARTENDSTARTidEND = node.getNodeParameter(
		'workers_per_positions_listSTARTENDSTARTidEND',
		i,
	) as JSON;
	const workers_per_positions_listSTARTENDSTARTworkersEND = node.getNodeParameter(
		'workers_per_positions_listSTARTENDSTARTworkersEND',
		i,
	) as JSON;
	const id = node.getNodeParameter('id', i) as number;
	const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
	let data: IDataObject = {
		company_id,
		location_id,
		name,
		starts_at,
		ends_at,
		workers_per_positions_listSTARTENDSTARTidEND,
		workers_per_positions_listSTARTENDSTARTworkersEND,
		id,
	};

	// put it  all inputs together
	Object.assign(data, additionalFields);
	Object.assign(data, credentials);

	// construct request
	const myOptions: IHttpRequestOptions = {
		url: credentials.domain + '/api' + '/v1' + '/shift_rotations' + '/' + id + '/shiftplan',
		method: 'POST',
		body: data,
		arrayFormat: 'repeat',
	};

	responseData = await node.helpers.httpRequest(myOptions);
	return responseData;
}
