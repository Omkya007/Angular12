import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostCardComponent } from './shared/components/post-card/post-card.component';
import { MobileCardComponent } from './shared/components/mobile-card/mobile-card.component';

import { Posts1Component } from './shared/components/posts1/posts1.component';
import { Mob1Component } from './shared/components/mob1/mob1.component';
import { PipesComponent } from './shared/components/pipes/pipes.component';
import { SummaryPipe } from './pipe/summary.pipe';
import { CrickFilterPipe } from './pipe/crick-filter.pipe';
import { FormsModule } from '@angular/forms';
import { PlayFilterPipe } from './pipe/play-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostCardComponent,
    MobileCardComponent,
    SummaryPipe,
    
    Posts1Component,
    Mob1Component,
    PipesComponent,
    CrickFilterPipe,
    PlayFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
