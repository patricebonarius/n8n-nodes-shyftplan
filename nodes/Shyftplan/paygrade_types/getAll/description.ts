import { INodeProperties } from 'n8n-workflow';
        export const getApiV1PaygradeTypesGetAllFields: INodeProperties[] = [
        {
            displayName: 'Additional Fields',
            name: 'additionalFields',
            type: 'collection',
            placeholder: 'Add Field',
            default: {},
            displayOptions: {
                show: {
                    operation: ['getApiV1PaygradeTypes'],
                    resource: ['paygrade_types'],
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
{
                            displayName: 'Page', 
                            name: 'page',
                            type: 'number', 
                            default: '',
                            placeholder: '',
                            description: "Pages starts with 1", 
                        },
{
                            displayName: 'Per Page', 
                            name: 'per_page',
                            type: 'number', 
                            default: '',
                            placeholder: '',
                            description: "Between 1 and 1000", 
                        },
{
                            displayName: 'Updated After', 
                            name: 'updated_after',
                            type: 'string', 
                            default: '',
                            placeholder: '',
                            description: "Return all records which are updated after", 
                        },
{
                            displayName: 'Created After', 
                            name: 'created_after',
                            type: 'string', 
                            default: '',
                            placeholder: '',
                            description: "Return all records which are created after", 
                        },
{
                            displayName: 'Updated Before', 
                            name: 'updated_before',
                            type: 'string', 
                            default: '',
                            placeholder: '',
                            description: "Return all records which are updated before", 
                        },
{
                            displayName: 'Created Before', 
                            name: 'created_before',
                            type: 'string', 
                            default: '',
                            placeholder: '',
                            description: "Return all records which are created before", 
                        },
	],
    },];