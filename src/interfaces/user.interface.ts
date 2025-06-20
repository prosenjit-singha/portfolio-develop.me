export interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
  image: string
  university: string
  company: {
    title: string
  }
  location: {
    lat: string
    lon: string
  }
}

export interface IUsersApiResponse {
  users: User[]
  total: number
  skip: number
  limit: number
}
