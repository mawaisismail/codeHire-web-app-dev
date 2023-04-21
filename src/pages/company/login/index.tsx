import { Login } from "@/components/mainLayout/Login";

const Index = () => {
  return <Login />;
};
export default Index;

Index.getLayout = function getLayout(page: JSX.Element) {
  return <>{page}</>;
};
