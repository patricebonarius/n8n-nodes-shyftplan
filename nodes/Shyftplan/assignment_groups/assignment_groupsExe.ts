import { IExecuteFunctions } from "n8n-workflow";import { postApiV1AssignmentGroupsCreateExecute } from './create/execute';import { getApiV1AssignmentGroupsGetAllExecute } from './getAll/execute';import { postApiV1AssignmentGroupsIdUnassignEmploymentCreateExecute } from './unassign_employment/create/execute';import { putApiV1AssignmentGroupsIdUpdateExecute } from './update/execute';import { deleteApiV1AssignmentGroupsIdDeleteExecute } from './delete/execute';import { getApiV1AssignmentGroupsIdGetExecute } from './get/execute';import { postApiV1AssignmentGroupsIdAssignEmploymentCreateExecute } from './assign_employment/create/execute';import { putApiV1AssignmentGroupsIdRemoveShiftUpdateExecute } from './remove_shift/update/execute';import { putApiV1AssignmentGroupsIdAddShiftUpdateExecute } from './add_shift/update/execute';

export async function assignment_groupsExecute(
        node: IExecuteFunctions,
        operation: string,
        i: number
      ) {
        let responseData;
    
                if (operation === "postApiV1AssignmentGroups") {
                    responseData = await  postApiV1AssignmentGroupsCreateExecute(node, operation, i);
                    console.log(responseData);
                    return responseData;
                }
                if (operation === "getApiV1AssignmentGroups") {
                    responseData = await  getApiV1AssignmentGroupsGetAllExecute(node, operation, i);
                    console.log(responseData);
                    return responseData;
                }
                if (operation === "postApiV1AssignmentGroupsIdUnassignEmployment") {
                    responseData = await  postApiV1AssignmentGroupsIdUnassignEmploymentCreateExecute(node, operation, i);
                    console.log(responseData);
                    return responseData;
                }
                if (operation === "putApiV1AssignmentGroupsId") {
                    responseData = await  putApiV1AssignmentGroupsIdUpdateExecute(node, operation, i);
                    console.log(responseData);
                    return responseData;
                }
                if (operation === "deleteApiV1AssignmentGroupsId") {
                    responseData = await  deleteApiV1AssignmentGroupsIdDeleteExecute(node, operation, i);
                    console.log(responseData);
                    return responseData;
                }
                if (operation === "getApiV1AssignmentGroupsId") {
                    responseData = await  getApiV1AssignmentGroupsIdGetExecute(node, operation, i);
                    console.log(responseData);
                    return responseData;
                }
                if (operation === "postApiV1AssignmentGroupsIdAssignEmployment") {
                    responseData = await  postApiV1AssignmentGroupsIdAssignEmploymentCreateExecute(node, operation, i);
                    console.log(responseData);
                    return responseData;
                }
                if (operation === "putApiV1AssignmentGroupsIdRemoveShift") {
                    responseData = await  putApiV1AssignmentGroupsIdRemoveShiftUpdateExecute(node, operation, i);
                    console.log(responseData);
                    return responseData;
                }
                if (operation === "putApiV1AssignmentGroupsIdAddShift") {
                    responseData = await  putApiV1AssignmentGroupsIdAddShiftUpdateExecute(node, operation, i);
                    console.log(responseData);
                    return responseData;
                }}
