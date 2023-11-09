import { INodeProperties } from 'n8n-workflow';
        export const getApiV1CompaniesIdGetFields: INodeProperties[] = [
        {
                    displayName: 'ID', 
                    name: 'id',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: "Company id",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'getApiV1CompaniesId' 
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
                    operation: ['getApiV1CompaniesId'],
                    resource: ['companies'],
                },
            },
            options: [{
                            displayName: 'Company ID', 
                            name: 'company_id',
                            type: 'number', 
                            default: '',
                            placeholder: '',
                            description: "Enter Company ID", 
                        },
	],
    },];