import { IExecuteFunctions } from "n8n-workflow";
import { getApiV1BackgroundJobsGetAllExecute } from "./getAll/execute";
import { getApiV1BackgroundJobsIdGetExecute } from "./get/execute";

export async function background_jobsExecute(
  node: IExecuteFunctions,
  operation: string,
  i: number
) {
  let responseData;

  if (operation === "getApiV1BackgroundJobs") {
    responseData = await getApiV1BackgroundJobsGetAllExecute(
      node,
      operation,
      i
    );
    console.log(responseData);
    return responseData;
  }
  if (operation === "getApiV1BackgroundJobsId") {
    responseData = await getApiV1BackgroundJobsIdGetExecute(node, operation, i);
    console.log(responseData);
    return responseData;
  }
}
