import {
  IDataObject,
  IExecuteFunctions,
  IHttpRequestOptions,
} from "n8n-workflow";

export async function deleteApiV1ShiftsShiftIdPaygradesIdDeleteExecute(
  node: IExecuteFunctions,
  operation: string,
  i: number
) {
  const credentials = await node.getCredentials("shyftplanApi");
  let responseData;
  const company_id = node.getNodeParameter("company_id", i) as number;
  const shift_id = node.getNodeParameter("shift_id", i) as number;
  const id = node.getNodeParameter("id", i) as number;
  const additionalFields = node.getNodeParameter(
    "additionalFields",
    i
  ) as IDataObject;
  const data: IDataObject = {
    company_id,
    shift_id,
    id,
  };

  // put it  all inputs together
  Object.assign(data, additionalFields);
  Object.assign(data, credentials);

  // construct request
  const myOptions: IHttpRequestOptions = {
    url:
      credentials.domain +
      "/api/v1/" +
      "shifts/" +
      shift_id +
      "paygrades/" +
      id,
    method: "DELETE",
    body: data,
  };

  responseData = await node.helpers.httpRequest(myOptions);
  return responseData;
}
