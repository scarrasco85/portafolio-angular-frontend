//Módulos necesarios
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Necesario para poder hacer peticiones Ajax
import { HttpClientModule} from '@angular/common/http';
//Necesario para usar Two data binding y formularios
import { FormsModule } from '@angular/forms';
//Configuración de rutas
import { AppRoutingModule } from './app-routing.module';

//Componentes aplicación
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailProjectComponent } from './components/detail-project/detail-project.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { CvComponent } from './components/cv/cv.component';
//Componente ngx-pagination
import { NgxPaginationModule } from 'ngx-pagination';
// pdf viewer
import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    CreateProjectComponent,
    ContactComponent,
    ErrorComponent,
    DetailProjectComponent,
    EditProjectComponent,
    CvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
