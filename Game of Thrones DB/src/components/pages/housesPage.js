import React, { Component } from "react";
import ItemList from "../itemList";
import ItemDetails, { Field } from "../itemDetails";
import ErrorMessage from "../errorMessage";
import GotService from "../../services/gotService";
import RowBlock from "../rowBlock";

export default class HousesPage extends Component {
  gotService = new GotService();
  state = {
    selectedHouse: null,
    fatalError: false
  };
  onItemSelected = id => {
    this.setState({
      selectedHouse: id
    });
  };
  componentDidCatch() {
    this.setState({
      fatalError: true
    });
  }

  render() {
    if (this.state.fatalError) {
      return <ErrorMessage typeError="fatal" />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllHouses}
        renderItem={({ name, region }) => `${name} (${region})`}
      />
    );
    const bookDetails = (
      <ItemDetails
        itemId={this.state.selectedHouse}
        getData={this.gotService.getHouse}
      >
        <Field field="url" label="id" />
        <Field field="region" label="Регион" />
        <Field field="words" label="Девиз" />
        <Field field="titles" label="Название" />
        <Field field="overlord" label="Владыка" />
        <Field field="ancestralWeapons" label="Родовое оружие" />
      </ItemDetails>
    );
    return <RowBlock left={itemList} right={bookDetails} />;
  }
}
