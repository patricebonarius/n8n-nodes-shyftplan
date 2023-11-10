import { IExecuteFunctions } from 'n8n-workflow';
import { getApiV1ShiftPresetsGetAllExecute } from './getAll/execute';

export async function shift_presetsExecute(node: IExecuteFunctions, operation: string, i: number) {
	let responseData;

	if (operation === 'getApiV1ShiftPresets') {
		responseData = await getApiV1ShiftPresetsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
