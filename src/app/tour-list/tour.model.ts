export interface Tour {
    searchname: any;
    _id: string;
    name: any;
    duration: number;
    maxGroupSize: number;
    difficulty: string;
    ratingsAverage: number;
    ratingsQuantity: number;
    price: number;
    summary: string;
    description: string;
    imageCover: string;
    images: string[];
    startDates: string[];
    secretTour: boolean;
    slug: string;
    durationWeeks: number;
    id: string;
  }
  
  export interface TourResponse {
    status: string;
    results: number;
    data: {
      tours: Tour[];
    };
  }
  