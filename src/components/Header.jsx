import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Cart from "../assets/cart.png";
import logo from "../assets/logo.png";

import {
  fetchCategoriesNames,
  updateActiveCategory,
} from "../redux/categoriesSlice";
import { fetchCurrencies, updateActiveCurrency } from "../redux/currencySlice";
import { fetchProductsWithCategoryName } from "../redux/productSlice";

const HeaderContainer = styled.div`
  height: 100px;
  background-color: #22dd8f;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
`;

const Category = styled.span`
  margin: auto 10px auto 30px;
  cursor: pointer;
  color: white;
  padding-bottom: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: larger;
  :hover {
    border-bottom: 2px solid white;
    ::after {
      width: 100%;
      left: 0;
    }
  }
`;

const Select = styled.select`
  border: none;
  background-color: transparent;
  outline: none;
  font-size: 100%;
  width: fit-content;
  font-weight: bold;
  cursor: pointer;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #22dd8f;
  border: none;
  color: white;
  padding: 10px;
  appearance: none;
  padding-right: 38px;

  background-image: linear-gradient(45deg, transparent 50%, #ffffff 50%),
    linear-gradient(135deg, #ffffff 50%, transparent 50%);
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), 100% 0;
  background-size: 5px 5px, 5px 5px, 2.5em 2.5em;
  background-repeat: no-repeat;

  :focus {
    background-image: linear-gradient(45deg, white 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, white 50%);
    background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, 100% 0;
    background-size: 5px 5px, 5px 5px, 2.5em 2.5em;
    background-repeat: no-repeat;
    border-color: grey;
    outline: 0;
  }
`;

const Option = styled.option`
  border: none;
  background-color: transparent;
  outline: none;
  ::selection {
    background-color: red;
  }
  ::after {
    background-color: red;
  }
`;

class Header extends Component {
  state = {
    currencySelected: "",
  };

  componentDidMount() {
    //Fetching categories names
    this.props
      .fetchCategoriesNames()
      .unwrap()
      .then(() => this.props.updateActiveCategory(this.props.categories[0]));

    //Fetching Currencies
    this.props
      .fetchCurrencies()
      .unwrap()
      .then(() => this.props.updateActiveCurrency(this.props.currencies[0]));

    //Fetching Products with category name
    this.props.fetchProductsWithCategoryName("all");
  }

  render() {
    const activeStyle = { borderBottom: "2px solid white" };
    const handleClick = (menuItem) => {
      this.props.updateActiveCategory(menuItem);
      this.props.fetchProductsWithCategoryName(menuItem);
    };

    return (
      <div>
        <HeaderContainer>
          <div
            style={{
              width: "45%",
              display: "flex",
              verticalAlign: "middle",
            }}
          >
            {this.props.categories.map((e) => (
              <Category
                style={this.props.activeCategory === e ? activeStyle : {}}
                onClick={() => handleClick(e)}
                key={e}
              >
                {e}
              </Category>
            ))}
          </div>
          <div style={{ width: "10%", marginTop: "20px" }}>
            <img src={logo} alt="logo" style={{ width: 50, height: 50 }} />
          </div>
          <div style={{ width: "45%" }}>
            <div style={{ display: "flex", float: "right", margin: "25px" }}>
              <Select
                onChange={(e) =>
                  this.props.updateActiveCurrency(JSON.parse(e.target.value))
                }
              >
                {this.props.currencies.map((el) => (
                  <Option key={el.label} value={JSON.stringify(el)}>
                    {el.symbol} {el.label}
                  </Option>
                ))}
              </Select>

              <div className="cart">
                <span>1</span>
                <img src={Cart} alt="" />
              </div>
            </div>
          </div>
        </HeaderContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories.categoriesArr,
  currencies: state.currencies.currencyArr,
  activeCategory: state.categories.activeCategory,
  activeCurrency: state.categories.activeCurrency,
});

const mapDispatchToProps = {
  fetchCategoriesNames,
  fetchCurrencies,
  updateActiveCategory,
  updateActiveCurrency,
  fetchProductsWithCategoryName,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
