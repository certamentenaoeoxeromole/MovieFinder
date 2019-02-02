import React, { Component } from "react";
import {
  CardContaienr,
  CardImage,
  CardHeader,
  CardContent,
  CardHat
} from "./styled";

import { Flex } from "~/theme/index";

class Card extends Component {
  render() {
    const { title, overview, poster_path } = this.props;
    return (
      <CardContaienr>
        <CardImage src={`http://image.tmdb.org/t/p/w342///${poster_path}`} />
        <Flex direction="column">
          <CardHeader>
            <CardHat>{title}</CardHat>
          </CardHeader>
          <CardContent />
        </Flex>
      </CardContaienr>
    );
  }
}

export default Card;
