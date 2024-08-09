import {Fragment} from 'react';
import ReviewsComments from '../reviews-comments/reviews-comments';
import { OffersTypes } from '../../types/offers-types';
import { useParams } from 'react-router-dom';
import { getCountStars } from '../../utils';
import ButtonFavorite from '../button-favorite/button-favorite';
import ReviewsCommentsList from '../reviews-comments-list/reviews-comments-list';
import { commentsType } from '../../types/comments-types';

type ReviewsOffersProps = {
  offers: OffersTypes[];
  comments: commentsType[];
}

export default function ReviewsOffers({offers, comments}: ReviewsOffersProps): JSX.Element {
  const {id: offerId} = useParams();
  const currentCard = offers.find((offer) => offer.id === offerId);
  return (
    <Fragment>
      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          {currentCard?.images.map((img) =>(
            <div className="offer__image-wrapper" key={img}>
              <img className="offer__image" src={img} alt="Photo studio"/>
            </div>
          ))}
        </div>
      </div>
      <div className="offer__container container">
        <div className="offer__wrapper">
          {currentCard?.isPremium ?
            <div className="offer__mark">
              <span>Premium</span>
            </div>
            : ''}
          <div className="offer__name-wrapper">
            <h1 className="offer__name">
              {currentCard?.title}
            </h1>
            <ButtonFavorite className='' isFavorite={currentCard!.isFavorite} />
          </div>
          <div className="offer__rating rating">
            <div className="offer__stars rating__stars">
              <span style={{width: `${getCountStars(Number(currentCard?.rating))}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="offer__rating-value rating__value">{currentCard?.rating}</span>
          </div>
          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">
              {currentCard?.type}
            </li>
            <li className="offer__feature offer__feature--bedrooms">
              {currentCard?.bedrooms !== 1 ? `${currentCard?.bedrooms} Bedrooms` : '1 Bedroom'}
            </li>
            <li className="offer__feature offer__feature--adults">
              {currentCard?.maxAdults !== 1 ? `Max ${currentCard?.maxAdults} adults` : 'Max 1 adult'}
            </li>
          </ul>
          <div className="offer__price">
            <b className="offer__price-value">&euro;{currentCard?.price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>
            <ul className="offer__inside-list">
              {currentCard?.goods.map((good) => (
                <li className="offer__inside-item" key={good}>
                  {good}
                </li>
              ))}
            </ul>
          </div>
          <div className="offer__host">
            <h2 className="offer__host-title">Meet the host</h2>
            <div className="offer__host-user user">
              <div className={`offer__avatar-wrapper ${currentCard?.host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                <img className="offer__avatar user__avatar" src={currentCard?.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
              </div>
              <span className="offer__user-name">
                {currentCard?.host.name}
              </span>
              {currentCard?.host.isPro ?
                <span className="offer__user-status">
            Pro
                </span>
                : ''}
            </div>
            <div className="offer__description">
              <p className="offer__text">
                {currentCard?.description}
              </p>
            </div>
          </div>
          <section className="offer__reviews reviews">
            <ReviewsCommentsList comments={comments.slice(0, Math.floor(Math.random() * 5))} />
            <ReviewsComments />
          </section>
        </div>
      </div>
    </Fragment>
  );
}
