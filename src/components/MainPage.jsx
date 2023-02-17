import React, { useEffect, useState } from "react";
import Modal from "../components/modal/Modal";

import './MainPage.css';

import CountriesWithEuro from "./tasks/CountriesWithEuro/CountriesWithEuro";
import CountriesWithoutCapital from "./tasks/CountriesWithoutCapital/CountriesWithoutCapital";
import CountriesGroupedByContinent from "./tasks/CountriesGroupedByContinent/CountriesGroupedByContinent";
import TheMostAndTheLowestCountries from "./tasks/TheMostAndTheLowestCountries/TheMostAndTheLowestCountries";
import PopulationOnContinent from "./tasks/PopulationOnContinent/PopulationOnContinent";
import AreaOfContinent from "./tasks/AreaOnContinent/AreaOnContinent";
import SortCurrenciesAlfabeticaly from "./tasks/SortCurrenciesAlfabetically/SortCurrenciesAlfabetically";
import Header from "./header/Header";

const URL = "https://restcountries.com/v3.1/all";

const MainPage = () => {
  const [data, setData] = useState(null);
  const [isOpenedCountriesWithEuro, setIsOpenedCountriesWithEuro] =
    useState(false);
  const [isOpenedCountriesWithoutCapital, setIsOpenedCountriesWithoutCapital] =
    useState(false);
  const [isOpenedCountriesGrouped, setIsOpenedCountriesGrouped] =
    useState(false);
  const [
    isOpenedTheMostAndTheLowestCountries,
    setIsOpenedTheMostAndTheLowestCountries,
  ] = useState(false);
  const [isOpenedPopulationOnContinent, setIsOpenedPopulationOnContinent] =
    useState(false);
  const [isOpenedAreaOnContinent, setIsOpenedAreaOnContinent] = useState(false);
  const [
    isOpenedSortCurrenciesAlfabetically,
    setIsOpenedSortCurrenciesAlfabetically,
  ] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL);
      result.json().then((data) => {
        setData(data);
      });
    };
    fetchData();
  }, []);

  return (
    <div className="mainpage-container">
      <Header/>
      <div className="button-container">
        <button onClick={() => setIsOpenedCountriesWithEuro(true)} className="button__set-modal-open-close">
          Countries with Euro currency
        </button>
        <Modal
          isOpened={isOpenedCountriesWithEuro}
          onClose={() => setIsOpenedCountriesWithEuro(false)}
        >
          <CountriesWithEuro data={data} />
        </Modal>
      </div>
      <div className="button-container">
        <button onClick={() => setIsOpenedCountriesWithoutCapital(true)} className="button__set-modal-open-close">
          Countries without capital
        </button>
        <Modal
          isOpened={isOpenedCountriesWithoutCapital}
          onClose={() => setIsOpenedCountriesWithoutCapital(false)}
        >
          <CountriesWithoutCapital data={data} />
        </Modal>
      </div>
      <div className="button-container">
        <button onClick={() => setIsOpenedCountriesGrouped(true)} className="button__set-modal-open-close">
          Countries grouped by continents
        </button>
        <Modal
          isOpened={isOpenedCountriesGrouped}
          onClose={() => setIsOpenedCountriesGrouped(false)}
        >
          <CountriesGroupedByContinent data={data} />
        </Modal>
      </div>
      <div className="button-container">
        <button onClick={() => setIsOpenedTheMostAndTheLowestCountries(true)} className="button__set-modal-open-close">
          Which continent has the most and which has the fewest countries?
        </button>
        <Modal
          isOpened={isOpenedTheMostAndTheLowestCountries}
          onClose={() => setIsOpenedTheMostAndTheLowestCountries(false)}
        >
          <TheMostAndTheLowestCountries data={data} />
        </Modal>
      </div>
      <div className="button-container">
        <button onClick={() => setIsOpenedPopulationOnContinent(true)} className="button__set-modal-open-close">
          Continents population
        </button>
        <Modal
          isOpened={isOpenedPopulationOnContinent}
          onClose={() => setIsOpenedPopulationOnContinent(false)}
        >
          <PopulationOnContinent data={data} />
        </Modal>
      </div>
      <div className="button-container">
        <button onClick={() => setIsOpenedAreaOnContinent(true)} className="button__set-modal-open-close">
          Continents area
        </button>
        <Modal
          isOpened={isOpenedAreaOnContinent}
          onClose={() => setIsOpenedAreaOnContinent(false)}
        >
          <AreaOfContinent data={data} />
        </Modal>
      </div>
      <div className="button-container">
        <button onClick={() => setIsOpenedSortCurrenciesAlfabetically(true)} className="button__set-modal-open-close">
          Currencies sorted alfabetically
        </button>
        <Modal
          isOpened={isOpenedSortCurrenciesAlfabetically}
          onClose={() => setIsOpenedSortCurrenciesAlfabetically(false)}
        >
          <SortCurrenciesAlfabeticaly data={data} />
        </Modal>
      </div>
    </div>
  );
};

export default MainPage;
