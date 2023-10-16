import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function absencesExecute(node: IExecuteFunctions, operation: string, i: number) {
	const credentials = await node.getCredentials('shyftplanApi');
	let responseData;

	// getAll
	if (operation === 'absences_getAll') {
		// Get required / shown inputs
		const company_id = node.getNodeParameter('company_id', i) as number;
		const page = node.getNodeParameter('page', i) as number;
		const per_page = node.getNodeParameter('per_page', i) as number;
		const created_after = node.getNodeParameter('created_after', i) as string;
		const employment_id = node.getNodeParameter('employment_id', i) as number;

		// Get additional fields input
		const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
		const data: IDataObject = {
			company_id,
			page,
			per_page,
			created_after,
			employment_id,
		};
		// put it  all inputs together
		Object.assign(data, additionalFields);
		Object.assign(data, credentials);

		const header = {
			'content-type': 'x-www-form-urlencoded',
		};

		// construct request
		const myOptions: IHttpRequestOptions = {
			url: credentials.domain + '/api/v1/absences',
			method: 'GET',
			headers: header,
			qs: data,
		};
		console.log(myOptions);
		responseData = await node.helpers.httpRequest(myOptions);
		console.log('response data: ', responseData);
		return responseData;
	}

	// create
	if (operation === 'absences_create') {
		// Get required inputs
		const company_id = node.getNodeParameter('company_id', i) as number;
		const starts_at = node.getNodeParameter('starts_at', i) as string;
		const ends_at = node.getNodeParameter('ends_at', i) as string;
		const employment_id = node.getNodeParameter('employment_id', i) as number;
		const absence_reason_id = node.getNodeParameter('absence_reason_id', i) as number;
		const days = node.getNodeParameter('days', i) as number;
		const paid = node.getNodeParameter('paid', i) as number;
		// Get additional fields input
		const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;

		const data: IDataObject = {
			company_id,
			starts_at,
			ends_at,
			employment_id,
			absence_reason_id,
			days,
			paid,
		};
		// put it  all inputs together
		Object.assign(data, additionalFields);
		Object.assign(data, credentials);

		// construct request
		const myOptions: IHttpRequestOptions = {
			url: credentials.domain + '/api/v1/absences',
			method: 'POST',
			body: data,
		};

		responseData = await node.helpers.httpRequest(myOptions);
		return responseData;
	}
}
