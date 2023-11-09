import { INodeProperties } from "n8n-workflow";
export const getApiV1BackgroundJobsIdGetFields: INodeProperties[] = [
  {
    displayName: "ID",
    name: "id",
    type: "string",
    default: "",
    placeholder: "",
    description: "Background Job ID",
    required: true,
    displayOptions: {
      show: {
        operation: ["getApiV1BackgroundJobsId"],
        resource: ["background_jobs"],
      },
    },
  },
  {
    displayName: "Company ID",
    name: "company_id",
    type: "number",
    default: "",
    placeholder: "",
    description: "Company ID for which we need to fetch the Background Job",
    required: true,
    displayOptions: {
      show: {
        operation: ["getApiV1BackgroundJobsId"],
        resource: ["background_jobs"],
      },
    },
  },
  {
    displayName: "Additional Fields",
    name: "additionalFields",
    type: "collection",
    placeholder: "Add Field",
    default: {},
    displayOptions: {
      show: {
        operation: ["getApiV1BackgroundJobsId"],
        resource: ["background_jobs"],
      },
    },
    options: [],
  },
];
