import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';
    
        export async function putApiV1ShiftplansShiftplanIdDayNotesIdUpdateExecute(node: IExecuteFunctions, operation: string, i: number) {
            const credentials = await node.getCredentials('shyftplanApi');
            let responseData;
        const company_id = node.getNodeParameter('company_id', i) as number;
const title = node.getNodeParameter('title', i) as string;
const starts_at = node.getNodeParameter('starts_at', i) as string;
const ends_at = node.getNodeParameter('ends_at', i) as string;
const shiftplan_id = node.getNodeParameter('shiftplan_id', i) as number;
const id = node.getNodeParameter('id', i) as number;
const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
let data: IDataObject = {
company_id,
title,
starts_at,
ends_at,
shiftplan_id,
id,
};

        // put it  all inputs together
        Object.assign(data, additionalFields);
        Object.assign(data, credentials);

        // construct request
        const myOptions: IHttpRequestOptions = {
            url: credentials.domain + "/api"+ "/v1"+ "/shiftplans"+ "/" +shiftplan_id+ "/day_notes"+ "/" +id,
            method: 'PUT',
            body: data,
            arrayFormat: 'repeat',
        };
        
        responseData = await node.helpers.httpRequest(myOptions);
        return responseData;
        }