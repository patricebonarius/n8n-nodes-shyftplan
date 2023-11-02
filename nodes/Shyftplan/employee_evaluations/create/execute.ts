import {
  IDataObject,
  IExecuteFunctions,
  IHttpRequestOptions,
} from "n8n-workflow";

export async function postApiV1EmployeeEvaluationsStaffShiftIdCreateExecute(
  node: IExecuteFunctions,
  operation: string,
  i: number
) {
  const credentials = await node.getCredentials("shyftplanApi");
  let responseData;
  const evaluation_starts_at = node.getNodeParameter(
    "evaluation_starts_at",
    i
  ) as string;
  const evaluation_ends_at = node.getNodeParameter(
    "evaluation_ends_at",
    i
  ) as string;
  const staff_shift_id = node.getNodeParameter("staff_shift_id", i) as number;
  const additionalFields = node.getNodeParameter(
    "additionalFields",
    i
  ) as IDataObject;
  const data: IDataObject = {
    evaluation_starts_at,
    evaluation_ends_at,
    staff_shift_id,
  };

  // put it  all inputs together
  Object.assign(data, additionalFields);
  Object.assign(data, credentials);

  // construct request
  const myOptions: IHttpRequestOptions = {
    url:
      credentials.domain +
      "/api" +
      "/v1" +
      "/employee_evaluations" +
      "/" +
      staff_shift_id,
    method: "POST",
    body: data,
  };

  responseData = await node.helpers.httpRequest(myOptions);
  return responseData;
}
