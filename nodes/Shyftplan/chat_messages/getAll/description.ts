import { INodeProperties } from "n8n-workflow";
export const getApiV1ChatMessagesGetAllFields: INodeProperties[] = [
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
        operation: ["getApiV1ChatMessages"],
        resource: ["chat_messages"],
      },
    },
  },
  {
    displayName: "Recipient Type",
    name: "recipient_type",
    type: "string",
    default: "",
    placeholder: "",
    description: "Enter Recipient Type",
    required: true,
    displayOptions: {
      show: {
        operation: ["getApiV1ChatMessages"],
        resource: ["chat_messages"],
      },
    },
  },
  {
    displayName: "Recipient ID",
    name: "recipient_id",
    type: "number",
    default: "",
    placeholder: "",
    description: "Enter Recipient ID",
    required: true,
    displayOptions: {
      show: {
        operation: ["getApiV1ChatMessages"],
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
        operation: ["getApiV1ChatMessages"],
        resource: ["chat_messages"],
      },
    },
    options: [
      {
        displayName: "Last Message_ID",
        name: "last_message_id",
        type: "number",
        default: "",
        placeholder: "",
        description: "Enter Last Message_ID",
      },
    ],
  },
];
