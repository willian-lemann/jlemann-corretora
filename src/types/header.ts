export interface HeaderContent {
  title: string;
  navigation: Array<{
    id: number;
    href: string;
    name: string;
  }>;
  subheaderTitle: string;
  subheaderDescription: string;
}
