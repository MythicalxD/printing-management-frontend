// Define the structure for individual documents
export type Document = string;

// Define the structure for an individual task
export interface Task {
  id: number;
  title: string;
  client: string;
  due_date: string;
  description: string;
  priority: "High" | "Medium" | "Low"; // Priority is restricted to specific values
  documents: Document[]; // An array of document strings
}

// Define the structure for the API response
export interface ApiResponse {
  status: "success" | "error"; // Status can either be success or error
  data: Task[]; // Data is an array of tasks
}
