import React from 'react';
import { useQuery } from '@tanstack/react-query';
import JobListing from './jobListing';
import { FadeLoader } from 'react-spinners';

const fetchJobs = async (isHome) => {
  const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
  const res = await fetch(apiUrl);
  if (!res.ok) {
    throw new Error('Failed to fetch jobs');
  }
  return res.json();
};

const JobListings = ({ isHome = true }) => {
  const { data: jobs = [], isLoading, isError, error } = useQuery({
    queryKey: ['jobs', isHome],
    queryFn: () => fetchJobs(),
    staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
  });
  

  const recentJobs = isHome ? jobs.slice(0, 3) : jobs;

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {isLoading ? (
            <FadeLoader className="size-50 mx-auto" />
          ) : isError ? (
            <p className="text-red-500 text-center">{error.message}</p>
          ) : recentJobs.length > 0 ? (
            recentJobs.map((job) => <JobListing key={job.id} job={job} />)
          ) : (
            <p className="text-gray-500 text-center">No jobs found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobListings;