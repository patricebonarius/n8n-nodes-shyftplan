import { INodeProperties } from "n8n-workflow";
import { getApiV1BackgroundJobsGetAllFields } from "./getAll/description";
import { getApiV1BackgroundJobsIdGetFields } from "./get/description";

export const background_jobsOps: INodeProperties[] = [
  {
    displayName: "Operation",
    name: "operation",
    type: "options",
    displayOptions: {
      show: {
        resource: ["background_jobs"],
      },
    },
    options: [
      {
        name: "Get Background Jobs",
        value: "getApiV1BackgroundJobs",
        description:
          "Return list of Background Jobs. Background jobs are deleted after 14 days.",
        action: "Get background jobs",
      },
      {
        name: "Get Background Jobs By ID",
        value: "getApiV1BackgroundJobsId",
        description:
          "Return a Background Job. Background jobs are deleted after 14 days.",
        action: "Get background jobs by ID",
      },
    ],
    default: "getApiV1BackgroundJobsId",
    noDataExpression: true,
  },

  ...getApiV1BackgroundJobsGetAllFields,

  ...getApiV1BackgroundJobsIdGetFields,
];
