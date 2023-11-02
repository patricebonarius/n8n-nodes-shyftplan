import { INodeProperties } from 'n8n-workflow';
        export const getApiV1AbsencesEmploymentsIdGetFields: INodeProperties[] = [
        {
                    displayName: 'ID', 
                    name: 'id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'getApiV1AbsencesEmploymentsId' 
                        ], 
                        resource: [
                            'absences'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Employment id', 
                },
{
            displayName: 'Additional Fields',
            name: 'additionalFields',
            type: 'collection',
            placeholder: 'Add Field',
            default: {},
            displayOptions: {
                show: {
                    operation: ['getApiV1AbsencesEmploymentsId'],
                    resource: ['absences'],
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