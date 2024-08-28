type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type City = {
  name: string;
  location: Location;
};

type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

export type DescriptionOffer = {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
}

type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type Comment = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: User;
};

export type ChosenOffer = Offer & DescriptionOffer;
export type Comments = Comment[];
export type Offers = Offer[];
