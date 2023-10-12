//import { IExecuteFunctions } from 'n8n-workflow';
/*
export async function apiRequest(
	this: IExecuteFunctions,
	apiVersion: string,
	method: string,
	endpoint: string,
	body = {},
	query = {},
) {
	const credentials = await this.getCredentials('shyftplanApi');
	const baseUrl = credentials.domain;
	const options = {
		method,
		body,
		qs: query,
		url: `${baseUrl}/api/${apiVersion}/${endpoint}`,
	};
	//skipSslCertificateValidation: credentials.allowUnauthorizedCerts,
	return this.helpers.httpRequest(options);
} */

/*
export async function apiRequestAllItems(method: string, endpoint: string, body = {}, query = {}) {
    const returnData = [];
    let responseData;
    query.page = 0;
    query.per_page = 100;
    do {
        responseData = await apiRequest.call(this, method, endpoint, body, query);
        query.page++;
        returnData.push.apply(returnData, responseData);
    } while (responseData.length !== 0);
    return returnData;
}

 */
