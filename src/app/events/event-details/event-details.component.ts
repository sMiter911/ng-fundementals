import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import {  ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/event.model';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left:20px; padding-right:20px;}
        .event-image { height: 100px;}
    `]
})
export class EventDetailsComponent {
    event: IEvent
    constructor (private _eventService: EventService, private _route: ActivatedRoute) { }

    ngOnInit(){
        this.event = this._eventService.getEvent(+this._route.snapshot.params['id'])
    }
}