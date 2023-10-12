import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class ShyftplanApi implements ICredentialType {
	name = 'shyftplanApi';
	displayName = 'Shyftplan API';
	documentationUrl = 'https://shyftplan.com/swagger/index.html';
	properties: INodeProperties[] = [
		{
			displayName: 'User Email',
			name: 'user_email',
			type: 'string',
			default: '',
			placeholder: 'some@somewhere.com',
		},
		{
			displayName: 'Auth Token',
			name: 'authentication_token',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Company ID',
			name: 'company_id',
			type: 'number',
			default: '',
			placeholder: '12345',
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: 'https://release.sppt-beta.com',
		},
	];

	// This allows the credential to be used by other parts of n8n
	// stating how this credential is injected as part of the request
	// An example is the Http Request node that can make generic calls
	// reusing this credential
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '={{"Bearer " + $credentials.authentication_token}}',
			},
		},
	};

	// The block below tells how this credential can be tested
	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials?.domain}}',
			//url: '/employments',
			url: '={{ "/v2/employments?" + "user_email=" + $credentials?.user_email + "&authentication_token=" + $credentials?.user_email + "&company_id=" + $credentials.companyid.toString() }}',
		},
	};
}
