import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function getApiV1EmploymentsPotentialConflictsGetAllExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	const credentials = await node.getCredentials('shyftplanApi');
	let responseData;
	const conflicts = node.getNodeParameter('conflicts', i) as JSON;
	const shift_preset_id_per_employmentSTARTENDSTARTemployment_idsENDSTARTEND =
		node.getNodeParameter(
			'shift_preset_id_per_employmentSTARTENDSTARTemployment_idsENDSTARTEND',
			i,
		) as JSON;
	const date = node.getNodeParameter('date', i) as string;
	const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
	let data: IDataObject = {
		conflicts,
		shift_preset_id_per_employmentSTARTENDSTARTemployment_idsENDSTARTEND,
		date,
	};

	// put it  all inputs together
	Object.assign(data, additionalFields);
	Object.assign(data, credentials);

	let dataKeys = Object.keys(data);
	dataKeys.forEach((key) => {
		if (key.includes('START')) {
			// switch that part if value is not of type number
			let currentValue = data[key];
			let newKey = key.replace(/(START)/g, '[');
			newKey = newKey.replace(/(END)/g, ']');
			data = { ...data, [newKey]: currentValue };
			delete data[key];
		}
	});

	const header = {
		'content-type': 'x-www-form-urlencoded',
	};

	// construct request
	const myOptions: IHttpRequestOptions = {
		url: credentials.domain + '/api' + '/v1' + '/employments' + '/potential_conflicts',
		method: 'GET',
		headers: header,
		qs: data,
		arrayFormat: 'repeat',
	};

	responseData = await node.helpers.httpRequest(myOptions);
	return responseData;
}
