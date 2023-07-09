import { FC, useEffect, useState } from "react";
import styles from "./jobPreview.module.scss";
import { Container } from "@mui/material";
import { CompanyMainDetails } from "@/components/company/mypage/mainDetails/companyMainDetails";
import { UserMap } from "@/components/user/UserMap/UserMap";
import { useRouter } from "next/router";
import { IJob } from "../../../constants/interfaces/jobs";
import { useLazyQuery } from "@apollo/client";
import {
  GET_ALL_JOBS_FOR_USERS,
  GET_JOB_BY_ID,
} from "../../../constants/graphQL/job";
import { SkillsList } from "@/components/user/userProfilePage/profile/skillsList/skillsList";

export const JobPreview: FC = () => {
  const {
    query: { jobId },
  } = useRouter();
  const [job, setJob] = useState<IJob | null>(null);
  const [getJob, { data, loading, error }] = useLazyQuery(GET_JOB_BY_ID);

  useEffect(() => {
    if (data?.getJobById) {
      setJob(data?.getJobById);
    }
  }, [data?.getJobById]);

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
      <Container maxWidth="lg">
        <div className={styles.section_container}>
          <div className={styles.left_container}>
            <div className={styles.info_container}>
              <div className={styles.cover_img}></div>
              <div className={styles.label}>
                <p className={styles.label_text}>{job?.title}</p>
              </div>
            </div>
            <div className={styles.content_container}>
              <p className={styles.content_heading}>Job Description</p>
              <div className={styles.content_texts}>
                {job?.description ?? ""}
              </div>
            </div>
            <div className={styles.content_container}>
              <p className={styles.content_heading}>Responsibilities</p>
              <div className={styles.content_texts}>
                {job?.responsibilities ?? ""}
              </div>
            </div>
            <div className={styles.content_container}>
              <p className={styles.content_heading}>Qualification</p>
              <div className={styles.content_texts}>
                {job?.qualification ?? ""}
              </div>
            </div>
            <div className={styles.content_container}>
              <p className={styles.content_heading}>Skill & Experience</p>
              <div className={styles.content_texts}>
                <SkillsList data={job?.skills ?? []} disabledEdit={true} />
              </div>
            </div>
          </div>
          <div className={styles.right_container}>
            <CompanyMainDetails {...(job?.company as any)} />
            <UserMap />
            <div className="flex justify-between items-center p-4">
              <button className="bg-blue-500 text-white font-bold py-1 px-4 rounded-md">
                Apply Job
              </button>
              <button
                type="submit"
                className="border-blue-700 border text-blue-500 font-bold py-1 px-4 rounded-md"
              >
                Save Job
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
