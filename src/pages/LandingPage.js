import React, { Component } from "react";
import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
//import json data={nama_json.nama data yang akan digunakan pada json contoh landingPage.hero}
import landingPage from "json/landingPage.json";
export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props}> </Header>
        <Hero data={landingPage.hero} />
        <MostPicked data={landingPage.mostPicked} />
      </>
    );
  }
}
