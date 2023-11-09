import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function putApiV2AbsenceEntitlementsUpdateExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	const credentials = await node.getCredentials('shyftplanApi');
	let responseData;
	const company_id = node.getNodeParameter('company_id', i) as number;
	const employment_id = node.getNodeParameter('employment_id', i) as number;
	const absence_reason_id = node.getNodeParameter('absence_reason_id', i) as number;
	const days = node.getNodeParameter('days', i) as number;
	const year = node.getNodeParameter('year', i) as number;
	const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
	let data: IDataObject = {
		company_id,
		employment_id,
		absence_reason_id,
		days,
		year,
	};

	// put it  all inputs together
	Object.assign(data, additionalFields);
	Object.assign(data, credentials);

	// construct request
	const myOptions: IHttpRequestOptions = {
		url: credentials.domain + '/api' + '/v2' + '/absence_entitlements',
		method: 'PUT',
		body: data,
		arrayFormat: 'repeat',
	};

	responseData = await node.helpers.httpRequest(myOptions);
	return responseData;
}
