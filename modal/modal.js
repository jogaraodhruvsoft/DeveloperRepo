import { LightningElement, api } from 'lwc';

export default class Modal extends LightningElement {
    @api title;
    @api isOpen = false;
    

    closeModal(event) { 
        this.dispatchEvent(new CustomEvent('close'));
    }
}