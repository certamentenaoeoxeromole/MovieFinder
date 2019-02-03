import React, { Component } from "react";
import ReactDOM from "react-dom";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { List } from "react-content-loader";

import { getApiMovie } from "~/redux/actions/movieAction";

import { Date, Radius } from "~/components/index";

import {
  MovieHeader,
  MovieContainer,
  MovieContent,
  MovieHat,
  MovieTitle,
  Informations,
  Banner,
  MovieDescription,
  DataBlock,
  DataItem
} from "./styled";

import { Tags } from "~/containers/index";
class Movie extends Component {
  componentDidMount() {
    this.props.getApiMovie(this.props.match.params.id);
  }

  renderBlocks = () => {};

  timeConvert = n => {
    var num = n;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return `${rhours} h ${rminutes}m`;
  };

  renderSingle = () => {
    if (this.props.state.currentMovie) {
      const {
        title,
        release_date,
        poster_path,
        overview,
        genres,
        popularity,
        status,
        spoken_languages,
        runtime,
        budget,
        revenue
      } = this.props.state.currentMovie;
      console.log(release_date);

      return (
        <MovieContainer>
          <MovieHeader>
            <MovieHat>{title}</MovieHat>
            <Date value={release_date} float={false} />
          </MovieHeader>
          <MovieContent>
            <Informations>
              <MovieTitle>Sinopse</MovieTitle>
              <MovieDescription>{overview}</MovieDescription>
              <MovieTitle>Informações</MovieTitle>
              <div>
                <DataBlock>
                  <DataItem>Situação</DataItem>
                  <DataItem>{status}</DataItem>
                </DataBlock>
                <DataBlock>
                  <DataItem>Idioma</DataItem>
                  <DataItem>
                    {spoken_languages.map(({ name }) => name).join(", ")}
                  </DataItem>
                </DataBlock>
                <DataBlock>
                  <DataItem>Duração</DataItem>
                  <DataItem>{this.timeConvert(runtime)}</DataItem>
                </DataBlock>
                <DataBlock>
                  <DataItem>Orçamento</DataItem>
                  <DataItem>${budget.toLocaleString("en-US")}</DataItem>
                </DataBlock>
                <DataBlock>
                  <DataItem>Receita</DataItem>
                  <DataItem>${revenue.toLocaleString("en-US")}</DataItem>
                </DataBlock>
                <DataBlock>
                  <DataItem>Lucro</DataItem>
                  <DataItem>
                    ${(revenue - budget).toLocaleString("en-US")}
                  </DataItem>
                </DataBlock>
              </div>
              <div>
                <Tags genresIds={genres && genres.map(({ id }) => id)} />
              </div>
              <Radius value={popularity} single={true} />
            </Informations>
            <Banner src={`http://image.tmdb.org/t/p/w500//${poster_path}`} />
          </MovieContent>
        </MovieContainer>
      );
    }
  };
  render() {
    console.log(this.comp);
    console.log(this.props.state.currentMovie);
    return this.renderSingle() || <List />;
  }
}

const mapStateToProps = state => ({
  state: state.movieReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getApiMovie }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);
