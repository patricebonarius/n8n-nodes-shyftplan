import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function postApiV1AbsencesCreateExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	const credentials = await node.getCredentials('shyftplanApi');
	let responseData;
	const starts_at = node.getNodeParameter('starts_at', i) as string;
	const ends_at = node.getNodeParameter('ends_at', i) as string;
	const employment_id = node.getNodeParameter('employment_id', i) as number;
	const absence_reason_id = node.getNodeParameter('absence_reason_id', i) as number;
	const days = node.getNodeParameter('days', i) as number;
	const paid = node.getNodeParameter('paid', i) as boolean;
	const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;

	let data: IDataObject = {
		starts_at,
		ends_at,
		employment_id,
		absence_reason_id,
		days,
		paid,
	};

	// put it  all inputs together
	Object.assign(data, additionalFields);
	Object.assign(data, credentials);

	// split out the file data to use it in qs doesnt work
	/* let theFile: IDataObject = {};
	if (data.file) {
		theFile = data.file as IDataObject;
		delete data.file;
	} */

	const header = {
		// 'content-type': 'multipart/form-data',
		'content-type': 'application/json',
	};

	// console.log('data from absences create: ', data);

	// construct request
	const myOptions: IHttpRequestOptions = {
		// if you use webhook disable credentials :-)
		// url: 'https://webhook.site/05bd6f56-5431-4269-abf0-efd23d473d18',
		url: credentials.domain + '/api' + '/v1' + '/absences',
		method: 'POST',
		body: data,
		arrayFormat: 'repeat',
		headers: header,
		//json: true,
		//qs: data,
	};

	responseData = await node.helpers.httpRequest(myOptions);
	return responseData;
}
