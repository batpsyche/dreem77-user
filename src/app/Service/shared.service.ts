import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    constructor() { }
    private toHome = new Subject();
    private showSideBar = new Subject();
    public setToHome() {
        this.toHome.next(true);
    }

    public getToHome() {
        return this.toHome.asObservable();
    }
    // Sidebar methods

    public setShowSideBar(prop) {
        this.showSideBar.next(prop);
    }

    public getShowSideBar() {
        return this.showSideBar.asObservable();
    }
}