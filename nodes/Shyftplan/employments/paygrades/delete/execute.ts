import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';
    
        export async function deleteApiV1EmploymentsIdPaygradesPaygradeIdDeleteExecute(node: IExecuteFunctions, operation: string, i: number) {
            const credentials = await node.getCredentials('shyftplanApi');
            let responseData;
        const id = node.getNodeParameter('id', i) as number;
const update_paygrades = node.getNodeParameter('update_paygrades', i) as boolean;
const update_force = node.getNodeParameter('update_force', i) as boolean;
const update_all = node.getNodeParameter('update_all', i) as boolean;
const paygrade_id = node.getNodeParameter('paygrade_id', i) as number;
const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
let data: IDataObject = {
id,
update_paygrades,
update_force,
update_all,
paygrade_id,
};

        // put it  all inputs together
        Object.assign(data, additionalFields);
        Object.assign(data, credentials);

        // construct request
        const myOptions: IHttpRequestOptions = {
            url: credentials.domain + "/api"+ "/v1"+ "/employments"+ "/" +id+ "/paygrades"+ "/" +paygrade_id,
            method: 'DELETE',
            body: data,
            arrayFormat: 'repeat',
        };
        
        responseData = await node.helpers.httpRequest(myOptions);
        return responseData;
        }