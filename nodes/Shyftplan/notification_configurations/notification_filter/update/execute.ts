import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';
    
        export async function putApiV1NotificationConfigurationsNotificationFilterUpdateExecute(node: IExecuteFunctions, operation: string, i: number) {
            const credentials = await node.getCredentials('shyftplanApi');
            let responseData;
        const company_id = node.getNodeParameter('company_id', i) as number;
const enabled_shift_rotation_group_idsSTARTEND = node.getNodeParameter('enabled_shift_rotation_group_idsSTARTEND', i) as JSON;
const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
let data: IDataObject = {
company_id,
enabled_shift_rotation_group_idsSTARTEND,
};

        // put it  all inputs together
        Object.assign(data, additionalFields);
        Object.assign(data, credentials);

        // construct request
        const myOptions: IHttpRequestOptions = {
            url: credentials.domain + "/api"+ "/v1"+ "/notification_configurations"+ "/notification_filter",
            method: 'PUT',
            body: data,
            arrayFormat: 'repeat',
        };
        
        responseData = await node.helpers.httpRequest(myOptions);
        return responseData;
        }