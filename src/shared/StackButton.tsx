import { StyledIconButton } from "../components/searchBar/styled";

export const StackButton = ({ _id, background, logo, onClickParamSet }: any) => {
  return (
    <StyledIconButton key={_id} size="small" sx={{ background: background }} onClick={onClickParamSet}>
      {logo}
    </StyledIconButton>
  );
};
