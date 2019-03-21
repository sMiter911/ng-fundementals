import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    template: `
    <div>
    <h1>Upcoming Angular Events</h1>
    <hr>
    <event-thumbnail [event]="event1"></event-thumbnail>
</div>`
})
export class EventListComponent {
    event1 = {
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