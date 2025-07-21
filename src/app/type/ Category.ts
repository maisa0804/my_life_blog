export type Category = {
  _id: string;
    title: string;
    slug: {
      current: string;
    };
    description?: string;
    color?: {
      hex: string;
      alpha?: number;
    };
    icon?: string;
    image?: {
      asset: any;
      alt?: string;
    };
    featured: boolean;
    order?: number;
    tags?: string[];
    seo?: {
      metaTitle?: string;
      metaDescription?: string;
      keywords?: string[];
    };
    postCount: number;
  }