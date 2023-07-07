import { GoogleApi } from "@/components/GoogleApi/GoogleApi";

const Index = () => {
  return <GoogleApi />;
};
export default Index;

Index.getLayout = function getLayout(page: JSX.Element) {
  return <>{page}</>;
};
