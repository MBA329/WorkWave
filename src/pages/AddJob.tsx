import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from '@radix-ui/react-dialog';
import { Button, Text, TextField, TextArea, Flex } from '@radix-ui/themes';

// Define the Zod schema
const formSchema = z.object({
  id: z.string().nonempty("Job ID is required"),
  title: z.string().nonempty("Job title is required"),
  type: z.enum(["Full-Time", "Part-Time", "Contract", "Internship"], {
    errorMap: () => ({ message: "Please select a valid job type" }),
  }),
  description: z.string().nonempty("Job description is required"),
  location: z.string().nonempty("Location is required"),
  salary: z.enum(
    [
      "Under $50K",
      "$50K - $60K",
      "$60K - $70K",
      "$70K - $80K",
      "$80K - $90K",
      "$90K - $100K",
      "$100K - $110K",
      "$110K - $120K",
      "Over $120K",
    ],
    {
      errorMap: () => ({ message: "Please select a valid salary range" }),
    }
  ),
  company: z.object({
    name: z.string().nonempty("Company name is required"),
    description: z.string().nonempty("Company description is required"),
    contactEmail: z
      .string()
      .nonempty("Contact email is required")
      .email("Invalid email address"),
    contactPhone: z.string().nonempty("Contact phone is required"),
  }),
});

// Infer TypeScript types from the Zod schema
type FormData = z.infer<typeof formSchema>;

const AddJob: React.FC = () => {
  const navigate = useNavigate();

  // Initialize react-hook-form with Zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // Handle form submission
  const onSubmit = async (data: FormData) => {
    try{    const response = await fetch("api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      // Handle error response
      console.error("Failed to add job:", response.statusText);
      return;
    }
    const result = await response.json();
    console.log("Job added successfully:", result);

    navigate("/jobs"); }
// Navigate to the jobs page after submission

    catch (error) {
      console.error("Error adding job:", error);
    }
  };

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center pt-30">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Add Job</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Job ID */}
          <div>
            <label htmlFor="id" className="block text-gray-700 font-bold mb-2">
              Job ID
            </label>
            <input
              id="id"
              type="text"
              {...register("id")}
              className={`border rounded w-full py-2 px-3 ${
                errors.id ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter job ID"
            />
            {errors.id && (
              <p className="text-red-500 text-sm mt-1">{errors.id.message}</p>
            )}
          </div>

          {/* Job Title */}
          <div>
            <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
              Job Title
            </label>
            <input
              id="title"
              type="text"
              {...register("title")}
              className={`border rounded w-full py-2 px-3 ${
                errors.title ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter job title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
            )}
          </div>

          {/* Job Type */}
          <div>
            <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
              Job Type
            </label>
            <select
              id="type"
              {...register("type")}
              className={`border rounded w-full py-2 px-3 ${
                errors.type ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
            {errors.type && (
              <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>
            )}
          </div>

          {/* Job Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Job Description
            </label>
            <textarea
              id="description"
              {...register("description")}
              className={`border rounded w-full py-2 px-3 ${
                errors.description ? "border-red-500" : "border-gray-300"
              }`}
              rows={4}
              placeholder="Enter job description"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className="block text-gray-700 font-bold mb-2">
              Location
            </label>
            <input
              id="location"
              type="text"
              {...register("location")}
              className={`border rounded w-full py-2 px-3 ${
                errors.location ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter job location"
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
            )}
          </div>

          {/* Salary */}
          <div>
            <label htmlFor="salary" className="block text-gray-700 font-bold mb-2">
              Salary Range
            </label>
            <select
              id="salary"
              {...register("salary")}
              className={`border rounded w-full py-2 px-3 ${
                errors.salary ? "border-red-500" : "border-gray-300"
              }`}
            >
            
              <option value="Under $50K">Under $50K</option>
              <option value="$50K - $60K">$50K - $60K</option>
              <option value="$60K - $70K">$60K - $70K</option>
              <option value="$70K - $80K">$70K - $80K</option>
              <option value="$80K - $90K">$80K - $90K</option>
              <option value="$90K - $100K">$90K - $100K</option>
              <option value="$100K - $110K">$100K - $110K</option>
              <option value="$110K - $120K">$110K - $120K</option>
              <option value="Over $120K">Over $120K</option>
            </select>
            {errors.salary && (
              <p className="text-red-500 text-sm mt-1">{errors.salary.message}</p>
            )}
          </div>

          {/* Company Name */}
          <div>
            <label
              htmlFor="company.name"
              className="block text-gray-700 font-bold mb-2"
            >
              Company Name
            </label>
            <input
              id="company.name"
              type="text"
              {...register("company.name")}
              className={`border rounded w-full py-2 px-3 ${
                errors.company?.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter company name"
            />
            {errors.company?.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.company.name.message}
              </p>
            )}
          </div>

          {/* Company Description */}
          <div>
            <label
              htmlFor="company.description"
              className="block text-gray-700 font-bold mb-2"
            >
              Company Description
            </label>
            <textarea
              id="company.description"
              {...register("company.description")}
              className={`border rounded w-full py-2 px-3 ${
                errors.company?.description ? "border-red-500" : "border-gray-300"
              }`}
              rows={4}
              placeholder="Enter company description"
            ></textarea>
            {errors.company?.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.company.description.message}
              </p>
            )}
          </div>

          {/* Contact Email */}
          <div>
            <label
              htmlFor="company.contactEmail"
              className="block text-gray-700 font-bold mb-2"
            >
              Contact Email
            </label>
            <input
              id="company.contactEmail"
              type="email"
              {...register("company.contactEmail")}
              className={`border rounded w-full py-2 px-3 ${
                errors.company?.contactEmail ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter contact email"
            />
            {errors.company?.contactEmail && (
              <p className="text-red-500 text-sm mt-1">
                {errors.company.contactEmail.message}
              </p>
            )}
          </div>

          {/* Contact Phone */}
          <div>
            <label
              htmlFor="company.contactPhone"
              className="block text-gray-700 font-bold mb-2"
            >
              Contact Phone
            </label>
            <input
              id="company.contactPhone"
              type="text"
              {...register("company.contactPhone")}
              className={`border rounded w-full py-2 px-3 ${
                errors.company?.contactPhone ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter contact phone"
            />
            {errors.company?.contactPhone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.company.contactPhone.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded w-full"
            >
              Add Job
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddJob;