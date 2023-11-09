import { INodeProperties } from 'n8n-workflow';import { getApiV1CompaniesGetAllFields } from './getAll/description';import { postApiV1CompaniesCreateFields } from './create/description';import { getApiV1CompaniesIdGetFields } from './get/description';import { postApiV1CompaniesIdUiSettingsCreateFields } from './ui_settings/create/description';import { getApiV1CompaniesIdUiSettingsGetAllFields } from './ui_settings/getAll/description';

export const companiesOps: INodeProperties[] = [

        {
            displayName: 'Operation',
            name: 'operation',
            type: 'options',
            displayOptions: {
                show: {
                    resource: ['companies'],
                },
            },
            options: [{
                    name: 'Get Companies',
                    value: 'getApiV1Companies',
                    description: 'List all Companies',
                    action: 'Get companies',
                }, {
                    name: 'Post Companies',
                    value: 'postApiV1Companies',
                    description: 'Creates a Company',
                    action: 'Post companies',
                }, {
                    name: 'Get Companies By ID',
                    value: 'getApiV1CompaniesId',
                    description: 'Return a Company',
                    action: 'Get companies by ID',
                }, {
                    name: 'Post Companies By ID Ui Settings',
                    value: 'postApiV1CompaniesIdUiSettings',
                    description: 'Create/Update Company UI Setting',
                    action: 'Post companies by ID ui settings',
                }, {
                    name: 'Get Companies By ID Ui Settings',
                    value: 'getApiV1CompaniesIdUiSettings',
                    description: 'Get Company UI Setting',
                    action: 'Get companies by ID ui settings',
                }, ],
    default: 'getApiV1CompaniesIdUiSettings',
    noDataExpression: true,
    },

            ... getApiV1CompaniesGetAllFields,
            
            ... postApiV1CompaniesCreateFields,
            
            ... getApiV1CompaniesIdGetFields,
            
            ... postApiV1CompaniesIdUiSettingsCreateFields,
            
            ... getApiV1CompaniesIdUiSettingsGetAllFields,
            ];
