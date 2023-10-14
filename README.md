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
However, because the Notion Template component is a client side rendering (CSR), you must create a CSR component when using nextjs.

## Usage
[Create a client object by referencing the @notionhq/client document](https://github.com/makenotion/notion-sdk-js/blob/main/README.md#usage) and create an n2c object using that object.

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

### ReactJS Example
```jsx
import { useState, useEffect } from "react";
import NotionTemplate from '@hibernationit/notion2component/dist/NotionTemplate'

export default function Page() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('your N2C getPage data server')
      .then((res) => setData(res.json()))
  }, []);
  
  return <NotionTemplate blocks={data} />
}
```

### NextJS Example

```jsx
// page.jsx
import { Client } from "@notionhq/client";
import NotionTemplate from '@hibernationit/notion2component/dist/NotionTemplate'
import { Notion2Component } from "./notion2Component";

async function getData() {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  })
  const n2c = new Notion2Component({
    client: notion,
  })
  return n2c.getPage('your notion page id')
}

export default async function Page() {
  const data = await getData()
  
  return <CsrComponent data={data} />
}
```

```jsx
// csrComponent.jsx
'use client'

import NotionTemplate from '@hibernationit/notion2component/dist/NotionTemplate'

export default function CsrComponent({data}) {
  return <NotionTemplate blocks={data} />
}
```

## Supporting Blocks
| Block Type       | Supported |
|------------------|-----------|
| Bookmark         | ✅         |
| Breadcrumb       | ❌         |
| BulletedListItem | ✅         |
| Callout          | ✅         |
| ChildDatabase    | ❌         |
| ChildPage        | ❌         |
| Column           | ✅         |
| ColumnList       | ✅         |
| Divider          | ✅         |
| Embed            | ❌         |
| Equation         | ✅         |
| File             | ✅         |
| Heading_1        | ✅         |
| Heading_2        | ✅         |
| Heading_3        | ✅         |
| Image            | ✅         |
| LinkPreview      | ❌         |
| LinkToPage       | ❌         |
| NumberedListItem | ✅         |
| Paragraph        | ✅         |
| Pdf              | ❌         |
| Quote            | ✅         |
| SyncedBlock      | ❌         |
| Table            | ✅         |
| TableOfContents  | ❌         |
| TableRow         | ✅         |
| Template         | ❌         |
| ToDo             | ✅         |
| Toggle           | ✅         |
| Video            | ✅         |