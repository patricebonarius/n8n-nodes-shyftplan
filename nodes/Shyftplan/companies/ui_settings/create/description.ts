import { INodeProperties } from 'n8n-workflow';
        export const postApiV1CompaniesIdUiSettingsCreateFields: INodeProperties[] = [
        {
                    displayName: 'ID', 
                    name: 'id',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: "Enter ID",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'postApiV1CompaniesIdUiSettings' 
                            ], 
                            resource: [
                                'companies'
                            ], 
                        },
                    }, 
                },
{
                    displayName: 'Setting', 
                    name: 'setting',
                    type: 'json', 
                    default: '',
                    placeholder: '',
                    description: "Setting JSON",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'postApiV1CompaniesIdUiSettings' 
                            ], 
                            resource: [
                                'companies'
                            ], 
                        },
                    }, 
                },
{
            displayName: 'Additional Fields',
            name: 'additionalFields',
            type: 'collection',
            placeholder: 'Add Field',
            default: {},
            displayOptions: {
                show: {
                    operation: ['postApiV1CompaniesIdUiSettings'],
                    resource: ['companies'],
                },
            },
            options: [	],
    },];