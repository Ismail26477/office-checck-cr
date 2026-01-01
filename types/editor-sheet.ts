export interface Task {
  _id: string
  date: string
  title: string
  link: string
  createdAt?: Date
}

export interface EditorSheet {
  _id: string
  employeeId: string
  employeeName: string
  sheetName: string
  tasks: Task[]
  createdAt?: Date
  updatedAt?: Date
}
