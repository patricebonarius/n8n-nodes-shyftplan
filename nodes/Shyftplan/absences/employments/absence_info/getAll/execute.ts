import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';
    
        export async function getApiV1AbsencesEmploymentsIdAbsenceInfoGetAllExecute(node: IExecuteFunctions, operation: string, i: number) {
            const credentials = await node.getCredentials('shyftplanApi');
            let responseData;
        const id = node.getNodeParameter('id', i) as number;
const starts_at = node.getNodeParameter('starts_at', i) as string;
const ends_at = node.getNodeParameter('ends_at', i) as string;
const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
const data: IDataObject = {
id,
starts_at,
ends_at,
};

        // put it  all inputs together
        Object.assign(data, additionalFields);
        Object.assign(data, credentials);
    
        const header = {
            'content-type': 'x-www-form-urlencoded',
        };
    
        // construct request
        const myOptions: IHttpRequestOptions = {
            url: credentials.domain + "/api"+ "/v1"+ "/absences"+ "/employments"+ "/" +id+ "/absence_info",
            method: 'GET',
            headers: header,
            qs: data,
        };
        
        responseData = await node.helpers.httpRequest(myOptions);
        return responseData;
        }