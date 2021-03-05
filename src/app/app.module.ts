import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoreTrackerComponent } from './score-tracker/score-tracker.component';
import { PlayingFieldComponent } from './playing-field/playing-field.component';
import { OptionsNavComponent } from './options-nav/options-nav.component';
import { OptionsComponent } from './options/options.component';
import { StartRestartComponent } from './start-restart/start-restart.component';


@NgModule({
  declarations: [
    AppComponent,
    ScoreTrackerComponent,
    PlayingFieldComponent,
    OptionsNavComponent,
    OptionsComponent,
    StartRestartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
