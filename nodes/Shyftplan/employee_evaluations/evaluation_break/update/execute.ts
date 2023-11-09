import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function putApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreakEvaluationBreakIdUpdateExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	const credentials = await node.getCredentials('shyftplanApi');
	let responseData;
	const company_id = node.getNodeParameter('company_id', i) as number;
	const starts_at = node.getNodeParameter('starts_at', i) as string;
	const ends_at = node.getNodeParameter('ends_at', i) as string;
	const staff_shift_id = node.getNodeParameter('staff_shift_id', i) as number;
	const evaluation_break_id = node.getNodeParameter('evaluation_break_id', i) as number;
	const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
	let data: IDataObject = {
		company_id,
		starts_at,
		ends_at,
		staff_shift_id,
		evaluation_break_id,
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
			staff_shift_id +
			'/evaluation_break' +
			'/' +
			evaluation_break_id,
		method: 'PUT',
		body: data,
		arrayFormat: 'repeat',
	};

	responseData = await node.helpers.httpRequest(myOptions);
	return responseData;
}
