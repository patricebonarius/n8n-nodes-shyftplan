import { INodeProperties } from 'n8n-workflow';
        export const putApiV1LocationsIdShiftplanPublishSettingsUpdateFields: INodeProperties[] = [
        {
                    displayName: 'Company ID', 
                    name: 'company_id',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: "ID of the Company",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'putApiV1LocationsIdShiftplanPublishSettings' 
                            ], 
                            resource: [
                                'locations'
                            ], 
                        },
                    }, 
                },
{
                    displayName: 'ID', 
                    name: 'id',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: "ID of the Location",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'putApiV1LocationsIdShiftplanPublishSettings' 
                            ], 
                            resource: [
                                'locations'
                            ], 
                        },
                    }, 
                },
{
            displayName: 'Additional Fields',
            name: 'additionalFields',
            type: 'collection',
            placeholder: 'Add Field',
            default: {},
            displayOptions: {
                show: {
                    operation: ['putApiV1LocationsIdShiftplanPublishSettings'],
                    resource: ['locations'],
                },
            },
            options: [{
                            displayName: 'Send Assigned_shifts', 
                            name: 'send_assigned_shifts',
                            type: 'boolean', 
                            default: false,
                            placeholder: '',
                            description: "Whether Send information about shifts assigned to the employee in email notification", 
                        },
{
                            displayName: 'Send Open_shifts', 
                            name: 'send_open_shifts',
                            type: 'boolean', 
                            default: false,
                            placeholder: '',
                            description: "Whether Send information about open shifts in email notification", 
                        },
{
                            displayName: 'Send Message', 
                            name: 'send_message',
                            type: 'boolean', 
                            default: false,
                            placeholder: '',
                            description: "Whether Send additional text message to employees Provided in message field.", 
                        },
{
                            displayName: 'Message', 
                            name: 'message',
                            type: 'string', 
                            default: '',
                            placeholder: '',
                            description: "Additional text message included in email notification to employees Requires sendMessage to be true for message to be included", 
                        },
	],
    },];