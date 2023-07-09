import { ICompany } from "./company";

export interface IJob {
  id: string;
  company: ICompany;
  companyID: string;
  title: string;
  coverImg: string;
  experience: string;
  employmentType: [string];
  position: string;
  offer_salary: string;
  description: string;
  responsibilities: string;
  qualification: string;
  skills: [string];
  freeWords: string;
  location: string;
  createdAt: string;
  updatedAt: string;
}
