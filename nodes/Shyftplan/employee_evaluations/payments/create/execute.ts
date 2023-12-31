import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function postApiV1EmployeeEvaluationsStaffShiftIdPaymentsCreateExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	const credentials = await node.getCredentials('shyftplanApi');
	let responseData;
	const value = node.getNodeParameter('value', i) as number;
	const company_id = node.getNodeParameter('company_id', i) as number;
	const paygrade_type_id = node.getNodeParameter('paygrade_type_id', i) as number;
	const staff_shift_id = node.getNodeParameter('staff_shift_id', i) as number;
	const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
	let data: IDataObject = {
		value,
		company_id,
		paygrade_type_id,
		staff_shift_id,
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
			'/payments',
		method: 'POST',
		body: data,
		arrayFormat: 'repeat',
	};

	responseData = await node.helpers.httpRequest(myOptions);
	return responseData;
}
