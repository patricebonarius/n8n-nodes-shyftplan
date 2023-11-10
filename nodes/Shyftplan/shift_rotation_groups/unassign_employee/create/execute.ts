import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function postApiV1ShiftRotationGroupsIdUnassignEmployeeCreateExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	const credentials = await node.getCredentials('shyftplanApi');
	let responseData;
	const company_id = node.getNodeParameter('company_id', i) as number;
	const id = node.getNodeParameter('id', i) as string;
	const employment_id = node.getNodeParameter('employment_id', i) as number;
	const locations_position_id = node.getNodeParameter('locations_position_id', i) as number;
	const shiftplan_id = node.getNodeParameter('shiftplan_id', i) as number;
	const start_date = node.getNodeParameter('start_date', i) as string;
	const end_date = node.getNodeParameter('end_date', i) as string;
	const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
	let data: IDataObject = {
		company_id,
		id,
		employment_id,
		locations_position_id,
		shiftplan_id,
		start_date,
		end_date,
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
			'/shift_rotation_groups' +
			'/' +
			id +
			'/unassign_employee',
		method: 'POST',
		body: data,
		arrayFormat: 'repeat',
	};

	responseData = await node.helpers.httpRequest(myOptions);
	return responseData;
}
