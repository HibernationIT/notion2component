import { Client } from '@notionhq/client'
import parse from 'node-html-parser'
import { NotionBlocks } from './BlockType'

export class Notion2Component {
  private client

  constructor({ client }: { client: Client }) {
    this.client = client
  }

  public async getPage(pageId: string): Promise<NotionBlocks[]> {
    return this.getAll(pageId)
  }

  private async getAll(block: string): Promise<NotionBlocks[]> {
    const children: NotionBlocks[] = await this.getChildren(block)
    return Promise.all(
      children.map(async (child: NotionBlocks) => {
        if (child.type === 'bookmark') {
          const { title, description, image, icon } =
            await this.getBookmarkInfo(child.bookmark.url)
          child.bookmark.title = title
          child.bookmark.description = description
          child.bookmark.image = image
          child.bookmark.icon = icon
        }

        if (child.has_children) {
          child.children = await this.getAll(child.id)
          return child
        }
        return child
      }),
    )
  }

  private async getChildren(block: string): Promise<NotionBlocks[]> {
    let more = true
    let cursor = block
    let results: any[] = []

    while (more) {
      const children = await this.client.blocks.children.list({
        block_id: cursor,
        page_size: 100,
      })

      cursor = children.next_cursor || ''
      more = children.has_more
      results = results.concat(children.results)
    }

    return results.map((value) => value as NotionBlocks)
  }

  private async getBookmarkInfo(url: string) {
    const html = await fetch(url).then((res) => res.text())
    const elements = parse(html)

    const title =
      elements.querySelector('meta[name="title"]')?.getAttribute('content') ||
      elements
        .querySelector('meta[property="og:title"]')
        ?.getAttribute('content') ||
      elements
        .querySelector('meta[name="twitter:title"]')
        ?.getAttribute('content') ||
      elements.querySelector('title')?.text
    const description =
      elements
        .querySelector('meta[name="description"]')
        ?.getAttribute('content') ||
      elements
        .querySelector('meta[property="og:description"]')
        ?.getAttribute('content') ||
      elements
        .querySelector('meta[name="twitter:description"]')
        ?.getAttribute('content')
    const image =
      elements
        .querySelector('meta[property="og:image"]')
        ?.getAttribute('content') ||
      elements
        .querySelector('meta[name="twitter:url"]')
        ?.getAttribute('content')
    const iconUrl = elements
      .querySelector('link[type="image/x-icon"]')
      ?.getAttribute('href')
    const icon =
      iconUrl !== undefined && iconUrl.startsWith('/') ? url + iconUrl : iconUrl

    return {
      title,
      description,
      image,
      icon,
    }
  }
}
