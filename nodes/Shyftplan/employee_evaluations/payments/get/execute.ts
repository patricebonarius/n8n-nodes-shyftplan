import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function getApiV1EmployeeEvaluationsStaffShiftIdPaymentsPaymentIdGetExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	const credentials = await node.getCredentials('shyftplanApi');
	let responseData;
	const company_id = node.getNodeParameter('company_id', i) as number;
	const staff_shift_id = node.getNodeParameter('staff_shift_id', i) as number;
	const payment_id = node.getNodeParameter('payment_id', i) as number;
	const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
	let data: IDataObject = {
		company_id,
		staff_shift_id,
		payment_id,
	};

	// put it  all inputs together
	Object.assign(data, additionalFields);
	Object.assign(data, credentials);

	let dataKeys = Object.keys(data);
	dataKeys.forEach((key) => {
		if (key.includes('START')) {
			// switch that part if value is not of type number
			let currentValue = data[key];
			let newKey = key.replace(/(START)/g, '[');
			newKey = newKey.replace(/(END)/g, ']');
			data = { ...data, [newKey]: currentValue };
			delete data[key];
		}
	});

	const header = {
		'content-type': 'x-www-form-urlencoded',
	};

	// construct request
	const myOptions: IHttpRequestOptions = {
		url:
			credentials.domain +
			'/api' +
			'/v1' +
			'/employee_evaluations' +
			'/' +
			staff_shift_id +
			'/payments' +
			'/' +
			payment_id,
		method: 'GET',
		headers: header,
		qs: data,
		arrayFormat: 'repeat',
	};

	responseData = await node.helpers.httpRequest(myOptions);
	return responseData;
}
