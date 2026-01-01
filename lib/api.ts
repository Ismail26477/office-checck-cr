// API client functions for attendance tracking system

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"

// Auth API
export const authApi = {
  async login(email: string, password: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })
      return response.json()
    } catch (error) {
      console.error("Login error:", error)
      return { success: false, error: "Failed to login" }
    }
  },

  async register(userData: {
    id: string
    name: string
    email: string
    password: string
    employeeId: string
    department: string
    role: "employee" | "admin"
  }) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      })
      return response.json()
    } catch (error) {
      console.error("Register error:", error)
      return { success: false, error: "Failed to register" }
    }
  },
}

// Attendance API
export const attendanceApi = {
  async checkIn(data: {
    employeeId: string
    employeeName: string
    location: { latitude: number; longitude: number; address: string }
    deviceInfo: { browser: string; userAgent: string }
    photoData?: string
  }) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/attendance/check-in`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      return response.json()
    } catch (error) {
      console.error("Check-in error:", error)
      return { success: false, error: "Failed to check in" }
    }
  },

  async checkOut(
    recordId: string,
    location: { latitude: number; longitude: number; address: string },
    photoData?: string,
  ) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/attendance/check-out`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ recordId, location, photoData }),
      })
      return response.json()
    } catch (error) {
      console.error("Check-out error:", error)
      return { success: false, error: "Failed to check out" }
    }
  },

  async getEmployeeRecords(employeeId: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/attendance/employee/${employeeId}`)
      return response.json()
    } catch (error) {
      console.error("Get employee records error:", error)
      return { success: false, error: "Failed to fetch records" }
    }
  },

  async getTodayRecords() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/attendance/today`)
      return response.json()
    } catch (error) {
      console.error("Get today records error:", error)
      return { success: false, error: "Failed to fetch today records" }
    }
  },

  async getRecordsByDate(date: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/attendance/date/${date}`)
      return response.json()
    } catch (error) {
      console.error("Get records by date error:", error)
      return { success: false, error: "Failed to fetch records" }
    }
  },

  async getStats() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/attendance/stats`)
      return response.json()
    } catch (error) {
      console.error("Get stats error:", error)
      return { success: false, error: "Failed to fetch stats" }
    }
  },
}

// Users API
export const usersApi = {
  async getAll() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/users`)
      return response.json()
    } catch (error) {
      console.error("Get users error:", error)
      return { success: false, error: "Failed to fetch users" }
    }
  },

  async getById(id: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/users/${id}`)
      return response.json()
    } catch (error) {
      console.error("Get user error:", error)
      return { success: false, error: "Failed to fetch user" }
    }
  },
}

// Editor Sheets API
export const editorSheetsApi = {
  async getSheets(employeeId: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/editor-sheets/${employeeId}`)
      return response.json()
    } catch (error) {
      console.error("Get sheets error:", error)
      return { success: false, error: "Failed to fetch sheets" }
    }
  },

  async createSheet(data: {
    employeeId: string
    employeeName: string
    sheetName: string
  }) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/editor-sheets`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      return response.json()
    } catch (error) {
      console.error("Create sheet error:", error)
      return { success: false, error: "Failed to create sheet" }
    }
  },

  async addTask(
    sheetId: string,
    taskData: {
      date: string
      title: string
      link: string
    },
  ) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/editor-sheets/${sheetId}/tasks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(taskData),
      })
      return response.json()
    } catch (error) {
      console.error("Add task error:", error)
      return { success: false, error: "Failed to add task" }
    }
  },

  async deleteTask(sheetId: string, taskId: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/editor-sheets/${sheetId}/tasks/${taskId}`, {
        method: "DELETE",
      })
      return response.json()
    } catch (error) {
      console.error("Delete task error:", error)
      return { success: false, error: "Failed to delete task" }
    }
  },
}
