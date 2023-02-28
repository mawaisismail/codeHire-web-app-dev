import styles from "./JobWork.module.scss";
import { JobWorkData } from "@/components/JobWork/JobWorkData";
export const JobWork = () => {
  return (
    <div className={styles.JobWorkContainer}>
      <div className={styles.JobWorkMain}>
        <div className={styles.JobWorkContent}>
          <div className={styles.JobWorkHeading}>
            <h2>How it Work</h2>
            <p>
              Post a job to tell us about your project.We will quickly match you
              with the right freelancer
            </p>
          </div>
          {JobWorkData.map((data) => {
            return (
              <>
                <div className={styles.JobWorkList} key={data.id}>
                  <h2>
                    <span>{data.id}</span>
                    {data.heading}
                  </h2>
                  <p>{data.subheading}</p>
                </div>
              </>
            );
          })}
        </div>
        <div className={styles.JobWorkLogo}>
          <p className={styles.img}></p>
        </div>
      </div>
    </div>
  );
};

// import styles from "./JobWork.module.scss";
// import { JobWorkData } from "./JobWorkData";
// export const JobWork = () => {
//   return (
//     <div className={styles.main_container}>
//       <div className={styles.content}>
//         <div className={styles.heading}>
//           <h2>How it Work</h2>
//           <p>
//             Post a job to tell us about your project.We will quickly match you
//             with the right freelancer
//           </p>
//         </div>
//         {JobWorkData.map((data) => {
//           return (
//             <>
//               <div className={styles.list} key={data.id}>
//                 <h2>
//                   <span>{data.id}</span>
//                   {data.heading}
//                 </h2>
//                 <p>{data.subheading}</p>
//               </div>
//             </>
//           );
//         })}
//       </div>
//       <div className={styles.logo}>
//         <p className={styles.sub_logo}></p>
//       </div>
//     </div>
//   );
// };
