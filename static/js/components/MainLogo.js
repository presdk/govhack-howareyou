import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
    max-height: 3em;
`;

const MainLogo = () => {
    return (
        <Image src="https://upload.wikimedia.org/wikipedia/en/thumb/6/63/IMG_%28business%29.svg/1280px-IMG_%28business%29.svg.png"/>
    ); 
};

export default MainLogo;