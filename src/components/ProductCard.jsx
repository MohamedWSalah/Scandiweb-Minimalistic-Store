import React, { Component } from "react";
import styled from "styled-components";
import Cart from "../assets/cart.png";

const Card = styled.div`
  position: relative;
  height: fit-content;
  width: fit-content;
  opacity: ${(props) => (props.inStock ? null : 0.4)};

  :hover {
    box-shadow: 0 0 50px grey;
  }
`;

const CartCircle = styled.i`
  position: absolute;
  background: #22dd8f;
  border-radius: 20px;
  border-radius: 50%;
  padding: 3px;
`;
const CartIcon = styled.img`
  position: relative;
  font-size: 24px;
  width: 40px;
  height: 40px;
`;

const OverlayText = styled.div`
  display: ${(props) => (props.inStock ? "none" : null)};
  color: black;
  font-family: fantasy;
  font-weight: bold;
  font-size: xx-large;
  position: absolute;
  top: 30%;
  left: 0;
  width: 100%;
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
    const { title, image, price, inStock } = this.props;

    return (
      <Card inStock={inStock}>
        <OverlayText inStock={inStock}>OUT OF STOCK</OverlayText>
        <div style={{ width: 300, height: 300 }}>
          <img
            src={image}
            alt={title}
            style={{ width: "inherit", height: "inherit" }}
          />
        </div>

        <div
          style={{
            width: "200px",
            textAlign: "right",
          }}
        >
          <CartCircle>
            <CartIcon src={Cart} alt="" />
          </CartCircle>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginTop: "30px",
          }}
        >
          <ProductTitle>{title}</ProductTitle>
          <ProductPrice>
            {price.currency.symbol} {price.amount}
          </ProductPrice>
        </div>
      </Card>
    );
  }
}

export default ProductCard;
