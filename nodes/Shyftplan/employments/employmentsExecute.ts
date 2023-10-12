import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function employmentsExecute(node: IExecuteFunctions, operation: string, i: number) {
	const credentials = await node.getCredentials('shyftplanApi');
	let responseData;

	// create
	if (operation === 'employments_create') {
		// Get inputs
		const company_id = node.getNodeParameter('company_id', i) as number;
		const first_name = node.getNodeParameter('first_name', i) as string;
		const last_name = node.getNodeParameter('last_name', i) as string;
		console.log('params: ', company_id, first_name, last_name);
		// Get additional fields input
		const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
		const data: IDataObject = {
			company_id,
			first_name,
			last_name,
		};
		// put it  all inputs together
		Object.assign(data, additionalFields);
		// add credentials
		Object.assign(data, credentials);

		// construct request
		const myOptions: IHttpRequestOptions = {
			url: credentials.domain + '/api/v2/employments',
			method: 'PUT',
			body: data,
		};

		responseData = await node.helpers.httpRequest(myOptions);
		return responseData;
	}

	// delete
	if (operation === 'employments_delete_by_id') {
		// Get inputs
		const company_id = node.getNodeParameter('company_id', i) as number;
		const employment_id = node.getNodeParameter('employment_id', i) as string;

		const data: IDataObject = {
			company_id,
			employment_id,
		};

		const options: IHttpRequestOptions = {
			url: credentials.domain + '/api/v2/employments/' + employment_id,
			method: 'DELETE',
			body: Object.assign(data, credentials),
		};

		responseData = await node.helpers.httpRequest(options);
		return responseData;
	}
}
