import { INodeProperties } from 'n8n-workflow';
        export const postApiV1EmploymentsPositionsCreateFields: INodeProperties[] = [
        {
                    displayName: 'Employment ID', 
                    name: 'employment_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'postApiV1EmploymentsPositions' 
                        ], 
                        resource: [
                            'employments_positions'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Employment ID', 
                },
{
                    displayName: 'Locations Position_ID', 
                    name: 'locations_position_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'postApiV1EmploymentsPositions' 
                        ], 
                        resource: [
                            'employments_positions'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'LocationsPosition ID', 
                },
{
            displayName: 'Additional Fields',
            name: 'additionalFields',
            type: 'collection',
            placeholder: 'Add Field',
            default: {},
            displayOptions: {
                show: {
                    operation: ['postApiV1EmploymentsPositions'],
                    resource: ['employments_positions'],
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
                    displayName: 'metadata', 
                    name: 'metadata',
                    type: 'json', 
                    default: '',
                    placeholder: '',
                    description: 'EmploymentsPosition metadata as json', 
                },
	],
    },];