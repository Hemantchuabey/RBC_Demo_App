import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DashboardItemsService } from './dashboard-items.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { itemsReducer } from './items-state/items.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ItemsEffects } from './items-state/items.effects';

// import { LoginPageComponent } from './MyComponents/login-page/login-page.component';
// import { DashboardComponent } from './MyComponents/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    StoreModule.forRoot({itemsList : itemsReducer}),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
      autoPause: true,
    }),
    EffectsModule.forRoot([ItemsEffects]),
  ],
  providers: [DashboardItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
