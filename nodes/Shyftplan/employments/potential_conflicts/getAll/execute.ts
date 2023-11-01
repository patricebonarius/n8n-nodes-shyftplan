import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function getApiV1EmploymentsPotentialConflictsGetAllExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	const credentials = await node.getCredentials('shyftplanApi');
	let responseData;
	const conflicts = node.getNodeParameter('conflicts', i) as Object;
	const shift_preset_id_per_employment_employment_ids = node.getNodeParameter(
		'shift_preset_id_per_employment[][employment_ids][]',
		i,
	) as string;
	const date = node.getNodeParameter('date', i) as string;
	const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
	const data: IDataObject = {
		conflicts,
		shift_preset_id_per_employment_employment_ids,
		date,
	};

	// put it  all inputs together
	Object.assign(data, additionalFields);
	Object.assign(data, credentials);

	const header = {
		'content-type': 'x-www-form-urlencoded',
	};

	// construct request
	const myOptions: IHttpRequestOptions = {
		url: '' + credentials.domain + '/api/v1/employments/potential_conflicts',
		method: 'GET',
		headers: header,
		qs: data,
	};

	responseData = await node.helpers.httpRequest(myOptions);
	return responseData;
}
