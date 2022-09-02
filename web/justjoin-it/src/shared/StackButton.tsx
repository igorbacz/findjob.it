import { useSearchParams } from "react-router-dom";
import { StyledIconButton } from "../components/searchBar/styled";
import { Icon } from "../types/types";

export const StackButton = ({ _id, background, logo, stack }: Icon) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const stackSearch = () => {
    setSearchParams({ techStack: stack });
  };

  return (
    <StyledIconButton key={_id} size="small" sx={{ background: background }} onClick={stackSearch}>
      {logo}
    </StyledIconButton>
  );
};
