import { INodeProperties } from 'n8n-workflow';
        export const postApiV1ShiftplansIdPublishCreateFields: INodeProperties[] = [
        {
                    displayName: 'Company ID', 
                    name: 'company_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'postApiV1ShiftplansIdPublish' 
                        ], 
                        resource: [
                            'shiftplans'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Company ID related to the Shiftplan', 
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
                            'postApiV1ShiftplansIdPublish' 
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
            displayName: 'Additional Fields',
            name: 'additionalFields',
            type: 'collection',
            placeholder: 'Add Field',
            default: {},
            displayOptions: {
                show: {
                    operation: ['postApiV1ShiftplansIdPublish'],
                    resource: ['shiftplans'],
                },
            },
            options: [{
                    displayName: 'Publish With_email', 
                    name: 'publish_with_email',
                    type: 'boolean', 
                    default: false,
                    placeholder: '',
                    description: 'WhetherPublish with email', 
                },
{
                    displayName: 'Send Assigned_shifts', 
                    name: 'send_assigned_shifts',
                    type: 'boolean', 
                    default: false,
                    placeholder: '',
                    description: 'WhetherSend assigned shifts when publish_with_email is true', 
                },
{
                    displayName: 'Send Open_shifts', 
                    name: 'send_open_shifts',
                    type: 'boolean', 
                    default: false,
                    placeholder: '',
                    description: 'WhetherSend open shift when publish_with_email is true', 
                },
{
                    displayName: 'Send Message', 
                    name: 'send_message',
                    type: 'boolean', 
                    default: false,
                    placeholder: '',
                    description: 'WhetherSend a message when publish_with_email is true', 
                },
{
                    displayName: 'message', 
                    name: 'message',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: 'Publish message when send_message is true', 
                },
	],
    },];