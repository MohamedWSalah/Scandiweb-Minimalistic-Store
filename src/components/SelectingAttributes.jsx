import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const ShadowBox = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(119, 119, 119, 0.6);
  z-index: 999;
  display: ${(props) => (props.shadowBox ? null : "none")};
`;

const InsideShadowBox = styled.div`
  background-color: #ffffff;
  width: 50%;
  height: auto;
  text-align: center;
  position: absolute;
  top: 45%;
  left: 0;
  right: 0;
  margin: auto;
  transform: translateY(-50%);
  display: grid;
  border-radius: 25px;
`;

const Attribute = styled.p`
  font-family: cursive;
  font-size: xx-large;
  float: left;
  margin-left: 10px;
`;

const ValueButton = styled.button`
  font-family: cursive;
  font-size: xx-large;
  float: left;
  margin-left: 10px;
  color: #22dd8f;
  cursor: pointer;
  border-radius: 10px;
`;

const AddBtn = styled.button`
  font-family: cursive;
  font-size: xx-large;
  color: white;
  background-color: #22dd8f;
  cursor: pointer;
  width: 50%;
  place-self: center;
  margin: 20px 0 20px 0;
`;

class SelectingAttributes extends Component {
  state = {
    selectedAttr: {},
  };

  render() {
    const { ShowShadowBox, addItemToCart, showHidebox, product } = this.props;

    const activeStyle = { backgroundColor: "#22dd8f", color: "white" };

    const handleClick = (attrId, value) => {
      this.setState((prevState) => ({
        selectedAttr: {
          ...prevState.selectedAttr,
          [attrId]: value,
        },
      }));
    };

    return (
      <ShadowBox shadowBox={ShowShadowBox}>
        <InsideShadowBox>
          {product?.attributes?.map((attr) => (
            <div style={{ display: "contents" }} key={attr.id}>
              <div key={attr.id}>
                <Attribute>{attr.name}</Attribute>
              </div>
              <div style={{ display: "flex", placeSelf: "center" }}>
                {attr.items.map((el) => (
                  <ValueButton
                    key={el.id}
                    id={el.id}
                    style={
                      this.state.selectedAttr[attr.id] === el.value
                        ? activeStyle
                        : {}
                    }
                    onClick={() => handleClick(attr.id, el.value)}
                  >
                    {el.displayValue}
                  </ValueButton>
                ))}
              </div>
            </div>
          ))}
          <AddBtn onClick={() => console.log(this.state.selectedAttr)}>
            Add Item
          </AddBtn>
        </InsideShadowBox>
      </ShadowBox>
    );
  }
}

const mapStateToProps = (state) => ({
  productsArr: state.products.products.products,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectingAttributes);
