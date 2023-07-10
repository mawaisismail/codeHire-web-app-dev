import React, { FC, useEffect, useState } from "react";
import { JobCreateForm } from "@/components/company/job/jobCreateForm/jobCreateForm";
import { IJob } from "../../../../../constants/interfaces/jobs";
import { useLazyQuery } from "@apollo/client";
import { GET_JOB_BY_ID } from "../../../../../constants/graphQL/job";
import { useRouter } from "next/router";
export const jobInitialValues = {
  title: "",
  description: "",
  responsibilities: "",
  qualification: "",
  skills: [],
  experience: "",
  employmentType: [],
  position: "",
  offer_salary: "",
  coverImg: "",
  location: "",
  freeWords: "",
};

const Index: FC = () => {
  const {
    query: { jobId },
  } = useRouter();
  const [initialValues, setInitialValues] =
    useState<typeof jobInitialValues>(jobInitialValues);
  const [job, setJob] = useState<IJob | null>(null);
  const [getJob, { data, loading, error }] = useLazyQuery(GET_JOB_BY_ID);

  useEffect(() => {
    if (data?.getJobById) {
      setJob(data?.getJobById);
    }
  }, [data?.getJobById]);

  useEffect(() => {
    if (job) {
      setInitialValues({
        coverImg: job?.coverImg ?? "",
        description: job?.description ?? "",
        employmentType: (job?.employmentType as any) ?? [],
        experience: job?.experience ?? "",
        freeWords: job?.freeWords ?? "",
        location: job?.location ?? "",
        offer_salary: job?.offer_salary ?? "",
        position: job?.position ?? "",
        qualification: job?.qualification ?? "",
        responsibilities: job?.responsibilities ?? "",
        skills: (job?.skills as any) ?? [],
        title: job?.title ?? "",
      });
    }
  }, [job]);

  const getJobsForUser = async () => {
    await getJob({
      variables: {
        id: jobId,
      },
    });
  };

  useEffect(() => {
    if (jobId) getJobsForUser();
  }, [jobId]);

  return (
    <>
      <div>
        <JobCreateForm initialValues={initialValues} updateJobs={true} />
      </div>
    </>
  );
};

export default Index;
