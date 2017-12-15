export interface Page {
  id: number;
  date: string;
  slug: string;
  link: string;
  title: {
    rendered: string;
  };
  excerpt?: {
    rendered: string;
  };
  categories?: number[];
  parent: number;
  better_featured_image?: {
    source_url?: string;
  };
  acf?: {
    title?: string,
    description?: string
  };
  _embedded?: {
    author?: any[]
  };
}
