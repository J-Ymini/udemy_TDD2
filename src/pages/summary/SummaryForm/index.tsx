import { useState } from "react";

import styled from "styled-components";
import { Button } from "react-bootstrap";

const SummaryForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <StyledSummaryFormContainer>
      <StyledCheckList>
        <StyledCheckbox
          type="checkbox"
          id="conditions"
          onChange={handleCheck}
        />
        <StyledLabel htmlFor="conditions">
          I agree to <strong>Terms and Conditions</strong>
        </StyledLabel>
      </StyledCheckList>
      <Button variant="light" disabled={!isChecked}>
        Confirm order
      </Button>
    </StyledSummaryFormContainer>
  );
};

export default SummaryForm;

const StyledSummaryFormContainer = styled.div`
  margin-top: 50px;
`;

const StyledCheckList = styled.div`
  margin-bottom: 10px;
`;

const StyledLabel = styled.label`
  strong {
    color: blue;
    font-weight: 700;
  }
`;

const StyledCheckbox = styled.input`
  margin-right: 10px;
`;
