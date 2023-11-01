import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function postApiV1EmploymentsIdUiSettingsCreateExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	const credentials = await node.getCredentials('shyftplanApi');
	let responseData;
	const company_id = node.getNodeParameter('company_id', i) as number;
	const setting = node.getNodeParameter('setting', i) as JSON;
	const id = node.getNodeParameter('id', i) as number;
	const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
	const data: IDataObject = {
		company_id,
		setting,
		id,
	};

	// put it  all inputs together
	Object.assign(data, additionalFields);
	Object.assign(data, credentials);

	// construct request
	const myOptions: IHttpRequestOptions = {
		url: credentials.domain + '/api/v1/' + 'employments/' + id,
		method: 'POST',
		body: data,
	};

	responseData = await node.helpers.httpRequest(myOptions);
	return responseData;
}
