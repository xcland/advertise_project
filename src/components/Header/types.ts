export interface MenuItemInfoType {
  name: string
  menuChildren: Array<MenuItemChild>
  url?: string
}

export interface MenuItemChild {
  label: string
  url: string
}
