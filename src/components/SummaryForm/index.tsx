import { useState } from "react";

import { Button, OverlayTrigger, Popover } from "react-bootstrap";

import styled from "styled-components";

const SummaryForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked((prev) => !prev);
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  return (
    <StyledSummaryFormContainer>
      <StyledCheckList>
        <StyledCheckbox
          type="checkbox"
          id="conditions"
          onChange={handleCheck}
        />
        <StyledLabel htmlFor="conditions">
          I agree to
          <OverlayTrigger overlay={popover} placement="right">
            <strong> Terms and Conditions</strong>
          </OverlayTrigger>
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
