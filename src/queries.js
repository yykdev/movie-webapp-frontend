import gql from "graphql-tag";

export const HOME_PAGE = gql`
    {
        movies(limit: 10, rating: 8.5) {
            id
            title
            medium_cover_image
            rating
        }
    }
`;
