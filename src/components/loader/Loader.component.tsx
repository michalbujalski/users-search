import React from "react";
import svg from "./tail-spin.svg";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Img = styled.img`
  margin-right: 16px;
`;

const Label = styled.div`
  font-size: 16px;
  color: #999999;
`;
export default () => {
  return (
    <Layout>
      <Img src={svg} alt="loader-img" />
      <Label>Loading...</Label>
    </Layout>
  );
};
