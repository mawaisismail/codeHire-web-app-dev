export interface ICompany {
  uid: string | null;
  userType: string | null;
  profileImageURL: string | null;
  userName: string | null;
  email: string | null;
  name: string | null;
  owner: string | null;
  coverImage: string | null;
  total_employee: string | null;
  location: string | null;
  website: string | null;
  phone: string | null;
  established: string | null;
  about: string | null;
  token: string | null;
  workingHours: WorkingHoursType | null;
}

interface WorkingHoursType {
  monday: string | null;
  tuesday: string | null;
  wednesday: string | null;
  thursday: string | null;
  friday: string | null;
  saturday: string | null;
  sunday: string | null;
}
