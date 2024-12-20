import styled from "styled-components";

const BannerStyle = styled.figure`
   width: 100%;
    min-height: 328px;
    border-radius: 20px;
    background-image: ${props => `url(${props.$backgroundImage})`};
    background-repeat: no-repeat, repeat;
    background-size: cover;
    display: flex;
    align-items: center;

    h1{
        font-weight: 400;
        font-size: 40px;
        line-height: 48px;
        color: #FFFFFF;
        max-width: 300px;
        margin: 0 64px;
    }
`

const Banner = ({texto, backgroundImage}) => {
    return <BannerStyle $backgroundImage={backgroundImage}>
            <h1>{texto}</h1>
            </BannerStyle>
}

export default Banner