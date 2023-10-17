import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpReqInterceptor } from './interceptors/HttpInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    NgxUiLoaderModule.forRoot({
      logoUrl: 'https://i.pinimg.com/originals/13/07/b8/1307b8153968f6e9ce1020db5bab41e7.gif',
      logoPosition: 'top-center',
      bgsPosition: 'top-center',
      hasProgressBar: true,
      text: 'Cargando...',
      bgsType: 'cube-grid',
      blur: 50,
      fgsColor: '#fff',
      textPosition: 'center-center'
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpReqInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
