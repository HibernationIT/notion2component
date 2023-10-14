<div align="center">
	<h1>Notion2Component</h1>
	<p>
		<b>You can render the contents of the Notion Page in react using the <a href="https://www.npmjs.com/package/@notionhq/client">@notionhq/client</a></b>
	</p>
</div>

[![Static Badge](https://img.shields.io/badge/%40notionhq%2Fclient-2.2.13-green)](https://www.npmjs.com/package/@notionhq/client)
[![Static Badge](https://img.shields.io/badge/npm-1.0.0-red?logo=npm)](https://www.npmjs.com/package/@hibernationit/notion2component)

# Get Started

## Installation
```shell
npm install @hibernationit/notion2component
```

## Advice
The getPage function of the notion2component module **cannot be called from the browser**.
Therefore, you must use a **server side rendering (SSR)** environment or implement a server that calls data.
We recommend using nextjs rather than reactjs.

## Usage
[Create a client object using the document @notionhq/client](https://github.com/makenotion/notion-sdk-js/blob/main/README.md#usage) and create an n2c object using that object.

```js
import { Notion2Component } from '@hibernationit/notion2component' 

const n2c = new Notion2Component({
  client: notionClient
})
```

Use the getPage function of the n2c object to get all blocks of that page.
```js
const blocks = n2c.getPage('abb07387c63645bbbbf093859db799bf')
```

Use the NotionTemplate component to render blocks on the screen.
```jsx
<NotionTemplate blocks={blocks} />
```

