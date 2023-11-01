import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';
    
        export async function getApiV1EmploymentsIdYearlyBringShiftsGetAllExecute(node: IExecuteFunctions, operation: string, i: number) {
            const credentials = await node.getCredentials('shyftplanApi');
            let responseData;
        const id = node.getNodeParameter('id', i) as number;
const company_id = node.getNodeParameter('company_id', i) as number;
const start_year = node.getNodeParameter('start_year', i) as number;
const end_year = node.getNodeParameter('end_year', i) as number;
const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
const data: IDataObject = {
id,
company_id,
start_year,
end_year,
};

    // put it  all inputs together
    Object.assign(data, additionalFields);
    Object.assign(data, credentials);

    const header = {
        'content-type': 'x-www-form-urlencoded',
    };

    // construct request
    const myOptions: IHttpRequestOptions = {
        url: "" + credentials.domain + "/api/v1/" + "employments/" + id + "/yearly_bring_shifts",
        method: 'GET',
        headers: header,
        qs: data,
    };
    
    responseData = await node.helpers.httpRequest(myOptions);
    return responseData;
}