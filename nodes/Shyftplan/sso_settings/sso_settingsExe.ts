import { IExecuteFunctions } from 'n8n-workflow';
import { getApiV1SsoSettingsSsoTargetUrlGetAllExecute } from './sso_target_url/getAll/execute';

export async function sso_settingsExecute(node: IExecuteFunctions, operation: string, i: number) {
	let responseData;

	if (operation === 'getApiV1SsoSettingsSsoTargetUrl') {
		responseData = await getApiV1SsoSettingsSsoTargetUrlGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
