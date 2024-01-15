import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import usePlaceholderData from "../hooks/usePlaceholderData";
import { Container, Typography } from "@mui/material";
import DataShowcaseGrid from "../components/DataShowcaseGrid";
import ErrorHandler from "../components/ErrorHandler";
import ExpandableChecklist from "../components/ExpandableChecklist";
import categoryData from "../assets/DepartmentData.json";
const page2 = () => {
  const navigator = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigator("/");
    }
  }, []);
  const { data, error, retry } = usePlaceholderData();

  return (
    <>
      {error ? (
        <ErrorHandler message={error} onRetry={retry} />
      ) : (
        <Container>
          <DataShowcaseGrid data={data} />
        </Container>
      )}

      <Typography color={"#e74c3c"} variant="h4">
        Category
      </Typography>

      {categoryData &&
        categoryData.map((category) => (
          <ExpandableChecklist
            main={category.department}
            sub={category.sub_departments}
          />
        ))}
    </>
  );
};

export default page2;
