import {Component} from '@angular/core';
import {UserService} from "../../user-mgmt/user.service";
import {UserMgmtModule} from "../../user-mgmt/user-mgmt.module";
import {Cookie} from "../cookies.service";

@Component({
  selector: 'app-nav',
  template: require('./app-nav.component.html!text'),
  providers: [UserMgmtModule],
  styles: [require('./app-nav.component.css!text')]
} as Component)
export class AppNavComponent {
  navCollapsed: boolean = true;


  toggleNavigation(): void {
    this.navCollapsed = !this.navCollapsed;
  };

  whoIsThere(): string {
    return Cookie.get("cookie1");
  }

  checkIfEmpty(): boolean {
    if(Cookie.get("cookie1") != "") {
      return true;
    } else {
      return false;
    }
  }
}
