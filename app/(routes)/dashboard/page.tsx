"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TopBar from "@/app/components/top_bar";
import SidePanel from "@/app/components/side_pannel";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import OverviewPanel from "@/app/components/overview";
import axios from "axios";
import { ApiResponse, Task } from "@/types/type"; // Assuming Task is defined in your types

async function getData(token: string): Promise<Task[]> {
  const dataToSend = {
      id: token
  };

  const apiUrl = "/api/fetchTasks";

  try {
      const response = await axios.post(apiUrl, dataToSend);
      console.log(response.data.data.data);
      return response.data.data.data;
  } catch (error: any) {
      //window.location.href = "/auth";
      console.error();
      return error;
  }
}

const JobList: React.FC = () => {
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchData = async () => {
        const authToken = document.cookie
            .split("; ")
            .find((row) => row.startsWith("token="))
            ?.split("=")[1];

        const fetchedData = await getData(authToken!);
        setTasks(fetchedData);
    };

    fetchData(); // Call the fetchData function when the component mounts

    // Optionally, you can include a cleanup function here if needed
}, []); // The empty dependency array ensures that the effect runs only once

  return (
    <div className="flex min-h-screen">
      <SidePanel />
      <div className="flex-1 flex flex-col">
        <TopBar title="Job Overview" />
        <OverviewPanel />
        <div className="p-6">
          <div className="bg-white shadow-md rounded-md p-6">
            <h2 className="text-3xl font-bold mb-6">Job List</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Attachments</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tasks.map((job) => (
                  <TableRow key={job.id}>
                    <TableCell>{job.id}</TableCell>
                    <TableCell>
                      <a
                        href={`/dashboard/${job.id}`}
                        className="text-blue-500 hover:underline"
                      >
                        {job.title}
                      </a>
                    </TableCell>
                    <TableCell>{job.client}</TableCell>
                    <TableCell>{job.due_date}</TableCell>
                    <TableCell>
                      <Badge
                        className={
                          job.priority === "High"
                            ? "bg-red-200 text-red-700"
                            : job.priority === "Medium"
                            ? "bg-yellow-200 text-yellow-700"
                            : "bg-green-200 text-green-700"
                        }
                      >
                        {job.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>{job.documents.length}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobList;
