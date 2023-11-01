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
	const workers_per_positions_list_id = node.getNodeParameter(
		'workers_per_positions_list[][id]',
		i,
	) as string;
	const workers_per_positions_list_workers = node.getNodeParameter(
		'workers_per_positions_list[][workers]',
		i,
	) as string;
	const id = node.getNodeParameter('id', i) as number;
	const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
	const data: IDataObject = {
		company_id,
		shift_rotation_id,
		workers_per_positions_list_id,
		workers_per_positions_list_workers,
		id,
	};

	// put it  all inputs together
	Object.assign(data, additionalFields);
	Object.assign(data, credentials);

	// construct request
	const myOptions: IHttpRequestOptions = {
		url: credentials.domain + '/api/v1/' + 'shiftplans/' + shift_rotation_id,
		method: 'POST',
		body: data,
	};

	responseData = await node.helpers.httpRequest(myOptions);
	return responseData;
}
