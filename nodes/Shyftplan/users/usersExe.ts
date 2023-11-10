import { IExecuteFunctions } from 'n8n-workflow';
import { postApiV1UsersUpdatePasswordCreateExecute } from './update_password/create/execute';
import { postApiV1UsersChangeLocaleCreateExecute } from './change_locale/create/execute';
import { postApiV1UsersCreateExecute } from './create/execute';
import { getApiV1UsersGetAllExecute } from './getAll/execute';
import { putApiV1UsersIdUpdateExecute } from './update/execute';
import { getApiV1UsersIdGetExecute } from './get/execute';

export async function usersExecute(node: IExecuteFunctions, operation: string, i: number) {
	let responseData;

	if (operation === 'postApiV1UsersUpdatePassword') {
		responseData = await postApiV1UsersUpdatePasswordCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1UsersChangeLocale') {
		responseData = await postApiV1UsersChangeLocaleCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'postApiV1Users') {
		responseData = await postApiV1UsersCreateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1Users') {
		responseData = await getApiV1UsersGetAllExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'putApiV1UsersId') {
		responseData = await putApiV1UsersIdUpdateExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
	if (operation === 'getApiV1UsersId') {
		responseData = await getApiV1UsersIdGetExecute(node, operation, i);
		console.log(responseData);
		return responseData;
	}
}
