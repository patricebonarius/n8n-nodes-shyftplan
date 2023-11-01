import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function postApiV1ShiftplansShiftplanIdCopyToExistingCreateExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	const credentials = await node.getCredentials('shyftplanApi');
	let responseData;
	const company_id = node.getNodeParameter('company_id', i) as number;
	const existing_shiftplan_id = node.getNodeParameter('existing_shiftplan_id', i) as number;
	const starts_at = node.getNodeParameter('starts_at', i) as string;
	const ends_at = node.getNodeParameter('ends_at', i) as string;
	const copy_employees = node.getNodeParameter('copy_employees', i) as boolean;
	const without_conflicts = node.getNodeParameter('without_conflicts', i) as boolean;
	const copy_full_shiftplan = node.getNodeParameter('copy_full_shiftplan', i) as boolean;
	const shiftplan_id = node.getNodeParameter('shiftplan_id', i) as number;
	const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
	const data: IDataObject = {
		company_id,
		existing_shiftplan_id,
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
		url: credentials.domain + '/api/v1/' + 'shiftplans/' + existing_shiftplan_id,
		method: 'POST',
		body: data,
	};

	responseData = await node.helpers.httpRequest(myOptions);
	return responseData;
}
