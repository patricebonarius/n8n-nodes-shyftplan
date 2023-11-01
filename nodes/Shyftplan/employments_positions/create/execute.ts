import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';
    
        export async function postApiV1EmploymentsPositionsCreateExecute(node: IExecuteFunctions, operation: string, i: number) {
            const credentials = await node.getCredentials('shyftplanApi');
            let responseData;
        const employment_id = node.getNodeParameter('employment_id', i) as number;
const locations_position_id = node.getNodeParameter('locations_position_id', i) as number;
const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
const data: IDataObject = {
employment_id,
locations_position_id,
};

    // put it  all inputs together
    Object.assign(data, additionalFields);
    Object.assign(data, credentials);

    // construct request
    const myOptions: IHttpRequestOptions = {
        url: credentials.domain + '/api/v1/employments_positions',
        method: 'POST',
        body: data,
    };
    
    responseData = await node.helpers.httpRequest(myOptions);
    return responseData;
}