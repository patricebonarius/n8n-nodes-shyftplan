import { INodeProperties } from 'n8n-workflow';
        export const deleteApiV1ShiftsIdDeleteFields: INodeProperties[] = [
        {
                    displayName: 'Company ID', 
                    name: 'company_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'deleteApiV1ShiftsId' 
                        ], 
                        resource: [
                            'shifts'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Company ID', 
                },
{
                    displayName: 'ID', 
                    name: 'id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'deleteApiV1ShiftsId' 
                        ], 
                        resource: [
                            'shifts'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: '', 
                },
{
            displayName: 'Additional Fields',
            name: 'additionalFields',
            type: 'collection',
            placeholder: 'Add Field',
            default: {},
            displayOptions: {
                show: {
                    operation: ['deleteApiV1ShiftsId'],
                    resource: ['shifts'],
                },
            },
            options: [{
                    displayName: 'Delete Connected', 
                    name: 'delete_connected',
                    type: 'boolean', 
                    default: false,
                    placeholder: '',
                    description: 'WhetherDelete connected shifts if value is true', 
                },
	],
    },];