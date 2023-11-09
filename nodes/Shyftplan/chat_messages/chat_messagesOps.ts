import { INodeProperties } from "n8n-workflow";
import { getApiV1ChatMessagesEmploymentsGetAllFields } from "./employments/getAll/description";
import { getApiV1ChatMessagesChatsGetAllFields } from "./chats/getAll/description";
import { getApiV1ChatMessagesGetAllFields } from "./getAll/description";
import { postApiV1ChatMessagesCreateFields } from "./create/description";

export const chat_messagesOps: INodeProperties[] = [
  {
    displayName: "Operation",
    name: "operation",
    type: "options",
    displayOptions: {
      show: {
        resource: ["chat_messages"],
      },
    },
    options: [
      {
        name: "Get Chat Messages Employments",
        value: "getApiV1ChatMessagesEmployments",
        description: "List of employments you can chat",
        action: "Get chat messages employments",
      },
      {
        name: "Get Chat Messages Chats",
        value: "getApiV1ChatMessagesChats",
        description: "List of chats",
        action: "Get chat messages chats",
      },
      {
        name: "Get Chat Messages",
        value: "getApiV1ChatMessages",
        description: "List of messages in a chat",
        action: "Get chat messages",
      },
      {
        name: "Post Chat Messages",
        value: "postApiV1ChatMessages",
        description: "Send a message",
        action: "Post chat messages",
      },
    ],
    default: "postApiV1ChatMessages",
    noDataExpression: true,
  },

  ...getApiV1ChatMessagesEmploymentsGetAllFields,

  ...getApiV1ChatMessagesChatsGetAllFields,

  ...getApiV1ChatMessagesGetAllFields,

  ...postApiV1ChatMessagesCreateFields,
];
