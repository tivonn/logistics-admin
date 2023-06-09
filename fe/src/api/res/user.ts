export interface UserRes {
  id: number
  username: string
  account: string
  role: 'admin' | 'finance' | 'staff' | 'external' | ''
  phone_number: string
  is_modified_password: boolean
}
