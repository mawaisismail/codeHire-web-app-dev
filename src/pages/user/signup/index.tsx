import { UserMultistep } from "@/components/user/multistep/multistep";

const Index = () => {
  return <UserMultistep />;
};
export default Index;

Index.getLayout = function getLayout(page: JSX.Element) {
  return <>{page}</>;
};
