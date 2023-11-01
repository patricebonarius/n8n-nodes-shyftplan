import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function postApiV1StaffShiftsReplaceCreateExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	const credentials = await node.getCredentials('shyftplanApi');
	let responseData;
	const shift_id = node.getNodeParameter('shift_id', i) as number;
	const employment_id = node.getNodeParameter('employment_id', i) as number;
	const source_employment_id = node.getNodeParameter('source_employment_id', i) as number;
	const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
	const data: IDataObject = {
		shift_id,
		employment_id,
		source_employment_id,
	};

	// put it  all inputs together
	Object.assign(data, additionalFields);
	Object.assign(data, credentials);

	// construct request
	const myOptions: IHttpRequestOptions = {
		url: credentials.domain + '/api/v1/staff_shifts/replace',
		method: 'POST',
		body: data,
	};

	responseData = await node.helpers.httpRequest(myOptions);
	return responseData;
}
