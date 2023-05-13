import styled from '@emotion/styled'
import Corner from 'react-github-corner'

export const Base = styled.div`
  display: grid;
  place-items: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  position: relative;
  z-index: 0;
  min-height: 100vh;
  overflow: hidden;
  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

export const GithubCorner = styled(Corner)`
  position: absolute;
  top: 0;
  right: 0;
`

export const Title = styled.h1`
  margin: 0;
  font-weight: bold;
  white-space: nowrap;
  color: rgb(17, 24, 39);
  font-size: min(8vw, 2.25rem);
  transition: all 200ms ease;
  @media (min-width: 640px) {
    font-size: 3.75rem;
    line-height: 1;
  }
`

export const Slogan = styled.p`
  margin-top: 1.5rem;
  line-height: 2;
  color: rgb(75, 85, 99);
  font-size: min(4.5vw, 1.25rem);
  line-height: min(6vw, 1.75rem);
  transition: all 200ms ease;

  @media (min-width: 640px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`

export const InspectorButton = styled.button`
  display: inline-block;
  padding-inline: 1.5rem;
  padding-block: 0.5rem;
  border-radius: 9999px;
  user-select: none;
  color: white;
  white-space: nowrap;
  text-decoration-line: none;
  text-shadow: 0px 1px 1px #000;
  border: none;

  --tw-shadow-color: rgb(59 130 246 / 0.5);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  --tw-shadow: var(--tw-shadow-colored);
  box-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);

  background-image: linear-gradient(to bottom, #4fa0fd, #248aff);

  transition: all 200ms ease;
  font-size: min(4vw,.875rem);
  line-height: min(5vw,1.25rem);

  &:hover {
    --tw-shadow-color: #0078ffab;
    --tw-shadow-colored: 0 5px 30px -10px var(--tw-shadow-color);
    --tw-shadow: var(--tw-shadow-colored);

    filter: brightness(105%);
  }

  &:active {
    --tw-shadow-color: #00295738;
    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
    --tw-shadow: var(--tw-shadow-colored);

    filter: brightness(95%);
  }

  &:focus {
    outline: none;
  }

  @media (min-width: 640px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`

export const ButtonIcon = styled.span`
  display: inline-block;
  margin-left: 0.5rem;
  transition: all 200ms ease;

  .group-inspector-button:hover & {
    transform: translateX(0.125rem) scale(1.1);
  }
`

export const Pill = styled.div`
  position: relative;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  border-radius: 9999px;
  white-space: nowrap;
  color: rgb(75, 85, 99);
  font-size: min(4vw, 0.75rem);
  line-height: min(5vw, 1rem);
  box-shadow: 0 0 0 1px rgba(45, 55, 72, 0.1);

  &:hover {
    box-shadow: 0 0 0 1px rgba(45, 55, 72, 0.2);
  }

  @media (min-width: 640px) {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`

export const ChecksPatternWrapper = styled.div`
  position: absolute;
  z-index: -10;
  aspect-ratio: 1;
  max-width: 70vw;
  width: 564px;
  height: auto;
  fill: rgb(96 165 250 / 0.1);
  stroke: rgb(165 180 252 / 0.3);
`

export const BreakpointSmall = styled.div`
  display: block;
  @media (min-width: 640px) {
    display: none;
  }
`

export const TipLine = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: rgb(75 85 99);
  font-weight: 300;
  font-size: min(4.5vw,1rem);
  line-height: min(6vw,1.75rem);

  @media (min-width: 640px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`
