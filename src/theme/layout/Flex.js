import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  flex-grow: 1;
`;

export default Flex;
