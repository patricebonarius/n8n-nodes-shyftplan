import { IExecuteFunctions } from "n8n-workflow";import { getApiV1CompaniesGetAllExecute } from './getAll/execute';import { postApiV1CompaniesCreateExecute } from './create/execute';import { getApiV1CompaniesIdGetExecute } from './get/execute';import { postApiV1CompaniesIdUiSettingsCreateExecute } from './ui_settings/create/execute';import { getApiV1CompaniesIdUiSettingsGetAllExecute } from './ui_settings/getAll/execute';

export async function companiesExecute(
        node: IExecuteFunctions,
        operation: string,
        i: number
      ) {
        let responseData;
    
                if (operation === "getApiV1Companies") {
                    responseData = await  getApiV1CompaniesGetAllExecute(node, operation, i);
                    console.log(responseData);
                    return responseData;
                }
                if (operation === "postApiV1Companies") {
                    responseData = await  postApiV1CompaniesCreateExecute(node, operation, i);
                    console.log(responseData);
                    return responseData;
                }
                if (operation === "getApiV1CompaniesId") {
                    responseData = await  getApiV1CompaniesIdGetExecute(node, operation, i);
                    console.log(responseData);
                    return responseData;
                }
                if (operation === "postApiV1CompaniesIdUiSettings") {
                    responseData = await  postApiV1CompaniesIdUiSettingsCreateExecute(node, operation, i);
                    console.log(responseData);
                    return responseData;
                }
                if (operation === "getApiV1CompaniesIdUiSettings") {
                    responseData = await  getApiV1CompaniesIdUiSettingsGetAllExecute(node, operation, i);
                    console.log(responseData);
                    return responseData;
                }}
