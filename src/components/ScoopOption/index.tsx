import React from "react";

import Col from "react-bootstrap/Col";

import styled from "styled-components";

interface IScoopOption {
  item: {
    name: string;
    imagePath: string;
  };
}

const ScoopOption = ({ item }: IScoopOption) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <StyledImage
        src={`http://localhost:3030/${item.imagePath}`}
        alt={`${item.name} scoop`}
      />
    </Col>
  );
};

export default ScoopOption;

const StyledImage = styled.img`
  width: 75%;
`;
