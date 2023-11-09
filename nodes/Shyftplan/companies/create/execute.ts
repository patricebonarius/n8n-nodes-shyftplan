import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';
    
        export async function postApiV1CompaniesCreateExecute(node: IExecuteFunctions, operation: string, i: number) {
            const credentials = await node.getCredentials('shyftplanApi');
            let responseData;
        const name = node.getNodeParameter('name', i) as string;
const probable_employees = node.getNodeParameter('probable_employees', i) as string;
const first_name = node.getNodeParameter('first_name', i) as string;
const last_name = node.getNodeParameter('last_name', i) as string;
const email = node.getNodeParameter('email', i) as string;
const password = node.getNodeParameter('password', i) as string;
const phone_number = node.getNodeParameter('phone_number', i) as string;
const tnc_check = node.getNodeParameter('tnc_check', i) as string;
const contract_check = node.getNodeParameter('contract_check', i) as string;
const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
let data: IDataObject = {
name,
probable_employees,
first_name,
last_name,
email,
password,
phone_number,
tnc_check,
contract_check,
};

        // put it  all inputs together
        Object.assign(data, additionalFields);
        Object.assign(data, credentials);

        // construct request
        const myOptions: IHttpRequestOptions = {
            url: credentials.domain + "/api"+ "/v1"+ "/companies",
            method: 'POST',
            body: data,
            arrayFormat: 'repeat',
        };
        
        responseData = await node.helpers.httpRequest(myOptions);
        return responseData;
        }