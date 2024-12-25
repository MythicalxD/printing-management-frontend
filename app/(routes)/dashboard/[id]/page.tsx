"use client";

import React from "react";
import { useRouter, useParams } from "next/navigation";
import TopBar from "@/app/components/top_bar";
import SidePanel from "@/app/components/side_pannel";
import { Progress } from "@/app/components/progress_bar";

const JobDetails: React.FC = () => {
  const params = useParams();
  const router = useRouter();

  // Simulate job data for now
  const jobData = {
    id: params?.id || "1",
    title: "Brochure Printing",
    client: "ABC Corp",
    status: "In Progress",
    progress: 65, // Example progress percentage
    dueDate: "2024-01-10",
    priority: "High",
    description: "Print 1000 brochures with full-color design.",
    tips: "Ensure to use high-quality images for better results.",
    attachments: [
      { name: "Design File", link: "/files/design.pdf" },
      { name: "Specification Document", link: "/files/specs.pdf" },
    ],
  };

  return (
    <div className="flex min-h-screen">
      <SidePanel />
      <div className="flex-1 flex flex-col">
        <TopBar title="Job Details" />
        <div className="p-6">
          <div className="bg-white shadow-md rounded-md p-6">
            <h1 className="text-4xl font-bold mb-6 flex items-center gap-4">
              {jobData.title}
              <span className="bg-green-200 text-green-700 text-sm font-semibold px-3 py-1 rounded-md">
                {jobData.status}
              </span>
            </h1>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-lg mb-4"><strong>Client:</strong> {jobData.client}</p>
                <p className="text-lg mb-4"><strong>Due Date:</strong> {jobData.dueDate}</p>
                <p className="text-lg mb-4"><strong>Priority:</strong> {jobData.priority}</p>
              </div>
              <div>
                <p className="text-lg mb-4"><strong>Description:</strong> {jobData.description}</p>
                <p className="text-lg mb-4 text-gray-600 italic"><strong>Tips:</strong> {jobData.tips}</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Progress</h2>
            <Progress value={jobData.progress} max={100} />
            <p className="text-sm text-gray-500 mt-2">{jobData.progress}% Completed</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Attachments</h2>
            <ul className="list-disc pl-6">
              {jobData.attachments.map((attachment, index) => (
                <li key={index}>
                  <a
                    href={attachment.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {attachment.name}
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
