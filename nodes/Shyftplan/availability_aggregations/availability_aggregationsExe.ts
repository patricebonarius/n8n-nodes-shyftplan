import { IExecuteFunctions } from 'n8n-workflow';
import { getApiV1AvailabilityAggregationsGetAllExecute } from './getAll/execute';

export async function availability_aggregationsExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	let responseData;

	if (operation === 'getApiV1AvailabilityAggregations') {
		responseData = await getApiV1AvailabilityAggregationsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
