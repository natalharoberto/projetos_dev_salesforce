import {
    reduceErrors
} from 'c/ldsUtils';
import {
    LightningElement,
    wire
} from 'lwc';

import FIRST_NAME_FIELD from '@salesforce/schema/Contact.FirstName__c';
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName__c';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import getContacts from '@salesforce/apex/ContactController.getContacts';

const COLUMNS = [{
        label: 'First Name',
        fieldName: FIRST_NAME_FIELD.fieldApiName,
        type: 'text'
    },
    {
        label: 'Last Name',
        fieldName: LAST_NAME_FIELD.fieldApiName,
        type: 'text'
    },
    {
        label: 'Email',
        fieldName: EMAIL_FIELD.fieldApiName,
        type: 'email'
    },
];

export default class ContactList extends LightningElement {

    columns = COLUMNS;
    errors;
    @wire(getContacts)
    contacts;


    get errors() {
        console.log('this.contacts.error: ', this.contacts.error);
        return (this.contacts.error) ? reduceErrors(this.contacts.error) : [];
    }
}