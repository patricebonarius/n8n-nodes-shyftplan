import { INodeProperties } from "n8n-workflow";
export const getApiV1BackgroundJobsGetAllFields: INodeProperties[] = [
  {
    displayName: "Company ID",
    name: "company_id",
    type: "number",
    default: "",
    placeholder: "",
    description: "Company ID for which we need to fetch the Background Jobs",
    required: true,
    displayOptions: {
      show: {
        operation: ["getApiV1BackgroundJobs"],
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
        operation: ["getApiV1BackgroundJobs"],
        resource: ["background_jobs"],
      },
    },
    options: [
      {
        displayName: "Page",
        name: "page",
        type: "number",
        default: "",
        placeholder: "",
        description: "Pages starts with 1",
      },
      {
        displayName: "Per Page",
        name: "per_page",
        type: "number",
        default: "",
        placeholder: "",
        description: "Between 1 and 1000",
      },
      {
        displayName: "Created After",
        name: "created_after",
        type: "string",
        default: "",
        placeholder: "",
        description: "Filter by created_after",
      },
      {
        displayName: "Updated After",
        name: "updated_after",
        type: "string",
        default: "",
        placeholder: "",
        description: "Filter by updated_after",
      },
      {
        displayName: "IDs[]",
        name: "idsSTARTEND",
        type: "json",
        typeOptions: {
          multipleValues: true,
          multipleValueButtonText: "Add Tag",
        },
        default: "",
        placeholder: "",
        description: "Background Job IDs",
      },
    ],
  },
];
