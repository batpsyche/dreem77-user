import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MatchService } from '../../../Service/Match/match.service';
import { Match } from '../../../Model/match';
import { Globals } from '../../../Model/global';
import { filter } from 'rxjs/operators';
import { SidebarComponent } from '../../Partial/sidebar/sidebar.component';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public currentRoute: string;
    @ViewChild(SidebarComponent) sidebar;
    constructor(private router: Router, private matchService: MatchService, public globals: Globals, public matchModel: Match) {
        this.router.events.pipe(filter(event => event instanceof NavigationEnd))
            .subscribe((res: any) => {
                this.currentRoute = res.url;
            });
        this.router.errorHandler = (error: any) => {
            this.router.navigate(['NotFound']); // or redirect to default route
        };
    }

    ngOnInit(): void {
        // if (this.globals.token == undefined) {
        //     this.logout();
        // }
    }

    logout() {
        this.matchService.logout().subscribe((result) => {
            this.router.navigate(['login']);
            localStorage.clear();
            window.location.reload();

        }, (err) => {

        });
    }
}
