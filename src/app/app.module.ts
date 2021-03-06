import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstPageComponent } from './Pages/First page/first-page.component';
import { SecondPageComponent } from './Pages/Second page/second-page.component';
import { ThirdPageComponent } from './Pages/Third page/third-page.component';
import { ForthPageComponent } from './Pages/Forth page/forth-page.component';
import { FifthPageComponent } from './Pages/Fifth page/fifth-page.component';
import { SixthPageComponent } from './Pages/Sixth page/sixth-page.component';
import { SeventhPageComponent } from './Pages/Seventh page/seventh-page.component';
import { EightPageComponent } from './Pages/Eight page/eight-page.component';
import { NinethPageComponent } from './Pages/Nineth page/nineth-page.component';

import { BorderLineComponent } from './Shared/border-line.component';
import { BotBorderLineComponent } from './Shared/bot-border-line.component';

import { CountoModule } from 'angular2-counto';
import { MnFullpageModule } from 'ngx-fullpage';
import { SimpleTimer } from 'ng2-simple-timer';
import { SlickModule } from 'ngx-slick';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    ForthPageComponent,
    FifthPageComponent,
    SixthPageComponent,
    SeventhPageComponent,
    EightPageComponent,
    NinethPageComponent,
    BorderLineComponent,
    BotBorderLineComponent,
  ],
  imports: [
    BrowserModule,
    MnFullpageModule.forRoot(),
    CountoModule,
    SlickModule.forRoot()
  ],
  providers: [SimpleTimer],
  bootstrap: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    ForthPageComponent,
    FifthPageComponent,
    SixthPageComponent,
    SeventhPageComponent,
    EightPageComponent,
    NinethPageComponent,
    BorderLineComponent,
    BotBorderLineComponent,
  ]
})
export class AppModule { }
