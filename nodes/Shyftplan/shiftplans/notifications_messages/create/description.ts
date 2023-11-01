import { INodeProperties } from 'n8n-workflow';
        export const postApiV1ShiftplansShiftplanIdNotificationsMessagesCreateFields: INodeProperties[] = [
        {
                    displayName: 'Company ID', 
                    name: 'company_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'postApiV1ShiftplansShiftplanIdNotificationsMessages' 
                        ], 
                        resource: [
                            'shiftplans'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Company ID', 
                },
{
                    displayName: 'Shiftplan ID', 
                    name: 'shiftplan_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'postApiV1ShiftplansShiftplanIdNotificationsMessages' 
                        ], 
                        resource: [
                            'shiftplans'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Shiftplan ID', 
                },
{
                    displayName: 'Notification Type', 
                    name: 'notification_type',
                    type: 'string', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'postApiV1ShiftplansShiftplanIdNotificationsMessages' 
                        ], 
                        resource: [
                            'shiftplans'
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
                    operation: ['postApiV1ShiftplansShiftplanIdNotificationsMessages'],
                    resource: ['shiftplans'],
                },
            },
            options: [{
                    displayName: 'message', 
                    name: 'message',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: 'Notification content', 
                },
	],
    },];