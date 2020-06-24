import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { CandidatoComponent } from "./candidatos/candidato/candidato.component";
import { CandidatoListComponent } from "./candidatos/candidato-list/candidato-list.component";
import { CandidatosComponent } from "./candidatos/candidatos.component";
import { CandidatosService } from "./shared/candidatos.service";
import { FormsModule } from "@angular/forms";
// import { ToastrModule } from "ngx-toastr";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    CandidatosComponent,
    CandidatoComponent,
    CandidatoListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    // BrowserAnimationsModule,
    // ToastrModule.forRoot(),
  ],
  providers: [CandidatosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
