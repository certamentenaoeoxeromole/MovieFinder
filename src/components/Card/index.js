import React, { Component } from "react";

import { Date } from "~/components/index";
import { Tags } from "~/containers/index";

import { Flex, RadiusMoviesList, RadiusHat } from "~/theme/index";
import {
  CardContaienr,
  CardImage,
  CardHeader,
  CardContent,
  CardHat,
  Sinopse,
  LetContainer
} from "./styled";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      messageNotFound: "Sinopse Indisponivel."
    };
  }
  render() {
    const {
      title,
      overview,
      poster_path,
      popularity,
      release_date,
      genre_ids
    } = this.props;
    return (
      <CardContaienr>
        <picture>
          <source
            srcSet={`http://image.tmdb.org/t/p/w780//${poster_path}`}
            media="(min-width: 481px) and (max-width:767px)"
            alt={title}
          />
          <CardImage
            src={`http://image.tmdb.org/t/p/w342//${poster_path}`}
            title={title}
            alt={title}
          />
        </picture>
        <Flex direction="column">
          <CardHeader>
            <CardHat title={title}>{title}</CardHat>
            <RadiusMoviesList>
              <RadiusHat>{Math.round(popularity)}%</RadiusHat>
            </RadiusMoviesList>
          </CardHeader>
          <CardContent>
            <Date value={release_date} float={true} />
            <LetContainer>
              <Sinopse title={overview}>
                {overview || this.state.messageNotFound}
              </Sinopse>
              <div>
                <Tags genresIds={genre_ids} />
              </div>
            </LetContainer>
          </CardContent>
        </Flex>
      </CardContaienr>
    );
  }
  static defaultProps = {
    overview: "Sinopse indisponível"
  };
}

export default Card;
