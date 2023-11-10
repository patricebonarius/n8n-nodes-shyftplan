import { IExecuteFunctions } from 'n8n-workflow';
import { putApiV1NotificationConfigurationsNotificationFilterUpdateExecute } from './notification_filter/update/execute';
import { getApiV1NotificationConfigurationsNotificationFilterGetAllExecute } from './notification_filter/getAll/execute';
import { getApiV1NotificationConfigurationsGetAllExecute } from './getAll/execute';
import { putApiV1NotificationConfigurationsIdUpdateExecute } from './update/execute';
import { getApiV1NotificationConfigurationsIdGetExecute } from './get/execute';

export async function notification_configurationsExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	let responseData;

	if (operation === 'putApiV1NotificationConfigurationsNotificationFilter') {
		responseData = await putApiV1NotificationConfigurationsNotificationFilterUpdateExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1NotificationConfigurationsNotificationFilter') {
		responseData = await getApiV1NotificationConfigurationsNotificationFilterGetAllExecute(
			node,
			operation,
			i,
		);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1NotificationConfigurations') {
		responseData = await getApiV1NotificationConfigurationsGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'putApiV1NotificationConfigurationsId') {
		responseData = await putApiV1NotificationConfigurationsIdUpdateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1NotificationConfigurationsId') {
		responseData = await getApiV1NotificationConfigurationsIdGetExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
