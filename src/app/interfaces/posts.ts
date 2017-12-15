import { Image } from '../interfaces/image';

export interface Post {
  id: number;
  date: string;
  slug: string;
  link: string;
  title: {
    rendered: string;
  };
  categories?: number[];
  parent: number;
  author?: number;
  acf?: {
    title?: string,
    description?: string
    image?: Image;
    content?: [
      {
        acf_fc_layout?: string;
        text: string;
        image?: Image;
      }
    ]
  };
}
