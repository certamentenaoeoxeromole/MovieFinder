import styled from "styled-components";
import { media } from "./variables";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(224, 224, 244, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  display: block;
`;

export const ModalContent = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  z-index: 999;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 3px;
  height: 80%;
  width: 80%;
  padding: 10px;
  @media (min-width: ${media.screenSmMin}) {
    padding: 5px;
    height: 90vh;
    max-height: 600px;
  }
`;

export const ModalClose = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(50%, -50%);
  width: 50px;
  height: 50px;
  font-size: 30px;
  background-color: #5a6978;
  color: #fff;
  text-align: center;
  border-radius: 50px;
  cursor: pointer;

  > div {
    margin-top: 6px;
  }
`;

export const ModalBody = styled.div`
  width: 100%;
  height: 100%;
  background-color: "#fff";
  @media (min-width: ${media.screenSmMin}) {
    height: calc(100%);
  }
`;

export const ModalFooter = styled.div`
  width: 100%;
  display: flex;
  height: 100px;
  flex-direction: column;
  @media (min-width: ${media.screenSmMin}) {
    justify-content: space-between;
    align-items: center;
    height: 50px;
    flex-direction: row;
  }
`;
