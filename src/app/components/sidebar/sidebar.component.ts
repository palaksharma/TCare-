import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/maps",
    title: "Project Details",
    rtlTitle: "خرائط",
    icon: "icon-pin",
    class: "" },

    {
      path: "/typography",
      title: "JOB Meta Data",
      rtlTitle: "قائمة الجدول",
      icon: "icon-puzzle-10",
      class: ""
    },
  
  // {
  //   path: "/notifications",
  //   title: "Rule Settings",
  //   rtlTitle: "إخطارات",
  //   icon: "icon-bell-55",
  //   class: ""
  // },

  
  // {
  //   path: "/tables",
  //   title: "Talend Components",
  //   rtlTitle: "قائمة الجدول",
  //   icon: "icon-puzzle-10",
  //   class: ""
  // }
  
];
export const ReportingROUTES: RouteInfo[] = [


 
  // ,
  // {
  //   path: "/chat ",
  //   title: "Rule Settings",
  //   rtlTitle: " ",
  //   icon: " ",
  //   class: ""
  // }
];
export const OUTERROUTES: RouteInfo[] = [
  {
    path: " ",
    title: "",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  }
];
export const ReportingOUTERROUTES: RouteInfo[] = [ 
   {
    path: " ",
    title: "",
    rtlTitle: "خرائط",
    icon: "icon-pin",
    class: ""
   }
];


@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  ReportingmenuItems: any[];
  outermenuItems: any[];
  ReportingoutermenuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.outermenuItems = OUTERROUTES.filter(outermenuItem => outermenuItem);
    this.ReportingoutermenuItems = ReportingOUTERROUTES.filter(reportingOutermenuItem => reportingOutermenuItem);
    this.ReportingmenuItems = ReportingROUTES.filter(reportermenuItem => reportermenuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
