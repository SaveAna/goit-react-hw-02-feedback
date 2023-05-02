import styled from '@emotion/styled';

export const FeedbackBtn = styled.button`
  background-color: transparent;
  text-transform: capitalize;
  border: 1px solid #d3d3d3;
  font-weight: 500;
  border-radius: 5px;
  padding: 4px 10px;
  margin-bottom: 30px;
  margin-left: 8px;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
  &:active,
  &:hover {
    background: radial-gradient(
      circle,
      rgba(72, 117, 255, 1) 0%,
      rgba(34, 78, 212, 1) 62%,
      rgba(23, 67, 200, 1) 100%
    );
    color: white;
    border-color: transparent;
  }
`;
