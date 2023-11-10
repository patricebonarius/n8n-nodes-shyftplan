import { INodeProperties } from 'n8n-workflow';
        export const postApiV1PunchTimingsStartCreateFields: INodeProperties[] = [
        {
            displayName: 'Additional Fields',
            name: 'additionalFields',
            type: 'collection',
            placeholder: 'Add Field',
            default: {},
            displayOptions: {
                show: {
                    operation: ['postApiV1PunchTimingsStart'],
                    resource: ['punch_timings'],
                },
            },
            options: [{
                            displayName: 'Company ID', 
                            name: 'company_id',
                            type: 'number', 
                            default: '',
                            placeholder: '',
                            description: "Enter ", 
                        },
	],
    },];