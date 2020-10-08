import { Contact } from './Contact';

export class PhonebookStorage {
    constructor(public key) {}

    getContacts(): Contact[] {
        const data = localStorage.getItem(this.key);

        try {
            const { contacts } = data ? JSON.parse(data) : { contacts: [] };

            return contacts;
        } catch (e) {
            console.error(`Failed to parse contacts storage: ${data}.`);

            throw e;
        }
    }

    saveContacts(contacts): void {
        try {
            const serializedContacts = JSON.stringify({ contacts });

            localStorage.setItem(this.key, serializedContacts);
        } catch (e) {
            console.error(`Failed to serialize contacts list.`);

            throw e;
        }
    }
}

export const phonebookStorage = new PhonebookStorage('phonebook-v1');
