<h1 align="center">React Dev Inspector</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/react-dev-inspector" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/npm/v/react-dev-inspector" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/react-dev-inspector" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/npm/dt/react-dev-inspector" alt="NPM Downloads" /></a>
  <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/npm/node/react-dev-inspector" alt="Node.js" /></a>
  <a href="https://github.com/zthxxx/react-dev-inspector/blob/master/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/github/license/zthxxx/react-dev-inspector" alt="License" /></a>
</p>

## Introduction

**react-dev-inspector** is the tool for seamlessly code navigation from browser to IDE.

With **just a simple click**, you can jump from a React component on the browser to its source code in your local IDE instantly.
Think of it as a more advanced version of Chrome's Inspector.

See the document on: https://react-dev-inspector.zthxxx.me

#### Why React Dev Inspector

Have you ever run into any of these issues 🤔:

- You've got to fix some bugs in your team's project, but you have no idea where the heck page/component's code is located.
- You're eager to dive into an open-source project that interests you, but it's hard to find where the code for the page/component is implemented.
- You may thinking about a component and want to quickly peek at its code, but don't want to memorize or manually expand those never-ending deep file paths.

That's exactly why react-dev-inspector was created.

<br>

### Quick Look

Just check out this demo below and you'll get it in a snap.

> screen record gif (8M size):

Showcase: https://react-dev-inspector.zthxxx.me/showcase

[![inspector-preview](https://github.com/zthxxx/react-dev-inspector/raw/dev/docs/images/inspector.mp4)](https://react-dev-inspector.zthxxx.me/showcase)

Wanna try out the demo right now? Sure, here is the online demo:

[
  ![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)
](https://stackblitz.com/edit/github-x3rkzl?file=package.json,vite.config.ts%3AL17)

<br/>

## How to Use and Configure

According to the working pipeline [below](#how-it-works), the **Part.1** and **Part.2** are what you need configure to use.

Basically, it's includes:
1. [add the `<Inspector/>` component in your page](https://react-dev-inspector.zthxxx.me/docs/inspector-component)
2. [integrate the middleware in your framework's dev-server](https://react-dev-inspector.zthxxx.me/docs/integration)

Check the [Documentation Site](https://react-dev-inspector.zthxxx.me/docs) for more details

<br/>

## How It Works

Here is the working pipeline of `react-dev-inspector`:

[
  ![Working Pipeline](https://github.com/zthxxx/react-dev-inspector/raw/dev/docs/images/working-pipeline.svg)
](https://react-dev-inspector.zthxxx.me/docs#how-it-works)

<br/>

### 0. Inject JSX Source

The compiler's [`plugin`](https://react-dev-inspector.zthxxx.me/docs/compiler-plugin)
records source path info into React components during development stage.

> **Note:** The **0** of _Part.0_ implies that this section is generally **OPTIONAL**.
> Most React frameworks offer this feature **_out-of-the-box_**,
> which means you usually **don't** need to manually configure it additionally.

### 1. Inspector Component

The react-dev-inspector provide a [`<Inspector/>`](https://react-dev-inspector.zthxxx.me/docs/inspector-component) component to reads the source info,
and sends it to the dev-server when you inspect elements on browser.

### 2. Dev Server Middleware

The react-dev-inspector provide some [middlewares](https://react-dev-inspector.zthxxx.me/docs/integration) for dev-server in most frameworks to receives source path info from API,
then call your local IDE/Editor to open the source file.

<br/>

---

## Articles about it

- [Chinese] [🎉 我点了页面上的元素，VSCode 乖乖打开了对应的组件？原理揭秘](https://juejin.cn/post/6901466406823575560)

<br />

---

## License

[MIT LICENSE](./LICENSE)

> Thanks for @zthxxx @sonacy @sl1673495
