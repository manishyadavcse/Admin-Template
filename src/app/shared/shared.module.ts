import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SpinnerComponent} from '../components/spinner/spinner.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Ng2GoogleChartsModule} from 'ng2-google-charts';
import {ClickOutsideModule} from 'ng-click-outside';

import { MenuItems } from './menu-items/menu-items';
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './accordion';
import { ToggleFullscreenDirective } from './fullscreen/toggle-fullscreen.directive';
import {CardRefreshDirective} from './card/card-refresh.directive';
import {CardToggleDirective} from './card/card-toggle.directive';
import { CardComponent } from './card/card.component';
import {ParentRemoveDirective} from './elements/parent-remove.directive';
import {PaginationModule} from 'ngx-bootstrap';
// import {GoTopButtonModule} from 'ng2-go-top-button';
// import {ScrollModule} from '../scroll/scroll.module';
import {ToastyModule} from 'ng2-toasty';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {TagInputModule} from 'ngx-chips';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    PaginationModule.forRoot(),
    // ScrollModule,
    ToastyModule.forRoot(),
    SimpleNotificationsModule.forRoot(),
    TagInputModule,
    Ng2GoogleChartsModule,
    ClickOutsideModule,
    // GoTopButtonModule
  ],
  declarations: [
      AccordionAnchorDirective,
      AccordionLinkDirective,
      AccordionDirective,
      ToggleFullscreenDirective,
      CardRefreshDirective,
      CardToggleDirective,
      ParentRemoveDirective,
      CardComponent,
      SpinnerComponent
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    ToggleFullscreenDirective,
    CardRefreshDirective,
    CardToggleDirective,
    ParentRemoveDirective,
    CardComponent,
    SpinnerComponent,
    NgbModule,
    PaginationModule,
    FormsModule,
    ReactiveFormsModule,
    // ScrollModule,
    ToastyModule,
    SimpleNotificationsModule,
    TagInputModule,
    Ng2GoogleChartsModule,
    ClickOutsideModule,
    // GoTopButtonModule
  ],
  providers: [MenuItems]
})
export class SharedModule { }
