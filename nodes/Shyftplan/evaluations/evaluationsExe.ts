import { IExecuteFunctions } from 'n8n-workflow';
import { getApiV1EvaluationsGetAllExecute } from './getAll/execute';
import { postApiV1EvaluationsStaffShiftIdEvaluationBreaksCreateExecute } from './evaluation_breaks/create/execute';
import { deleteApiV1EvaluationsStaffShiftIdEvaluationBreaksEvaluationBreakIdDeleteExecute } from './evaluation_breaks/delete/execute';
import { putApiV1EvaluationsStaffShiftIdEvaluationBreaksEvaluationBreakIdUpdateExecute } from './evaluation_breaks/update/execute';
import { postApiV1EvaluationsStaffShiftIdCreateExecute } from './create/execute';
import { getApiV1EvaluationsStaffShiftIdGetExecute } from './get/execute';
import { getApiV1EvaluationsStaffShiftIdPaymentsCalculationGetAllExecute } from './payments_calculation/getAll/execute';
import { postApiV1EvaluationsStaffShiftIdDidShowCreateExecute } from './did_show/create/execute';
import { postApiV1EvaluationsStaffShiftIdDidNotShowCreateExecute } from './did_not_show/create/execute';
import { postApiV1EvaluationsStaffShiftIdPaymentsCreateExecute } from './payments/create/execute';
import { getApiV1EvaluationsStaffShiftIdPaymentsGetAllExecute } from './payments/getAll/execute';
import { deleteApiV1EvaluationsStaffShiftIdPaymentsPaymentIdDeleteExecute } from './payments/delete/execute';
import { putApiV1EvaluationsStaffShiftIdPaymentsPaymentIdUpdateExecute } from './payments/update/execute';
import { getApiV1EvaluationsStaffShiftIdPaymentsPaymentIdGetExecute } from './payments/get/execute';

export async function evaluationsExecute(node: IExecuteFunctions, operation: string, i: number) {
	let responseData;

	if (operation === 'getApiV1Evaluations') {
		responseData = await getApiV1EvaluationsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1EvaluationsStaffShiftIdEvaluationBreaks') {
		responseData = await postApiV1EvaluationsStaffShiftIdEvaluationBreaksCreateExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'deleteApiV1EvaluationsStaffShiftIdEvaluationBreaksEvaluationBreakId') {
		responseData =
			await deleteApiV1EvaluationsStaffShiftIdEvaluationBreaksEvaluationBreakIdDeleteExecute(
				node,
				operation,
				i,
			);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'putApiV1EvaluationsStaffShiftIdEvaluationBreaksEvaluationBreakId') {
		responseData =
			await putApiV1EvaluationsStaffShiftIdEvaluationBreaksEvaluationBreakIdUpdateExecute(
				node,
				operation,
				i,
			);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1EvaluationsStaffShiftId') {
		responseData = await postApiV1EvaluationsStaffShiftIdCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1EvaluationsStaffShiftId') {
		responseData = await getApiV1EvaluationsStaffShiftIdGetExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1EvaluationsStaffShiftIdPaymentsCalculation') {
		responseData = await getApiV1EvaluationsStaffShiftIdPaymentsCalculationGetAllExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1EvaluationsStaffShiftIdDidShow') {
		responseData = await postApiV1EvaluationsStaffShiftIdDidShowCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1EvaluationsStaffShiftIdDidNotShow') {
		responseData = await postApiV1EvaluationsStaffShiftIdDidNotShowCreateExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1EvaluationsStaffShiftIdPayments') {
		responseData = await postApiV1EvaluationsStaffShiftIdPaymentsCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1EvaluationsStaffShiftIdPayments') {
		responseData = await getApiV1EvaluationsStaffShiftIdPaymentsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'deleteApiV1EvaluationsStaffShiftIdPaymentsPaymentId') {
		responseData = await deleteApiV1EvaluationsStaffShiftIdPaymentsPaymentIdDeleteExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'putApiV1EvaluationsStaffShiftIdPaymentsPaymentId') {
		responseData = await putApiV1EvaluationsStaffShiftIdPaymentsPaymentIdUpdateExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1EvaluationsStaffShiftIdPaymentsPaymentId') {
		responseData = await getApiV1EvaluationsStaffShiftIdPaymentsPaymentIdGetExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
}
