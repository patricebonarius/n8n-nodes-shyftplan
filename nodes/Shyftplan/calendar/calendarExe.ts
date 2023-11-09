import { IExecuteFunctions } from 'n8n-workflow';
import { getApiV1CalendarAggregationsGetAllExecute } from './aggregations/getAll/execute';

export async function calendarExecute(node: IExecuteFunctions, operation: string, i: number) {
	let responseData;

	if (operation === 'getApiV1CalendarAggregations') {
		responseData = await getApiV1CalendarAggregationsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
