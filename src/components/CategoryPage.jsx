import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { increment, decrement, incrementByAmount } from "../redux/counterSlice";
import { fetchCategoriesNames } from "../redux/categoriesSlice";
import { addToCart, increaseQuantityOfItem } from "../redux/cartSlice";

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

    const addItemToCart = (id) => {
      if (
        this.props.cartArr.some((el) => {
          if (el.id === id) return true;
        })
      ) {
        console.log(id, "HERE");
        this.props.increaseQuantityOfItem(id);
      } else {
        let selectedItem = this.props.productsArr.find((obj) => {
          return obj.id === id;
        });
        selectedItem = {
          ...selectedItem,
          quantity: 1,
        };
        console.log(selectedItem);
        this.props.addToCart(selectedItem);
      }
    };

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
                id={el.id}
                image={el.gallery[0]}
                price={
                  el.prices.filter((cur) => {
                    return (
                      cur.currency.label === this.props.activeCurrency.label
                    );
                  })[0]
                }
                inStock={el.inStock}
                addItemToCart={addItemToCart}
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
  cartArr: state.cart.cartArr,
});

const mapDispatchToProps = {
  increment,
  decrement,
  incrementByAmount,
  fetchCategoriesNames,
  addToCart,
  increaseQuantityOfItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
