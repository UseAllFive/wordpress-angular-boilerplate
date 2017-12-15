export interface Image {
  id?: number;
  description?: string;
  caption?: string;
  filename?: string;
  name?: string;
  height?: number;
  width?: number;
  url?: string;
  sizes?: {
    large?: string;
    'large-height'?: number;
    'large-width'?: number;
    medium?: string;
    'medium-height'?: number;
    'medium-width'?: number;
    medium_large?: string;
    'medium_large-height'?: number;
    'medium_large-width'?: number;
    thumbnail?: string;
    'thumbnail-height'?: number;
    'thumbnail-width'?: number;
  };
}
