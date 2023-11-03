import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function deleteApiV1EmployeeEvaluationsEvaluationIdTagsEvaluationTagIdDeleteExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	const credentials = await node.getCredentials('shyftplanApi');
	let responseData;
	const company_id = node.getNodeParameter('company_id', i) as number;
	const evaluation_id = node.getNodeParameter('evaluation_id', i) as number;
	const evaluation_tag_id = node.getNodeParameter('evaluation_tag_id', i) as number;
	const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
	const data: IDataObject = {
		company_id,
		evaluation_id,
		evaluation_tag_id,
	};

	// put it  all inputs together
	Object.assign(data, additionalFields);
	Object.assign(data, credentials);

	// construct request
	const myOptions: IHttpRequestOptions = {
		url:
			credentials.domain +
			'/api' +
			'/v1' +
			'/employee_evaluations' +
			'/' +
			evaluation_id +
			'/tags' +
			'/' +
			evaluation_tag_id,
		method: 'DELETE',
		body: data,
	};

	responseData = await node.helpers.httpRequest(myOptions);
	return responseData;
}
