import React from 'react';
import styled from "styled-components";
import Video from "./pexels-akari-m-5927778.mp4";

function Background() {
    return (
        <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline />
    );
}

export default Background;

const VideoBg = styled.video`
    display: flex;
    justify-content: center;
    position:relative;
    object-fit:cover;
    width: 100%;
    height:  100%;
    position: fixed;
    z-index: -1;
    `
