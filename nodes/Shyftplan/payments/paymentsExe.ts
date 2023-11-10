import { IExecuteFunctions } from 'n8n-workflow';
import { getApiV1PaymentsStaffShiftIdGetExecute } from './get/execute';

export async function paymentsExecute(node: IExecuteFunctions, operation: string, i: number) {
	let responseData;

	if (operation === 'getApiV1PaymentsStaffShiftId') {
		responseData = await getApiV1PaymentsStaffShiftIdGetExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
