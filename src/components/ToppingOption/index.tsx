import React from "react";

import Col from "react-bootstrap/Row";

import styled from "styled-components";

interface IToppingOption {
  item: {
    name: string;
    imagePath: string;
  };
}

const ToppingOption = ({ item }: IToppingOption) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <StyledImage
        src={`http://localhost:3030/${item.imagePath}`}
        alt={`${item.name} topping`}
      />
    </Col>
  );
};

export default ToppingOption;

const StyledImage = styled.img`
  width: 20%;
`;
