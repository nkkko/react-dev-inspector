import styled from '@emotion/styled'
import { css } from '@emotion/css'

/**
 * https://github.com/sindresorhus/github-markdown-css/blob/gh-pages/github-markdown.css#L183
 */
export const keyTone = css`
  display: inline-block;
  padding: 0.5rem 0.8rem;
  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
  font-weight: 600;
  height: 1.2rem;
  line-height: 1.2rem;
  color: #444d56;
  vertical-align: middle;
  background-color: #fafbfc;
  border: 1px solid #d1d5da;
  border-radius: 0.4rem;
  box-shadow: inset 0 -1px 0 #d1d5da;
`

export const Keys = styled.div`
  display: inline-block;
  padding-right: 1.2rem;
  opacity: 1;
  white-space: nowrap;
  animation: flickerAnimation 2s ease-in-out infinite;

  font-size: min(1.2rem, max(3vw, 0.8rem));

  & > .${keyTone} {
    margin: auto 0.8rem;

    &:first-of-type {
      margin-left: 0;
    }
    &:last-of-type {
      margin-right: 0;
    }
  }

  @keyframes flickerAnimation {
    0%   { opacity: 1; }
    50%  { opacity: .6; }
    100% { opacity: 1; }
  }
`

export const Pad = styled.div`
  vertical-align: center;
  margin: 0 auto;
  padding: 2rem;
  font-size: 1.5rem;
  color: #666;

  & > span:first-of-type {
    padding-right: 1.2rem;
  }

  @media screen and (max-width: 640px) {
    & > span {
      display: none;
    }
  }
`
