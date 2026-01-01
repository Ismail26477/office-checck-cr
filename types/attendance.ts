export interface Location {
  latitude: number
  longitude: number
  address: string
  accuracy?: number
  timestamp?: number
}

export interface DeviceInfo {
  browser: string
  userAgent: string
}

export interface AttendanceRecord {
  id: string
  _id?: string
  employeeId: string
  employeeName: string
  checkInTime: Date
  checkOutTime: Date | null
  location: Location
  photoData?: string
  checkOutPhotoData?: string
  date: string
  deviceInfo?: DeviceInfo
  workHours?: number
}

export interface User {
  id: string
  _id?: string
  name: string
  email: string
  employeeId: string
  role: "admin" | "manager" | "employee"
  createdAt: Date
  department?: string
  phone?: string
}
