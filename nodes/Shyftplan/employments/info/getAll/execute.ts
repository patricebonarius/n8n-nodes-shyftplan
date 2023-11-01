import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function getApiV1EmploymentsInfoGetAllExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	const credentials = await node.getCredentials('shyftplanApi');
	let responseData;
	const company_id = node.getNodeParameter('company_id', i) as number;
	const filters_start_date = node.getNodeParameter('filters[start_date]', i) as string;
	const filters_end_date = node.getNodeParameter('filters[end_date]', i) as string;
	const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
	const data: IDataObject = {
		company_id,
		filters_start_date,
		filters_end_date,
	};

	// put it  all inputs together
	Object.assign(data, additionalFields);
	Object.assign(data, credentials);

	const header = {
		'content-type': 'x-www-form-urlencoded',
	};

	// construct request
	const myOptions: IHttpRequestOptions = {
		url: '' + credentials.domain + '/api/v1/employments/info',
		method: 'GET',
		headers: header,
		qs: data,
	};

	responseData = await node.helpers.httpRequest(myOptions);
	return responseData;
}
