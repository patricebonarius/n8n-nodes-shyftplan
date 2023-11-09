import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';
    
        export async function postApiV1AssignmentGroupsCreateExecute(node: IExecuteFunctions, operation: string, i: number) {
            const credentials = await node.getCredentials('shyftplanApi');
            let responseData;
        const shiftplan_id = node.getNodeParameter('shiftplan_id', i) as string;
const company_id = node.getNodeParameter('company_id', i) as number;
const name = node.getNodeParameter('name', i) as string;
const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
let data: IDataObject = {
shiftplan_id,
company_id,
name,
};

        // put it  all inputs together
        Object.assign(data, additionalFields);
        Object.assign(data, credentials);

        // construct request
        const myOptions: IHttpRequestOptions = {
            url: credentials.domain + "/api"+ "/v1"+ "/assignment_groups",
            method: 'POST',
            body: data,
            arrayFormat: 'repeat',
        };
        
        responseData = await node.helpers.httpRequest(myOptions);
        return responseData;
        }