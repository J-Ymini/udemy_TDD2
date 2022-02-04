import SummaryForm from "src/components/SummaryForm";
import Options from "src/components/Options";

import styled from "styled-components";

const OrderSummary = () => {
  return (
    <StyledOrderSummaryContainer>
      <StyledOrderSummaryTitle>Order Summary</StyledOrderSummaryTitle>
      <StyledOrderSummarySubtitle>Scoops: $6.00</StyledOrderSummarySubtitle>
      <StyledCheckList>
        <div>1 - 3 Vanilla</div>
      </StyledCheckList>
      <StyledCheckListContainer>
        <StyledOrderSummarySubtitle>Toppings: $4.05</StyledOrderSummarySubtitle>
        <StyledCheckList>
          <div>2 - M & Ms</div>
        </StyledCheckList>
        <StyledCheckList>
          <div>3 - Hot fudge</div>
        </StyledCheckList>
        <StyledCheckList>
          <div>4 - Gummi bears</div>
        </StyledCheckList>
      </StyledCheckListContainer>
      <StyledOrderSummarySubtitle>Total $10.50</StyledOrderSummarySubtitle>
      <SummaryForm />
      <Options optionsType="scoops" />
      <Options optionsType="toppings" />
    </StyledOrderSummaryContainer>
  );
};

export default OrderSummary;

const StyledOrderSummaryContainer = styled.div`
  padding: 50px;
`;

const StyledOrderSummaryTitle = styled.h1`
  margin-bottom: 30px;
  font-size: 2em;
`;

const StyledOrderSummarySubtitle = styled.h2`
  margin-bottom: 10px;
  font-size: 1.5em;
`;

const StyledCheckListContainer = styled.div`
  margin-bottom: 50px;

  div {
    margin-bottom: 10px;
  }
`;

const StyledCheckList = styled.div`
  margin-bottom: 50px;
`;
