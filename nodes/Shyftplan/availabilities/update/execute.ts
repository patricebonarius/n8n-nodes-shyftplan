import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';
    
        export async function putApiV1AvailabilitiesAvailabilityIdUpdateExecute(node: IExecuteFunctions, operation: string, i: number) {
            const credentials = await node.getCredentials('shyftplanApi');
            let responseData;
        const availability_id = node.getNodeParameter('availability_id', i) as number;
const starts_at = node.getNodeParameter('starts_at', i) as string;
const ends_at = node.getNodeParameter('ends_at', i) as string;
const override = node.getNodeParameter('override', i) as boolean;
const available = node.getNodeParameter('available', i) as boolean;
const update_all = node.getNodeParameter('update_all', i) as boolean;
const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
let data: IDataObject = {
availability_id,
starts_at,
ends_at,
override,
available,
update_all,
};

        // put it  all inputs together
        Object.assign(data, additionalFields);
        Object.assign(data, credentials);

        // construct request
        const myOptions: IHttpRequestOptions = {
            url: credentials.domain + "/api"+ "/v1"+ "/availabilities"+ "/" +availability_id,
            method: 'PUT',
            body: data,
            arrayFormat: 'repeat',
        };
        
        responseData = await node.helpers.httpRequest(myOptions);
        return responseData;
        }