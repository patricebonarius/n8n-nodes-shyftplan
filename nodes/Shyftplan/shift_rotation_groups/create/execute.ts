import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function postApiV1ShiftRotationGroupsCreateExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	const credentials = await node.getCredentials('shyftplanApi');
	let responseData;
	const shift_rotation_id = node.getNodeParameter('shift_rotation_id', i) as number;
	const name = node.getNodeParameter('name', i) as string;
	const shift_preset_idsSTARTEND = node.getNodeParameter('shift_preset_idsSTARTEND', i) as JSON;
	const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
	let data: IDataObject = {
		shift_rotation_id,
		name,
		shift_preset_idsSTARTEND,
	};

	// put it  all inputs together
	Object.assign(data, additionalFields);
	Object.assign(data, credentials);

	// construct request
	const myOptions: IHttpRequestOptions = {
		url: credentials.domain + '/api' + '/v1' + '/shift_rotation_groups',
		method: 'POST',
		body: data,
		arrayFormat: 'repeat',
	};

	responseData = await node.helpers.httpRequest(myOptions);
	return responseData;
}
