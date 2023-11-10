import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function postApiV1ShiftplansIdAssignRotationCreateExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	const credentials = await node.getCredentials('shyftplanApi');
	let responseData;
	const company_id = node.getNodeParameter('company_id', i) as number;
	const shift_rotation_id = node.getNodeParameter('shift_rotation_id', i) as number;
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
		shift_rotation_id,
		workers_per_positions_listSTARTENDSTARTidEND,
		workers_per_positions_listSTARTENDSTARTworkersEND,
		id,
	};

	// put it  all inputs together
	Object.assign(data, additionalFields);
	Object.assign(data, credentials);

	// construct request
	const myOptions: IHttpRequestOptions = {
		url: credentials.domain + '/api' + '/v1' + '/shiftplans' + '/' + id + '/assign_rotation',
		method: 'POST',
		body: data,
		arrayFormat: 'repeat',
	};

	responseData = await node.helpers.httpRequest(myOptions);
	return responseData;
}
