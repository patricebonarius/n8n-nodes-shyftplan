//import { urlencoded } from 'express';
import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function employmentsExecute(node: IExecuteFunctions, operation: string, i: number) {
	const credentials = await node.getCredentials('shyftplanApi');
	let responseData;

	// create
	if (operation === 'employments_create') {
		// Get inputs
		const company_id = node.getNodeParameter('company_id', i) as number;
		const first_name = node.getNodeParameter('first_name', i) as string;
		const last_name = node.getNodeParameter('last_name', i) as string;
		console.log('params: ', company_id, first_name, last_name, credentials);
		// Get additional fields input
		const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
		const data: IDataObject = {
			company_id,
			first_name,
			last_name,
		};
		// put it  all inputs together
		Object.assign(data, additionalFields);
		// add credentials
		Object.assign(data, credentials);

		// construct request
		const myOptions: IHttpRequestOptions = {
			url: credentials.domain + '/api/v2/employments',
			method: 'POST',
			body: data,
		};

		responseData = await node.helpers.httpRequest(myOptions);
		return responseData;
	}

	// delete
	if (operation === 'employments_delete_by_id') {
		const company_id = node.getNodeParameter('company_id', i) as number;
		const employment_id = node.getNodeParameter('employment_id', i) as string;

		const data: IDataObject = {
			company_id,
			employment_id,
		};

		const options: IHttpRequestOptions = {
			url: credentials.domain + '/api/v2/employments/' + employment_id,
			method: 'DELETE',
			body: Object.assign(data, credentials),
		};

		responseData = await node.helpers.httpRequest(options);
		return responseData;
	}

	if (operation === 'employments_getAll') {
		// Get inputs
		const company_id = node.getNodeParameter('company_id', i) as number;
		const page = node.getNodeParameter('page', i) as number;
		const per_page = node.getNodeParameter('per_page', i) as number;
		const created_after = node.getNodeParameter('created_after', i) as string;
		const search = node.getNodeParameter('search', i) as string;
		const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;

		const data: IDataObject = {
			company_id,
			page,
			per_page,
			created_after,
			search,
		};
		Object.assign(data, additionalFields);
		Object.assign(data, credentials);

		const headers: IDataObject = {
			// prettier-ignore
			'content-type': 'application/x-www-form-urlencoded',
		};
		// version 1 using querystrings in url
		/* const createHeaders = (obj: Object) => {
			let outputStr = '';
			for (const [key, value] of Object.entries(obj)) {
				outputStr += `${key}=${value}&`;
			}
			console.log(outputStr);
			return new URLSearchParams(outputStr);
		}; */

		/* const options: IHttpRequestOptions = {
			url: credentials.domain + '/api/v1/employments?' + createHeaders(data),
			method: 'GET',
			headers: headers,
		};
		console.log(options);
 */

		// version 2 using urlSearchParams in qs body
		/*
		const createBody = (obj: Object) => {
			let searchParams = new URLSearchParams();
			for (const [key, value] of Object.entries(data)) {
				const str = '' + value;
				//let encodedKey = encodeURIComponent(key);
				//let encodedValue = encodeURIComponent(str);
				searchParams.append(key, str);
			}
			return searchParams;
		};

		const body = createBody(data);
		console.log(body);

		const options: IHttpRequestOptions = {
			url: credentials.domain + '/api/v1/employments',
			method: 'GET',
			headers: headers,
			body: body,
		}; */

		// version 3 using urlSearchParams in qs body

		const options: IHttpRequestOptions = {
			url: credentials.domain + '/api/v1/employments',
			method: 'GET',
			headers: headers,
			qs: data,
		};

		responseData = await node.helpers.httpRequest(options);
		return responseData;
	}
}
