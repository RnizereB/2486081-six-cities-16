import {typeButton} from '../../conts';

type ButtonFavoriteProps = {
  className: string;
  isFavorite: boolean | undefined;
}

export default function ButtonFavorite({className, isFavorite}: ButtonFavoriteProps): JSX.Element {

  const width = className === typeButton ? 18 : 31;
  const height = className === typeButton ? 19 : 33;
  const classButton = className === typeButton ? 'place-card' : 'offer';

  return (
    <button className={`${classButton}__bookmark-button ${isFavorite ? `${classButton}__bookmark-button--active` : ''} button`} type="button">
      <svg className={`${classButton}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}
