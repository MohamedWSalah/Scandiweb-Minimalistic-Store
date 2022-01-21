import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Card = styled.div`
  height: fit-content;
  width: fit-content;
`;

const ProductTitle = styled.span`
  font-size: x-large;
  font-family: cursive;
`;

const ProductPrice = styled.span`
  font-weight: bold;
  font-size: large;
  font-family: monospace;
`;

class ProductCard extends Component {
  render() {
    return (
      <Card>
        <div style={{ width: 300, height: 300 }}>
          <img
            src="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087"
            alt=""
            style={{ width: "inherit", height: "inherit" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <ProductTitle>ProductTitle</ProductTitle>
          <ProductPrice>$50.00</ProductPrice>
        </div>
      </Card>
    );
  }
}

export default ProductCard;
