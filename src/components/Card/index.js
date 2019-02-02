import React, { Component } from "react";
import {
  CardContaienr,
  CardImage,
  CardHeader,
  CardContent,
  CardHat,
  Sinopse,
  LetContainer
} from "./styled";

import { Radius, Date } from "~/components/index";
import { Tags } from "~/containers/index";

import { Flex } from "~/theme/index";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      messageNotFoudSinpose: "Sinopse Indisponivel."
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
        <CardImage
          src={`http://image.tmdb.org/t/p/w342//${poster_path}`}
          title={title}
        />
        <Flex direction="column">
          <CardHeader>
            <CardHat>{title}</CardHat>
            <Radius value={popularity} />
          </CardHeader>
          <CardContent>
            <Date value={release_date} />
            <LetContainer>
              <Sinopse>{overview || this.state.messageNotFoudSinpose}</Sinopse>
              <Tags genresIds={genre_ids} />
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
