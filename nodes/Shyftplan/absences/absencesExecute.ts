import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function employmentsExecute(node: IExecuteFunctions, operation: string, i: number) {
	const credentials = await node.getCredentials('shyftplanApi');
	let responseData;

	// create
	if (operation === 'absencens_create') {
		// Get required inputs
		const company_id = node.getNodeParameter('company_id', i) as number;
		const starts_at = node.getNodeParameter('starts_at', i) as string;
		const ends_at = node.getNodeParameter('ends_at', i) as string;
		const employment_id = node.getNodeParameter('employment_id', i) as number;
		const absence_reason_id = node.getNodeParameter('absence_reason_id', i) as number;
		const days = node.getNodeParameter('days', i) as number;
		const paid = node.getNodeParameter('paid', i) as number;

		console.log('params: ', company_id, starts_at, ends_at);
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
		// add credentials
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
