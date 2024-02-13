import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {

    bind = 'Its a One way data-binding';
    title = 'LWC Udemy';

    changeHandler(event)
    {
        this.title = event.target.value;
    }

    address = 
    {
      city: "Karachi",
      postal: "74900",
      country: "Pakistan"
    }

    trackHandler(event)
    {
        this.address.city = event.target.value;
    }
}