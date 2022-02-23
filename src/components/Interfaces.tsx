export interface Address{
    street: string;
    number: number;
    postCode: string
}

export interface User {
  name: string;
  country: string;
  age: number;
  address: Address,
  admin: boolean;
}