import { INodeProperties } from 'n8n-workflow';
        export const getApiV1AbsencesIdGetFields: INodeProperties[] = [
        {
                    displayName: 'ID', 
                    name: 'id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'getApiV1AbsencesId' 
                        ], 
                        resource: [
                            'absences'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Absence ID', 
                },
{
            displayName: 'Additional Fields',
            name: 'additionalFields',
            type: 'collection',
            placeholder: 'Add Field',
            default: {},
            displayOptions: {
                show: {
                    operation: ['getApiV1AbsencesId'],
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