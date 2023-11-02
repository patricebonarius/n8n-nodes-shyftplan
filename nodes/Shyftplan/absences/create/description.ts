import { INodeProperties } from 'n8n-workflow';
        export const postApiV1AbsencesCreateFields: INodeProperties[] = [
        {
                    displayName: 'Starts At', 
                    name: 'starts_at',
                    type: 'string', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'postApiV1Absences' 
                        ], 
                        resource: [
                            'absences'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Start of Absence', 
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
                            'postApiV1Absences' 
                        ], 
                        resource: [
                            'absences'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'End of Absence', 
                },
{
                    displayName: 'Employment ID', 
                    name: 'employment_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'postApiV1Absences' 
                        ], 
                        resource: [
                            'absences'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Employment ID', 
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
                            'postApiV1Absences' 
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
                    displayName: 'days', 
                    name: 'days',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'postApiV1Absences' 
                        ], 
                        resource: [
                            'absences'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Number of days from Absence', 
                },
{
                    displayName: 'paID', 
                    name: 'paid',
                    type: 'boolean', 
                    required: true,
                    default: false,
                    displayOptions: { 
                    show: { 
                        operation: [
                            'postApiV1Absences' 
                        ], 
                        resource: [
                            'absences'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Whether Defines if Absence is paid', 
                },
{
            displayName: 'Additional Fields',
            name: 'additionalFields',
            type: 'collection',
            placeholder: 'Add Field',
            default: {},
            displayOptions: {
                show: {
                    operation: ['postApiV1Absences'],
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
{
                    displayName: 'state', 
                    name: 'state',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: 'Initial State of Absence', 
                },
{
                    displayName: 'notes', 
                    name: 'notes',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: 'Note of Absence', 
                },
{
                    displayName: 'Is Full_day', 
                    name: 'is_full_day',
                    type: 'boolean', 
                    default: false,
                    placeholder: '',
                    description: 'Whether Is the Absence for the full day(s)', 
                },
{
                    displayName: 'Force Collision', 
                    name: 'force_collision',
                    type: 'boolean', 
                    default: false,
                    placeholder: '',
                    description: 'Whether Create absences even when conflicts exists when set to true', 
                },
{
                    displayName: 'Force Collision_and_remove', 
                    name: 'force_collision_and_remove',
                    type: 'boolean', 
                    default: false,
                    placeholder: '',
                    description: 'Whether Remove staff from conflicting Shifts', 
                },
	],
    },];