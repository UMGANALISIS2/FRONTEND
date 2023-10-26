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
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CartService } from './services/cart.service';

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
    BrowserAnimationsModule,
    SweetAlert2Module.forRoot(),
    ToastrModule.forRoot({
      preventDuplicates: true,
      autoDismiss: true,
      closeButton: true,
      progressAnimation: "decreasing",
      newestOnTop: true
    }),
    NgxUiLoaderModule.forRoot({
      bgsColor: '#fff',
      logoUrl: 'https://i.pinimg.com/originals/13/07/b8/1307b8153968f6e9ce1020db5bab41e7.gif',
      logoPosition: 'center-center',
      blur: 50,
      text: getRandomMessage(),
      fgsType: 'square-jelly-box',
      fgsColor: '#fff',
      textPosition: 'center-center',
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpReqInterceptor,
      multi: true
    },
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


export function getRandomMessage(): string{
  const mensajes = [
    "Cargando deliciosos pasteles...",
    "Espere, se están cargando deliciosos pasteles...",
    "¡Los pasteles más sabrosos están en camino...",
    "Solo un momento, estamos preparando los pasteles...",
    "Sabrosos pasteles a punto de aparecer...",
    "La tentación se está cocinando...",
    "Infinidad de sabores están llegando...",
    "La dulzura se está cargando, un momento...",
    "Pasteles en camino...",
    "El horno está trabajando en su magia...",
    "Pronto podrás disfrutar de nuestras creaciones...",
    "¡La repostería perfecta en camino...",
    "Un festín de pasteles se avecina...",
    "El aroma de los pasteles llena el aire...",
    "Nuestros chefs están preparando obras maestras...",
    "Deliciosos pasteles recién horneados en proceso...",
  ];

  if (mensajes.length === 0) {
    return "¡Nuevos mensajes deliciosos en camino!";
  }

  const indiceAleatorio = Math.floor(Math.random() * mensajes.length);
  const mensaje = mensajes.splice(indiceAleatorio, 1)[0];

  return mensaje;

}