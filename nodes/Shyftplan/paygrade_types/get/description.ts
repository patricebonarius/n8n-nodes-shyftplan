import { INodeProperties } from 'n8n-workflow';
    export const paygrade_typesByIdGetFields: INodeProperties[] = [
    {
                displayName: 'ID', 
                name: 'id',
                type: 'number', 
                required: true,
                default: '',
                displayOptions: { 
                show: { 
                    operation: [
                        'paygrade_typesById_get' 
                    ], 
                    resource: [
                        'paygrade_types'
                    ], 
                },
                },
                placeholder: '',
                description: 'PaygradeType id', 
            },
{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['paygrade_typesById_get'],
				resource: ['paygrade_types'],
			},
		},
		options: [{
                displayName: 'Company ID', 
                name: 'company_id',
                type: 'number', 
                default: '',
                placeholder: '',
                description: '', 
            },
	],
},];