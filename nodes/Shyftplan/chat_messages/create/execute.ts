import {
  IDataObject,
  IExecuteFunctions,
  IHttpRequestOptions,
} from "n8n-workflow";

export async function postApiV1ChatMessagesCreateExecute(
  node: IExecuteFunctions,
  operation: string,
  i: number
) {
  const credentials = await node.getCredentials("shyftplanApi");
  let responseData;
  const company_id = node.getNodeParameter("company_id", i) as string;
  const recipient_type = node.getNodeParameter("recipient_type", i) as string;
  const recipient_id = node.getNodeParameter("recipient_id", i) as number;
  const message = node.getNodeParameter("message", i) as string;
  const additionalFields = node.getNodeParameter(
    "additionalFields",
    i
  ) as IDataObject;
  let data: IDataObject = {
    company_id,
    recipient_type,
    recipient_id,
    message,
  };

  // put it  all inputs together
  Object.assign(data, additionalFields);
  Object.assign(data, credentials);

  // construct request
  const myOptions: IHttpRequestOptions = {
    url: credentials.domain + "/api" + "/v1" + "/chat_messages",
    method: "POST",
    body: data,
    arrayFormat: "repeat",
  };

  responseData = await node.helpers.httpRequest(myOptions);
  return responseData;
}
