import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import {motion} from "framer-motion";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { Flex, Button } from "@radix-ui/themes";

const Jobpage: React.FC = () => {
  const job = useLoaderData();
  const navigate = useNavigate();

  const handleDelete = async () => {
    
      try {
        const res = await fetch(`/api/jobs/${job.id}`, {
          method: "DELETE",
        });
        if (!res.ok) {
          throw new Error("Failed to delete job");
        }
        
        navigate("/jobs",{state:{refetch:true}});
      } catch (error) {
        console.error("Error deleting job:", error.message);
        alert("Failed to delete the job. Please try again.");
      }
    
  };
  const editJob = ()=>{
    navigate(`/jobs/edit/${job.id}`);
  }
  return (
    <main className="min-h-screen bg-blue-50 py-10">
      {job ? (
        <section className="container mx-auto max-w-6xl bg-white mt-10 shadow-md rounded-lg p-8">
          {/* Header Section */}
          <header className="mb-6">
            <button
              onClick={() => navigate("/jobs")}
              className="text-indigo-600 cursor-pointer hover:text-indigo-800 font-semibold"
            >
              &larr; Back to Job Listings
            </button>
            <h1 className="text-3xl font-bold text-indigo-600 mt-4">{job.title}</h1>
            <p className="text-gray-600 mt-2">{job.type} | {job.location}</p>
          </header>

          {/* Main Content Section */}
          <article className="grid md:grid-cols-5 gap-6">
            {/* Job Details */}
            <section className="md:col-span-3">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Job Description</h2>
                <p className="text-gray-700">{job?.description||'no available description'}</p>
                <p className="text-gray-700 mt-4 font-semibold">Salary: {job.salary}</p>
              </div>
            </section>

            {/* Company Info and Actions */}
            <aside className="md:col-span-2 flex flex-col gap-6">
              {/* Company Info */}
              <div className="bg-gray-100 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Company Info</h2>
                <p className="text-gray-700">{job.company.description}</p>
                <hr className="my-4" />
                <h3 className="font-semibold">Contact Email:</h3>
                <p className="text-gray-700 bg-blue-300 px-2">{job.company.contactEmail}</p>
                <h3 className="font-semibold mt-4">Contact Phone:</h3>
                <p className="text-gray-700 bg-blue-300 px-2">{job.company.contactPhone || "N/A"}</p>
              </div>

              {/* Manage Job Actions */}
              <div className="bg-gray-100 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Manage Job</h2>
                <div className="flex flex-col gap-4">
                  {/* Edit Job Button */}
                  <button
                    onClick={editJob}
                    className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white font-bold py-2 px-4 rounded-lg"
                  >
                    Edit Job
                  </button>

                  {/* Delete Job Button with AlertDialog */}
                  <AlertDialog.Root>
                    <AlertDialog.Trigger asChild>
                      <motion.button
                       initial={{ scale: 1 }}
                        transition={{ duration: 1, ease: "backInOut" }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-red-500 hover:bg-red-600 cursor-pointer text-white font-bold py-2 px-4 rounded-lg"
                      >
                        Delete Job
                      </motion.button>
                    </AlertDialog.Trigger>

                    <AlertDialog.Portal>
                      <AlertDialog.Overlay className="fixed inset-0 bg-gray-50/50" />
                      <AlertDialog.Content className="fixed bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <AlertDialog.Title className="text-lg font-bold mb-4">
                          Confirm Deletion
                        </AlertDialog.Title>
                        <AlertDialog.Description className="text-gray-600 mb-6">
                          Are you sure you want to delete this job? This action cannot be
                          undone.
                        </AlertDialog.Description>
                        <div className="flex justify-end gap-4">
                          <AlertDialog.Cancel asChild>
                            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-lg">
                              Cancel
                            </button>
                          </AlertDialog.Cancel>
                          <AlertDialog.Action asChild>
                            <button
                              onClick={handleDelete}
                              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg"
                            >
                              Delete
                            </button>
                          </AlertDialog.Action>
                        </div>
                      </AlertDialog.Content>
                    </AlertDialog.Portal>
                  </AlertDialog.Root>
                </div>
              </div>
            </aside>
          </article>
        </section>
      ) : (
        <div className="flex justify-center items-center h-full">
          <FadeLoader />
        </div>
      )}
    </main>
  );
};

const jobLoader = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch job details");
  }
  const data = await res.json(); 
   console.log(data);

  return data;
};

export { Jobpage as default, jobLoader };
