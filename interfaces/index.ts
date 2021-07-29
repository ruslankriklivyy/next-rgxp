export interface IListItemTitleAndDescr {
  en: string;
  ru: string;
}

export interface IListPattern {
  id: number;
  title: IListItemTitleAndDescr;
  description: IListItemTitleAndDescr;
  pattern: string;
  placeholder: string;
  tags: string[];
  nickname: string;
}
