import { INodeProperties } from "n8n-workflow";
export const getApiV1ChatMessagesEmploymentsGetAllFields: INodeProperties[] = [
  {
    displayName: "Company ID",
    name: "company_id",
    type: "string",
    default: "",
    placeholder: "",
    description: "Enter Company ID",
    required: true,
    displayOptions: {
      show: {
        operation: ["getApiV1ChatMessagesEmployments"],
        resource: ["chat_messages"],
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
        operation: ["getApiV1ChatMessagesEmployments"],
        resource: ["chat_messages"],
      },
    },
    options: [],
  },
];
