import { Client } from '@notionhq/client'
import { Block } from './types/blockType'

export default class Notion2Component {
  private client

  constructor({ client }: { client: Client }) {
    this.client = client
  }

  public async getPage(pageId: string): Promise<Block[]> {
    return this.getAll(pageId)
  }

  private async getAll(block: string): Promise<Block[]> {
    const children: Block[] = await this.getChildren(block)
    return Promise.all(
      children.map(async (child: Block) => {
        if (child.has_children) {
          child.children = await this.getAll(child.id)
          return child
        }
        return child
      }),
    )
  }

  private async getChildren(block: string): Promise<Block[]> {
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

    return results.map((value) => value as Block)
  }
}
