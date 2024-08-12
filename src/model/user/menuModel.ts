class MenuItem {
  userId: string;
  groupId: number;
  groupName: string;
  menuId: number;
  order: number;
  title: string;
  routerLink: string;
  parent: number;
  icon: string;
  view: string | null;
  subMenu: MenuItem[];

  constructor(
    userId: string,
    groupId: number,
    groupName: string,
    menuId: number,
    order: number,
    title: string,
    routerLink: string,
    parent: number,
    icon: string,
    view: string | null,
    subMenu: MenuItem[] = []
  ) {
    this.userId = userId;
    this.groupId = groupId;
    this.groupName = groupName;
    this.menuId = menuId;
    this.order = order;
    this.title = title;
    this.routerLink = routerLink;
    this.parent = parent;
    this.icon = icon;
    this.view = view;
    this.subMenu = subMenu;
  }
}

class MenuItemsResponse {
  responseCode: string;
  responseDesc: string;
  responseData: MenuItem[];

  constructor(responseCode: string, responseDesc: string, responseData: MenuItem[]) {
    this.responseCode = responseCode;
    this.responseDesc = responseDesc;
    this.responseData = responseData;
  }
}

export { MenuItem, MenuItemsResponse };
