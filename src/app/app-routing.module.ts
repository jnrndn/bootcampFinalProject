import { AddComponent } from './student/add/add.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { StudentComponent } from './student/student.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';


const routes: Routes = [
    { path: 'students', component: StudentComponent },
    { path: 'detail/:id', component: StudentDetailComponent },
    { path: 'add', component: AddComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'students' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
