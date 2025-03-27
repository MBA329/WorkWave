import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";

const Jobpage = () => {
  const job = useLoaderData();
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this job?");
    if (confirmDelete) {
      try {
        const res = await fetch(`/api/jobs/${job.id}`, {
          method: "DELETE",
        });
        if (!res.ok) {
          throw new Error("Failed to delete job");
        }
        alert("Job deleted successfully!");
        navigate("/jobs",{state:{refetch:true}});
      } catch (error) {
        console.error("Error deleting job:", error.message);
        alert("Failed to delete the job. Please try again.");
      }
    }
  };
const editJob= async()
  return (
    <main className="min-h-screen bg-blue-50 py-10">
      {job ? (
        <section className="container mx-auto max-w-6xl bg-white shadow-md rounded-lg p-8">
          {/* Header Section */}
          <header className="mb-6">
            <button
              onClick={() => navigate("/jobs")}
              className="text-indigo-600 hover:text-indigo-800 font-semibold"
            >
              &larr; Back to Job Listings
            </button>
            <h1 className="text-3xl font-bold text-indigo-600 mt-4">{job.title}</h1>
            <p className="text-gray-600 mt-2">{job.type} | {job.location}</p>
          </header>

          {/* Main Content Section */}
          <article className="grid grid-cols-5 gap-6">
            {/* Job Details */}
            <section className="col-span-3">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Job Description</h2>
                <p className="text-gray-700">{job?.description||'no available description'}</p>
                <p className="text-gray-700 mt-4 font-semibold">Salary: {job.salary}</p>
              </div>
            </section>

            {/* Company Info and Actions */}
            <aside className="col-span-2 flex flex-col gap-6">
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
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
                    Edit Job
                  </button>
                  <button
                    onClick={handleDelete}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg"
                  >
                    Delete Job
                  </button>
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

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch job details");
  }
  const data = await res.json(); 
   console.log(data);

  return data;
};

export { Jobpage as default, jobLoader };
