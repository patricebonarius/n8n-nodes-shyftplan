import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';
    
        export async function getApiV1AvailabilitiesExceptionsExceptionIdGetExecute(node: IExecuteFunctions, operation: string, i: number) {
            const credentials = await node.getCredentials('shyftplanApi');
            let responseData;
        const exception_id = node.getNodeParameter('exception_id', i) as number;
const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
const data: IDataObject = {
exception_id,
};

        // put it  all inputs together
        Object.assign(data, additionalFields);
        Object.assign(data, credentials);
    
        const header = {
            'content-type': 'x-www-form-urlencoded',
        };
    
        // construct request
        const myOptions: IHttpRequestOptions = {
            url: credentials.domain + "/api"+ "/v1"+ "/availabilities"+ "/exceptions"+ "/" +exception_id,
            method: 'GET',
            headers: header,
            qs: data,
        };
        
        responseData = await node.helpers.httpRequest(myOptions);
        return responseData;
        }