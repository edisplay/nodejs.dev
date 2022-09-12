export interface NavigationSectionItem {
  slug: string;
  title: string;
  category: string;
}

export interface NavigationSectionData {
  [index: string]: { category: string; data: NavigationSectionItem[] };
}

export interface SideNavBarItem {
  title: string;
  slug: string;
}
