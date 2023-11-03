import { IExecuteFunctions } from "n8n-workflow";import { getApiV1EmployeeEvaluationsStaffShiftIdGetExecute } from './get/execute';import { postApiV1EmployeeEvaluationsStaffShiftIdCreateExecute } from './create/execute';import { deleteApiV1EmployeeEvaluationsStaffShiftIdDeleteExecute } from './delete/execute';import { postApiV1EmployeeEvaluationsStaffShiftIdAcceptCreateExecute } from './accept/create/execute';import { deleteApiV1EmployeeEvaluationsEvaluationIdTagsEvaluationTagIdDeleteExecute } from './tags/delete/execute';import { postApiV1EmployeeEvaluationsEvaluationIdTagsCreateExecute } from './tags/create/execute';import { getApiV1EmployeeEvaluationsEvaluationIdTagsGetAllExecute } from './tags/getAll/execute';import { putApiV1EmployeeEvaluationsStaffShiftIdPaymentsPaymentIdUpdateExecute } from './payments/update/execute';import { getApiV1EmployeeEvaluationsStaffShiftIdPaymentsPaymentIdGetExecute } from './payments/get/execute';import { postApiV1EmployeeEvaluationsStaffShiftIdPaymentsCreateExecute } from './payments/create/execute';import { getApiV1EmployeeEvaluationsStaffShiftIdPaymentsGetAllExecute } from './payments/getAll/execute';import { deleteApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreakEvaluationBreakIdDeleteExecute } from './evaluation_break/delete/execute';import { putApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreakEvaluationBreakIdUpdateExecute } from './evaluation_break/update/execute';import { postApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreakCreateExecute } from './evaluation_break/create/execute';

export async function employee_evaluationsExecute(
        node: IExecuteFunctions,
        operation: string,
        i: number
      ) {
        let responseData;
    
                if (operation === "getApiV1EmployeeEvaluationsStaffShiftId") {
                    responseData = await  getApiV1EmployeeEvaluationsStaffShiftIdGetExecute(node, operation, i);
                    console.log(responseData);
                    return responseData;
                }
                if (operation === "postApiV1EmployeeEvaluationsStaffShiftId") {
                    responseData = await  postApiV1EmployeeEvaluationsStaffShiftIdCreateExecute(node, operation, i);
                    console.log(responseData);
                    return responseData;
                }
                if (operation === "deleteApiV1EmployeeEvaluationsStaffShiftId") {
                    responseData = await  deleteApiV1EmployeeEvaluationsStaffShiftIdDeleteExecute(node, operation, i);
                    console.log(responseData);
                    return responseData;
                }
                if (operation === "postApiV1EmployeeEvaluationsStaffShiftIdAccept") {
                    responseData = await  postApiV1EmployeeEvaluationsStaffShiftIdAcceptCreateExecute(node, operation, i);
                    console.log(responseData);
                    return responseData;
                }
                if (operation === "deleteApiV1EmployeeEvaluationsEvaluationIdTagsEvaluationTagId") {
                    responseData = await  deleteApiV1EmployeeEvaluationsEvaluationIdTagsEvaluationTagIdDeleteExecute(node, operation, i);
                    console.log(responseData);
                    return responseData;
                }
                if (operation === "postApiV1EmployeeEvaluationsEvaluationIdTags") {
                    responseData = await  postApiV1EmployeeEvaluationsEvaluationIdTagsCreateExecute(node, operation, i);
                    console.log(responseData);
                    return responseData;
                }
                if (operation === "getApiV1EmployeeEvaluationsEvaluationIdTags") {
                    responseData = await  getApiV1EmployeeEvaluationsEvaluationIdTagsGetAllExecute(node, operation, i);
                    console.log(responseData);
                    return responseData;
                }
                if (operation === "putApiV1EmployeeEvaluationsStaffShiftIdPaymentsPaymentId") {
                    responseData = await  putApiV1EmployeeEvaluationsStaffShiftIdPaymentsPaymentIdUpdateExecute(node, operation, i);
                    console.log(responseData);
                    return responseData;
                }
                if (operation === "getApiV1EmployeeEvaluationsStaffShiftIdPaymentsPaymentId") {
                    responseData = await  getApiV1EmployeeEvaluationsStaffShiftIdPaymentsPaymentIdGetExecute(node, operation, i);
                    console.log(responseData);
                    return responseData;
                }
                if (operation === "postApiV1EmployeeEvaluationsStaffShiftIdPayments") {
                    responseData = await  postApiV1EmployeeEvaluationsStaffShiftIdPaymentsCreateExecute(node, operation, i);
                    console.log(responseData);
                    return responseData;
                }
                if (operation === "getApiV1EmployeeEvaluationsStaffShiftIdPayments") {
                    responseData = await  getApiV1EmployeeEvaluationsStaffShiftIdPaymentsGetAllExecute(node, operation, i);
                    console.log(responseData);
                    return responseData;
                }
                if (operation === "deleteApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreakEvaluationBreakId") {
                    responseData = await  deleteApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreakEvaluationBreakIdDeleteExecute(node, operation, i);
                    console.log(responseData);
                    return responseData;
                }
                if (operation === "putApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreakEvaluationBreakId") {
                    responseData = await  putApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreakEvaluationBreakIdUpdateExecute(node, operation, i);
                    console.log(responseData);
                    return responseData;
                }
                if (operation === "postApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreak") {
                    responseData = await  postApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreakCreateExecute(node, operation, i);
                    console.log(responseData);
                    return responseData;
                }}
