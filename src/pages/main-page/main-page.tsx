import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import ListOffers from '../../components/list-offers/list-offers';
import {CITIES, ClassTypeHeader, ClassTypeOffers, ClassTypeOffersList} from '../../conts';
import {OffersTypes} from '../../types/offers-types';
import Map from '../../components/map/map';
import { useState } from 'react';

type MainPageProps = {
  offers: OffersTypes[];
}

export default function MainPage({offers}: MainPageProps): JSX.Element {

  const [selectedPoint, setSelectedPoint] = useState<string| undefined>(undefined);

  const cardMouseEnterHandler = (itemIdCard: string | undefined) => {
    const allId = offers.map((offer) => offer.id);
    const currentPoint = allId.find((id) => id === itemIdCard);
    setSelectedPoint(currentPoint);

  };

  return (
    <div className="page page--gray page--main">
      <Header className={ClassTypeHeader.MAIN} authorizationStatus/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {CITIES.map((city) => (
                <li className="locations__item" key={city}>
                  <Link className="locations__item-link tabs__item" to='/'>
                    <span>{city}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <ListOffers offers={offers} classNamePlaceList={ClassTypeOffersList.MAIN} classNamePlace={ClassTypeOffers.MAIN} onCardMouseEnter={cardMouseEnterHandler}/>
            </section>
            <div className="cities__right-section">
              <Map className='cities' offers={offers} selectedPoint={selectedPoint} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
