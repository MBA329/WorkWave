
import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import {motion} from "framer-motion";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { Flex } from "@radix-ui/themes";
import * as Dialog from '@radix-ui/react-dialog';
import { Button, Text, TextField, TextArea } from '@radix-ui/themes';


const Jobpage: React.FC = () => {
  const navigate = useNavigate();
  const job = useLoaderData;

  const handleDelete = async () => {
  }
 
  const editJob = ()=>{

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
                  <Dialog.Root>
                    <Dialog.Trigger asChild>
                      <Button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg">
                        Edit Job
                      </Button>
                    </Dialog.Trigger>

                    <Dialog.Portal>
                      <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                      <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-2xl">
                        <Dialog.Title className="text-xl font-bold mb-4">Edit Job</Dialog.Title>
                        <Dialog.Description className="text-gray-600 mb-6">
                          Make changes to the job listing.
                        </Dialog.Description>

                        <Flex direction="column" gap="3">
                          {/* Job Fields */}
                          <label>
                            <Text as="div" size="2" mb="1" weight="bold">Job Title</Text>
                            <TextField.Root defaultValue="Senior React Developer" placeholder="Enter job title" />
                          </label>

                          <label>
                            <Text as="div" size="2" mb="1" weight="bold">Job Type</Text>
                            <TextField.Root defaultValue="Full-Time" placeholder="e.g. Full-Time, Part-Time" />
                          </label>

                          <label>
                            <Text as="div" size="2" mb="1" weight="bold">Location</Text>
                            <TextField.Root defaultValue="Boston, MA" placeholder="Enter job location" />
                          </label>

                          <label>
                            <Text as="div" size="2" mb="1" weight="bold">Salary</Text>
                            <TextField.Root defaultValue="$70K - $80K" placeholder="Enter salary range" />
                          </label>

                          <label>
                            <Text as="div" size="2" mb="1" weight="bold">Job Description</Text>
                            <TextArea
                              defaultValue="We are seeking a talented Front-End Developer to join our team in Boston, MA..."
                              placeholder="Enter job description"
                              rows={4}
                            />
                          </label>

                          {/* Company Fields */}
                          <label>
                            <Text as="div" size="2" mb="1" weight="bold">Company Name</Text>
                            <TextField.Root defaultValue="NewTek Solutions" placeholder="Enter company name" />
                          </label>

                          <label>
                            <Text as="div" size="2" mb="1" weight="bold">Company Description</Text>
                            <TextArea
                              defaultValue="NewTek Solutions is a leading technology company..."
                              placeholder="Enter company description"
                              rows={4}
                            />
                          </label>

                          <label>
                            <Text as="div" size="2" mb="1" weight="bold">Contact Email</Text>
                            <TextField.Root defaultValue="contact@teksolutions.com" placeholder="Enter contact email" />
                          </label>

                          <label>
                            <Text as="div" size="2" mb="1" weight="bold">Contact Phone</Text>
                            <TextField.Root defaultValue="555-555-5555" placeholder="Enter contact phone number" />
                          </label>
                        </Flex>

                        <Flex gap="3" mt="4" justify="end">
                          <Dialog.Close asChild>
                            <Button variant="soft" color="gray">
                              Cancel
                            </Button>
                          </Dialog.Close>
                          <Dialog.Close asChild>
                            <Button onClick={() => console.log('Save clicked')}>
                              Save
                            </Button>
                          </Dialog.Close>
                        </Flex>
                      </Dialog.Content>
                    </Dialog.Portal>
                  </Dialog.Root>

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

export default Jobpage ;
