import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';
    
        export async function postApiV1AssignmentGroupsIdAssignEmploymentCreateExecute(node: IExecuteFunctions, operation: string, i: number) {
            const credentials = await node.getCredentials('shyftplanApi');
            let responseData;
        const company_id = node.getNodeParameter('company_id', i) as string;
const start_date = node.getNodeParameter('start_date', i) as string;
const end_date = node.getNodeParameter('end_date', i) as string;
const id = node.getNodeParameter('id', i) as string;
const employment_id = node.getNodeParameter('employment_id', i) as string;
const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
let data: IDataObject = {
company_id,
start_date,
end_date,
id,
employment_id,
};

        // put it  all inputs together
        Object.assign(data, additionalFields);
        Object.assign(data, credentials);

        // construct request
        const myOptions: IHttpRequestOptions = {
            url: credentials.domain + "/api"+ "/v1"+ "/assignment_groups"+ "/" +id+ "/assign_employment",
            method: 'POST',
            body: data,
            arrayFormat: 'repeat',
        };
        
        responseData = await node.helpers.httpRequest(myOptions);
        return responseData;
        }