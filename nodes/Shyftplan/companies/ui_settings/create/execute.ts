import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';
    
        export async function postApiV1CompaniesIdUiSettingsCreateExecute(node: IExecuteFunctions, operation: string, i: number) {
            const credentials = await node.getCredentials('shyftplanApi');
            let responseData;
        const id = node.getNodeParameter('id', i) as number;
const setting = node.getNodeParameter('setting', i) as JSON;
const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
let data: IDataObject = {
id,
setting,
};

        // put it  all inputs together
        Object.assign(data, additionalFields);
        Object.assign(data, credentials);

        // construct request
        const myOptions: IHttpRequestOptions = {
            url: credentials.domain + "/api"+ "/v1"+ "/companies"+ "/" +id+ "/ui_settings",
            method: 'POST',
            body: data,
            arrayFormat: 'repeat',
        };
        
        responseData = await node.helpers.httpRequest(myOptions);
        return responseData;
        }