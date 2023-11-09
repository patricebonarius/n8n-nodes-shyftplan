import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function postApiV1IndividualRotationsCreateExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	const credentials = await node.getCredentials('shyftplanApi');
	let responseData;
	const company_id = node.getNodeParameter('company_id', i) as number;
	const employment_id = node.getNodeParameter('employment_id', i) as number;
	const anchor_date = node.getNodeParameter('anchor_date', i) as string;
	const rotation_interval = node.getNodeParameter('rotation_interval', i) as number;
	const shift_preset_idsSTARTEND = node.getNodeParameter('shift_preset_idsSTARTEND', i) as JSON;
	const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
	let data: IDataObject = {
		company_id,
		employment_id,
		anchor_date,
		rotation_interval,
		shift_preset_idsSTARTEND,
	};

	// put it  all inputs together
	Object.assign(data, additionalFields);
	Object.assign(data, credentials);

	// construct request
	const myOptions: IHttpRequestOptions = {
		url: credentials.domain + '/api' + '/v1' + '/individual_rotations',
		method: 'POST',
		body: data,
		arrayFormat: 'repeat',
	};

	responseData = await node.helpers.httpRequest(myOptions);
	return responseData;
}
