import styles from "./g-search.module.scss";
import { useRouter } from "next/router";
import { Dispatch, FC } from "react";

interface IGSearchProps {
  value1: string;
  value2: string;
  value3: string;
  value4: string;
  value5: string;
  value6: string;
  input1: Dispatch<any>;
  input2: Dispatch<any>;
  input3: Dispatch<any>;
  input4: Dispatch<any>;
  input5: Dispatch<any>;
  input6: Dispatch<any>;
  handleSubmit: () => void;
}
export const GSearch: FC<IGSearchProps> = ({
  input1,
  input2,
  input3,
  input4,
  input5,
  input6,
  handleSubmit,
  value3,
  value1,
  value2,
  value4,
  value5,
  value6,
}) => {
  const { asPath } = useRouter();
  return (
    <div className={styles.main}>
      <div>
        <input
          value={value1}
          type="text"
          onChange={(e) => input1(e.target.value)}
          placeholder={asPath.includes("company") ? "Free Words" : "Free Words"}
        />
        <input
          onChange={(e) => input2(e.target.value)}
          value={value2}
          type="text"
          placeholder="Occupation"
        />
        <input
          onChange={(e) => input3(e.target.value)}
          value={value3}
          type="text"
          placeholder="Education"
        />
      </div>
      <div>
        <input
          value={value4}
          type="text"
          onChange={(e) => input4(e.target.value)}
          placeholder={"Salary"}
        />
        <input
          onChange={(e) => input5(e.target.value)}
          value={value5}
          type="text"
          placeholder="Skills"
        />
        <input
          onChange={(e) => input6(e.target.value)}
          value={value6}
          type="text"
          placeholder="Work preference"
        />
      </div>
      <button onClick={handleSubmit}>Filter</button>
    </div>
  );
};
