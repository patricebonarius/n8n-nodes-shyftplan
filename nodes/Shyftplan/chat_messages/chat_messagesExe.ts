import { IExecuteFunctions } from "n8n-workflow";
import { getApiV1ChatMessagesEmploymentsGetAllExecute } from "./employments/getAll/execute";
import { getApiV1ChatMessagesChatsGetAllExecute } from "./chats/getAll/execute";
import { getApiV1ChatMessagesGetAllExecute } from "./getAll/execute";
import { postApiV1ChatMessagesCreateExecute } from "./create/execute";

export async function chat_messagesExecute(
  node: IExecuteFunctions,
  operation: string,
  i: number
) {
  let responseData;

  if (operation === "getApiV1ChatMessagesEmployments") {
    responseData = await getApiV1ChatMessagesEmploymentsGetAllExecute(
      node,
      operation,
      i
    );
    console.log(responseData);
    return responseData;
  }
  if (operation === "getApiV1ChatMessagesChats") {
    responseData = await getApiV1ChatMessagesChatsGetAllExecute(
      node,
      operation,
      i
    );
    console.log(responseData);
    return responseData;
  }
  if (operation === "getApiV1ChatMessages") {
    responseData = await getApiV1ChatMessagesGetAllExecute(node, operation, i);
    console.log(responseData);
    return responseData;
  }
  if (operation === "postApiV1ChatMessages") {
    responseData = await postApiV1ChatMessagesCreateExecute(node, operation, i);
    console.log(responseData);
    return responseData;
  }
}
