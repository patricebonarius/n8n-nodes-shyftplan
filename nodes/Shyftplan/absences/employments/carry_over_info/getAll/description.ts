import { INodeProperties } from 'n8n-workflow';
        export const getApiV1AbsencesEmploymentsIdCarryOverInfoGetAllFields: INodeProperties[] = [
        {
                    displayName: 'ID', 
                    name: 'id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'getApiV1AbsencesEmploymentsIdCarryOverInfo' 
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
                    displayName: 'Absence Reason_ID', 
                    name: 'absence_reason_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'getApiV1AbsencesEmploymentsIdCarryOverInfo' 
                        ], 
                        resource: [
                            'absences'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Absence Reason ID', 
                },
{
                    displayName: 'Starts At', 
                    name: 'starts_at',
                    type: 'string', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'getApiV1AbsencesEmploymentsIdCarryOverInfo' 
                        ], 
                        resource: [
                            'absences'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Start of the period', 
                },
{
                    displayName: 'Ends At', 
                    name: 'ends_at',
                    type: 'string', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'getApiV1AbsencesEmploymentsIdCarryOverInfo' 
                        ], 
                        resource: [
                            'absences'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'End of the period', 
                },
{
            displayName: 'Additional Fields',
            name: 'additionalFields',
            type: 'collection',
            placeholder: 'Add Field',
            default: {},
            displayOptions: {
                show: {
                    operation: ['getApiV1AbsencesEmploymentsIdCarryOverInfo'],
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