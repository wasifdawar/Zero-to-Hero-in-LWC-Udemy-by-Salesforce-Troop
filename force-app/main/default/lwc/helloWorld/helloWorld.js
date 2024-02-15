import { LightningElement,track } from 'lwc';

export default class HelloWorld extends LightningElement {

    bind = 'Its a One way data-binding';
    title = 'LWC Udemy';

    changeHandler(event)
    {
        this.title = event.target.value;
    }

    @track address = 
    {
      city: "Karachi",
      postal: "74900",
      country: "Pakistan"
    }

    trackHandler(event)
    {
        this.address.city = event.target.value;
    }

    student = ['Wasif','Dawar','Habib','Hamza','Ali'];

    get firstStd(){
        return this.student[0].toUpperCase();
    }
}