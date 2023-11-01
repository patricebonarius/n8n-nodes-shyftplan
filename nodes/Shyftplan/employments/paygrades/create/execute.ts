import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';
    
        export async function postApiV1EmploymentsIdPaygradesCreateExecute(node: IExecuteFunctions, operation: string, i: number) {
            const credentials = await node.getCredentials('shyftplanApi');
            let responseData;
        const id = node.getNodeParameter('id', i) as number;
const paygrade_type_id = node.getNodeParameter('paygrade_type_id', i) as number;
const value = node.getNodeParameter('value', i) as number;
const update_paygrades = node.getNodeParameter('update_paygrades', i) as boolean;
const update_force = node.getNodeParameter('update_force', i) as boolean;
const update_all = node.getNodeParameter('update_all', i) as boolean;
const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
const data: IDataObject = {
id,
paygrade_type_id,
value,
update_paygrades,
update_force,
update_all,
};

    // put it  all inputs together
    Object.assign(data, additionalFields);
    Object.assign(data, credentials);

    // construct request
    const myOptions: IHttpRequestOptions = {
        url: credentials.domain + "/api/v1/" + "employments/" + id,
        method: 'POST',
        body: data,
    };
    
    responseData = await node.helpers.httpRequest(myOptions);
    return responseData;
}