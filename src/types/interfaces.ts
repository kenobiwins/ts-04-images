export interface IImage {
  id:  number ;
  webformatURL: string;
  largeImageURL: string;
  tags: string ;
}

export interface IImages {
  images: {
    id: number;
    webformatURL: string;
    largeImageURL: string;
    tags: string;
  }[];
}