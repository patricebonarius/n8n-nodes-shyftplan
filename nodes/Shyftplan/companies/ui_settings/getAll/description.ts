import { INodeProperties } from 'n8n-workflow';
        export const getApiV1CompaniesIdUiSettingsGetAllFields: INodeProperties[] = [
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
                                'getApiV1CompaniesIdUiSettings' 
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
                    operation: ['getApiV1CompaniesIdUiSettings'],
                    resource: ['companies'],
                },
            },
            options: [	],
    },];