export interface TripFormData {
  destination: string;
  duration: string;
  travelers: string;
  children: string;
  budget: string;
  transportMode: string;
  startDate: string;
  accommodationType: string;
  localTransport: string;
  activities: string;
  dreamTrip: string;
  fullName: string;
  city: string;
  email: string;
  countryCode: string;
  phone: string;
}

export interface FormErrors {
  [key: string]: string;
}
