import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})
export class EventListComponent {
    event = {
        id: 1,
        name: 'Angular Connect',
        date: '26/9/2020',
        time: '3:16 pm',
        price: '665.99',
        imageUrl: './assets/images/angularconnect-shield.png',
        location: {
            address: '62 4th Avenue',
            city: 'London',
            country: 'England'
        }
    }

}