import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { increment, decrement, incrementByAmount } from "../redux/counterSlice";
import { fetchCategoriesNames } from "../redux/categoriesSlice";

import ProductCard from "./ProductCard";

const ActiveCategory = styled.span`
  font-family: cursive;
  font-size: xx-large;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
  grid-row-gap: 10px;
  grid-column-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const GridItem = styled.div`
  padding: 20px;
`;

class CategoryPage extends Component {
  render() {
    console.log(this.props.productsArr);

    return (
      <div>
        <div style={{ width: "100%", display: "flex", marginTop: "50px" }}>
          <ActiveCategory>{this.props.activeCategory}</ActiveCategory>
        </div>
        <GridContainer>
          {this.props.productsArr?.map((el) => (
            <GridItem key={el.id}>
              <ProductCard
                title={el.name}
                image={el.gallery[0]}
                price={
                  el.prices.filter((cur) => {
                    return (
                      cur.currency.label === this.props.activeCurrency.label
                    );
                  })[0]
                }
                inStock={el.inStock}
              />
            </GridItem>
          ))}
        </GridContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.counter.value,
  categories: state.categories.categoriesArr,
  activeCategory: state.categories.activeCategory,
  activeCurrency: state.currencies.activeCurrency,
  productsArr: state.products.products.products,
});

const mapDispatchToProps = {
  increment,
  decrement,
  incrementByAmount,
  fetchCategoriesNames,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
