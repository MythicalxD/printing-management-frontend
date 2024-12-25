"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import TopBar from "@/app/components/top_bar";
import SidePanel from "@/app/components/side_pannel";
import { Progress } from "@/app/components/progress_bar";
import axios from "axios";
import { Task } from "@/types/type";

async function getData(token: string, id: number): Promise<Task> {
  const dataToSend = {
      id: token
  };

  const apiUrl = "/api/fetchTasks";

   const response = await axios.post(apiUrl, dataToSend);
      console.log(response.data.data.data[id]);
      return response.data.data.data[id];
}

const JobDetails: React.FC = () => {
  const params = useParams();
  const router = useRouter();

  const [tasks, setTasks] = useState<Task>();
  
    useEffect(() => {
      const fetchData = async () => {
          const authToken = document.cookie
              .split("; ")
              .find((row) => row.startsWith("token="))
              ?.split("=")[1];
  
          const fetchedData = await getData(authToken!, Number(params.id));
          setTasks(fetchedData);
      };
  
      fetchData(); // Call the fetchData function when the component mounts
  
      // Optionally, you can include a cleanup function here if needed
  }, []); // The empty dependency array ensures that the effect runs only once
 
  if (!tasks) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  // Function to adjust the attachment URL
  const getAttachmentUrl = (relativePath: string) => {
    const basePath = "./uploads/";
    const serverPath = "http://192.168.1.12/printing/uploads/";
    return relativePath.startsWith(basePath)
      ? relativePath.replace(basePath, serverPath)
      : relativePath;
  };

  return (
    <div className="flex min-h-screen">
      <SidePanel />
      <div className="flex-1 flex flex-col">
        <TopBar title="Job Details" />
        <div className="p-6">
          <div className="bg-white shadow-md rounded-md p-6">
            <h1 className="text-4xl font-bold mb-6 flex items-center gap-4">
              {tasks.title}
              <span className="bg-green-200 text-green-700 text-sm font-semibold px-3 py-1 rounded-md">
                {"PENDING"}
              </span>
            </h1>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-lg mb-4">
                  <strong>Client:</strong> {tasks.client}
                </p>
                <p className="text-lg mb-4">
                  <strong>Due Date:</strong> {tasks.due_date}
                </p>
                <p className="text-lg mb-4">
                  <strong>Priority:</strong> {tasks.priority}
                </p>
              </div>
              <div>
                <p className="text-lg mb-4">
                  <strong>Description:</strong> {tasks.description}
                </p>
                <p className="text-lg mb-4 text-gray-600 italic">
                  <strong>Tips:</strong> {"None"}
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Attachments</h2>
            <ul className="list-disc pl-6">
              {tasks.documents && tasks.documents.map((attachment: any, index: number) => (
                <li key={index}>
                  <a
                    href={getAttachmentUrl(attachment)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {attachment.split("/").pop()} {/* Extract file name */}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => router.back()}
            className="mt-6 bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
