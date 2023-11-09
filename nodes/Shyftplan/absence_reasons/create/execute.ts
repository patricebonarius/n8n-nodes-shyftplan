import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function postApiV1AbsenceReasonsCreateExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	const credentials = await node.getCredentials('shyftplanApi');
	let responseData;
	const company_id = node.getNodeParameter('company_id', i) as number;
	const name = node.getNodeParameter('name', i) as string;
	const days = node.getNodeParameter('days', i) as number;
	const calculation_type = node.getNodeParameter('calculation_type', i) as string;
	const hours_calculation_type = node.getNodeParameter('hours_calculation_type', i) as string;
	const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
	let data: IDataObject = {
		company_id,
		name,
		days,
		calculation_type,
		hours_calculation_type,
	};

	// put it  all inputs together
	Object.assign(data, additionalFields);
	Object.assign(data, credentials);

	// construct request
	const myOptions: IHttpRequestOptions = {
		url: credentials.domain + '/api' + '/v1' + '/absence_reasons',
		method: 'POST',
		body: data,
		arrayFormat: 'repeat',
	};

	responseData = await node.helpers.httpRequest(myOptions);
	return responseData;
}
