import { IExecuteFunctions } from 'n8n-workflow';
import { postApiV1PunchTimingsPunchTimingIdPunchBreaksCreateExecute } from './punch_breaks/create/execute';
import { putApiV1PunchTimingsPunchTimingIdPunchBreaksIdUpdateExecute } from './punch_breaks/update/execute';
import { postApiV1PunchTimingsShiftCreateCreateExecute } from './shift_create/create/execute';
import { postApiV1PunchTimingsStartCreateExecute } from './start/create/execute';
import { getApiV1PunchTimingsFetchLocationsPositionsGetAllExecute } from './fetch_locations_positions/getAll/execute';
import { getApiV1PunchTimingsPunchTimeGetAllExecute } from './punch_time/getAll/execute';
import { getApiV1PunchTimingsRecordGetAllExecute } from './record/getAll/execute';
import { getApiV1PunchTimingsGetAllExecute } from './getAll/execute';
import { putApiV1PunchTimingsIdUpdateExecute } from './update/execute';

export async function punch_timingsExecute(node: IExecuteFunctions, operation: string, i: number) {
	let responseData;

	if (operation === 'postApiV1PunchTimingsPunchTimingIdPunchBreaks') {
		responseData = await postApiV1PunchTimingsPunchTimingIdPunchBreaksCreateExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'putApiV1PunchTimingsPunchTimingIdPunchBreaksId') {
		responseData = await putApiV1PunchTimingsPunchTimingIdPunchBreaksIdUpdateExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1PunchTimingsShiftCreate') {
		responseData = await postApiV1PunchTimingsShiftCreateCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1PunchTimingsStart') {
		responseData = await postApiV1PunchTimingsStartCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1PunchTimingsFetchLocationsPositions') {
		responseData = await getApiV1PunchTimingsFetchLocationsPositionsGetAllExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1PunchTimingsPunchTime') {
		responseData = await getApiV1PunchTimingsPunchTimeGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1PunchTimingsRecord') {
		responseData = await getApiV1PunchTimingsRecordGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1PunchTimings') {
		responseData = await getApiV1PunchTimingsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'putApiV1PunchTimingsId') {
		responseData = await putApiV1PunchTimingsIdUpdateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
