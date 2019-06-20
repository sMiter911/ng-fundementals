import { Component, Input } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';
import { ISessions } from '../shared';

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent {
    @Input() sessions: ISessions;
}
