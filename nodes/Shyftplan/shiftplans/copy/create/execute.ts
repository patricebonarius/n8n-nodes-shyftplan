import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function postApiV1ShiftplansShiftplanIdCopyCreateExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	const credentials = await node.getCredentials('shyftplanApi');
	let responseData;
	const company_id = node.getNodeParameter('company_id', i) as number;
	const name = node.getNodeParameter('name', i) as string;
	const starts_at = node.getNodeParameter('starts_at', i) as string;
	const ends_at = node.getNodeParameter('ends_at', i) as string;
	const copy_employees = node.getNodeParameter('copy_employees', i) as boolean;
	const without_conflicts = node.getNodeParameter('without_conflicts', i) as boolean;
	const copy_full_shiftplan = node.getNodeParameter('copy_full_shiftplan', i) as boolean;
	const shiftplan_id = node.getNodeParameter('shiftplan_id', i) as number;
	const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
	let data: IDataObject = {
		company_id,
		name,
		starts_at,
		ends_at,
		copy_employees,
		without_conflicts,
		copy_full_shiftplan,
		shiftplan_id,
	};

	// put it  all inputs together
	Object.assign(data, additionalFields);
	Object.assign(data, credentials);

	// construct request
	const myOptions: IHttpRequestOptions = {
		url: credentials.domain + '/api' + '/v1' + '/shiftplans' + '/' + shiftplan_id + '/copy',
		method: 'POST',
		body: data,
		arrayFormat: 'repeat',
	};

	responseData = await node.helpers.httpRequest(myOptions);
	return responseData;
}
