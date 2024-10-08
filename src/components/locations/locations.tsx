import {LocationsProps} from './type';
import {Link} from 'react-router-dom';
import {CITIES} from '../../conts';

export default function Locations({cityCurrent, onCityClick}:LocationsProps): JSX.Element {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <li className="locations__item" key={city} onClick={onCityClick}>
              <Link className={`locations__item-link tabs__item${city === cityCurrent ? ' tabs__item--active' : ''}`} to='/'>
                <span>{city}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

