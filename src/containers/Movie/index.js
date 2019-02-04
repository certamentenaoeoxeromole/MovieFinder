import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { List } from "react-content-loader";

import { getApiMovie } from "~/redux/actions/movieAction";
import { Date } from "~/components/index";
import { Modal } from "~/containers/index";

import { RadiusSingle, RadiusHat } from "~/theme/index";

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
  DataItem,
  TrailerButton
} from "./styled";

import { Tags } from "~/containers/index";

class Movie extends Component {
  constructor() {
    super();

    this.state = {
      isOpenedModal: false
    };
  }
  componentDidMount() {
    this.props.getApiMovie(this.props.match.params.id);
  }

  timeConvert = n => {
    var num = n;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return `${rhours} h ${rminutes}m`;
  };

  renderModal = () => {
    const { videos, title } = this.props.state.currentMovie;
    if (!videos.results.length) {
      return;
    }

    if (!this.state.isOpenedModal) {
      return;
    }
    return (
      <Modal
        id={videos.results[0].key}
        title={title}
        onClick={() =>
          this.setState({
            isOpenedModal: !this.state.isOpenedModal
          })
        }
      />
    );
  };

  renderBlocks = () => {
    const {
      status,
      spoken_languages,
      runtime,
      budget,
      revenue
    } = this.props.state.currentMovie;

    return (
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
          <DataItem>${(revenue - budget).toLocaleString("en-US")}</DataItem>
        </DataBlock>
      </div>
    );
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
        videos
      } = this.props.state.currentMovie;

      return (
        <Fragment>
          <MovieContainer>
            <MovieHeader>
              <MovieHat title={title}>{title}</MovieHat>
              <Date value={release_date} float={false} />
            </MovieHeader>
            <MovieContent>
              <Informations>
                <MovieTitle>Sinopse</MovieTitle>
                <MovieDescription title={overview}>
                  {overview || "Sinopse Indisponivel."}
                </MovieDescription>
                <MovieTitle>Informações</MovieTitle>
                {this.renderBlocks()}
                <div>
                  <Tags genresIds={genres && genres.map(({ id }) => id)} />
                </div>
                {videos.results.length ? (
                  <TrailerButton
                    onClick={() => this.setState({ isOpenedModal: true })}
                  >
                    Assistir Trailer
                  </TrailerButton>
                ) : (
                  <TrailerButton>Trailer Indisponivel</TrailerButton>
                )}
                <RadiusSingle>
                  <RadiusHat>{Math.round(popularity)}%</RadiusHat>
                </RadiusSingle>
              </Informations>
              <picture>
                <source
                  srcSet={`http://image.tmdb.org/t/p/w780//${poster_path}`}
                  media="(min-width: 481px) and (max-width:767px)"
                />
                <Banner
                  src={`http://image.tmdb.org/t/p/w500//${poster_path}`}
                  title={title}
                  alt={title}
                />
              </picture>
            </MovieContent>
          </MovieContainer>
          {this.renderModal()}
        </Fragment>
      );
    }
  };
  render() {
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
