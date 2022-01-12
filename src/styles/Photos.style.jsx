import styled from "styled-components";

export const GamerPhotos = styled.div`
  padding: 15px;
`;
export const GalleryPhotos = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  & img {
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
`;
