import { CompanyMultiStep } from "@/components/company/Multistep/Multistep";

const Index = () => {
  return <CompanyMultiStep />;
};
export default Index;

Index.getLayout = function getLayout(page: JSX.Element) {
  return <>{page}</>;
};
