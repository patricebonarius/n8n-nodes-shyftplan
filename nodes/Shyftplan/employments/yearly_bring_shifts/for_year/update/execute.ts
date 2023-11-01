import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';
    
        export async function putApiV1EmploymentsIdYearlyBringShiftsForYearUpdateExecute(node: IExecuteFunctions, operation: string, i: number) {
            const credentials = await node.getCredentials('shyftplanApi');
            let responseData;
        const id = node.getNodeParameter('id', i) as number;
const company_id = node.getNodeParameter('company_id', i) as number;
const year = node.getNodeParameter('year', i) as number;
const hours = node.getNodeParameter('hours', i) as number;
const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
const data: IDataObject = {
id,
company_id,
year,
hours,
};

    // put it  all inputs together
    Object.assign(data, additionalFields);
    Object.assign(data, credentials);

    // construct request
    const myOptions: IHttpRequestOptions = {
        url: credentials.domain + "/api/v1/" + "employments/" + id,
        method: 'PUT',
        body: data,
    };
    
    responseData = await node.helpers.httpRequest(myOptions);
    return responseData;
}