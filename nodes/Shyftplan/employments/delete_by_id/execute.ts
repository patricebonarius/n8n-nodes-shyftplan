import { ICredentialData, IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function apiEmploymentsDeleteByID(
	this: IExecuteFunctions,
	company_id: number,
	employment_id: number,
	credentials: {},
) {
	let responseData;
	const data: IDataObject = {
		company_id,
		employment_id,
	};
	const options: IHttpRequestOptions = {
		url: credentials.domain + '/api/v2/employments/' + employment_id,
		method: 'DELETE',
		body: Object.assign(data, credentials),
	};
	responseData = await this.helpers.httpRequest(options);

	return responseData;
}
