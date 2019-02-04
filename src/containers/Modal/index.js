import React, { Component } from "react";
import {
  ModalContainer,
  ModalContent,
  ModalClose,
  ModalBody,
  ModalFooter
} from "~/theme/index";

class Modal extends Component {
  componentDidMount() {
    document.body.style.overflow = "hidden";
  }
  componentWillUnmount() {
    document.body.style.overflow = "auto";
  }

  render() {
    const { onClick, id } = this.props;
    return (
      <ModalContainer>
        <ModalContent>
          <ModalClose onClick={() => onClick()}>
            <div>x</div>
          </ModalClose>
          <ModalBody>
            <iframe
              width="100%"
              title={"Modal"}
              height="100%"
              src={`
              https://www.youtube.com/embed/${id}?enablejsapi=1&version=3&playerapiid=ytplayer&amp;autoplay=1`}
              frameBorder="0"
              allow="encrypted-media"
              allowFullScreen
            />
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </ModalContainer>
    );
  }
}

export default Modal;
