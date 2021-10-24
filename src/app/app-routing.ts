import { RouterModule } from "@angular/router";
import { VideoListComponent } from "./components/video-list/video-list.component";

// Definir las rutas principales de la aplicación
const routes = [
    {path: 'videos', component: VideoListComponent},
    {path: '', redirectTo: 'videos', pathMatch: 'full'}
];

// Exportar las rutas registrarlas en el modulo principal de la aplicación (app.module)
export const routing = RouterModule.forRoot(routes);
