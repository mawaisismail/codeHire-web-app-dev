import { Container } from "@mui/material";
import styles from "./jobSearch.module.scss";
import { Pagination } from "@/components/common/pagination/pagination";
import { GCompanySearch, GSearch } from "@/components/common/search/g-search";
import { PaginationDetails } from "@/components/common/pagination/paginationDetails/paginationDetails";
import { JobCard } from "@/components/company/job/jobCard/jobCard";
import {
  GET_ALL_JOBS_FOR_USERS,
  GET_FILTER_JOBS,
} from "../../../../../constants/graphQL/job";
import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { IJob } from "../../../../../constants/interfaces/jobs";
import { useRouter } from "next/router";
import { routes } from "../../../../../constants/routes";
import { FILTER_USERS } from "../../../../../constants/graphQL/user";
import { IUser } from "../../../../../utils/context/reducer";

export const JobSearch = () => {
  const { push } = useRouter();
  const [description, setDescription] = useState(""); // string type
  const [responsibilities, setResponsibilities] = useState(""); // string type
  const [offer_salary, setOfferSalary] = useState(""); // number type
  const [position, setPosition] = useState(""); // string type
  const [skills, setSkills] = useState(""); // array type
  const [title, setTitle] = useState(""); // string type
  const [jobs, setJobs] = useState<Array<IJob>>([]);
  const [getJobsForUser, { data, loading, error }] = useLazyQuery(
    GET_ALL_JOBS_FOR_USERS
  );
  const [getFilterJobs, getFilterUserData] = useLazyQuery(GET_FILTER_JOBS);
  const [selectedUsers, setSelectedUsers] = useState<IJob[]>([]);

  const filterJobs = async () => {
    getFilterJobs({
      variables: {
        search: JSON.stringify({
          description,
          responsibilities,
          offer_salary,
          position,
          skills,
          title,
        }),
      },
    });
  };

  useEffect(() => {
    if (getFilterUserData?.data?.getFilterJobs) {
      const lessThemTen =
        getFilterUserData?.data?.getFilterJobs?.length < 10
          ? getFilterUserData?.data?.getFilterJobs?.length
          : 10;
      setJobs(getFilterUserData?.data?.getFilterJobs);
      const filterData = getFilterUserData?.data.getFilterJobs.filter(
        (_: any, index: number) => index < lessThemTen
      );
      setSelectedUsers(filterData);
    }
  }, [getFilterUserData?.data]);

  useEffect(() => {
    if (data?.getJobs) {
      const lessThemTen =
        data?.getJobs?.length < 10 ? data?.getJobs?.length : 10;
      setJobs(data?.getJobs);
      const filterData = data?.getJobs.filter(
        (_: any, index: number) => index < lessThemTen
      );
      setSelectedUsers(filterData);
    }
  }, [data?.getJobs]);

  useEffect(() => {
    getJobsForUser();
  }, []);

  const handlePagination = async ({ selected }: { selected: number }) => {
    const offset = selected * 10;
    const filterData = jobs?.filter(
      (_user: any, index: number) => index >= offset && index < offset + 10
    );
    setSelectedUsers(filterData);
    window?.scrollTo({
      top: 0,
      behavior: "smooth", // This enables smooth scrolling
    });
  };
  return (
    <Container>
      <div className={styles.main_content}>
        <div className="flex justify-between items-center p-4">
          <button
            onClick={() => push(routes.user.saveJob)}
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-md"
          >
            Save Ads
          </button>
          <button
            onClick={() => push(routes.user.applyJob)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Applied Ads
          </button>
        </div>
        <GCompanySearch
          skills={skills}
          setSkills={setSkills}
          position={position}
          setPosition={setPosition}
          description={description}
          responsibilities={responsibilities}
          offer_salary={offer_salary}
          title={title}
          setOfferSalary={setOfferSalary}
          setResponsibilities={setResponsibilities}
          setTitle={setTitle}
          setDescription={setDescription}
          handleSubmit={filterJobs}
        />
        <PaginationDetails pagination={jobs?.length || 0} />
        <div className={styles.main}>
          {selectedUsers?.map((value, index) => (
            <div key={index} className={styles.main_card}>
              <JobCard {...value} />
            </div>
          ))}
        </div>
        <Pagination
          handlePagination={handlePagination}
          pagination={jobs?.length || 0}
        />
      </div>
    </Container>
  );
};
