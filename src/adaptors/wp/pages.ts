import type { SEO } from "./types";
import { WPAdaptor } from "./wp";

export type Page = {
  id: string
  date: Date
  modified: Date
  slug: string
  status: "publish" | "future" | "draft" | "pending" | "private"
  type: "post"
  link: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
    protected: boolean
  }
  excerpt: {
    rendered: string
    protected: boolean
  }
  author: number;
  comment_status: "open" | "closed"
  ping_status: "open" | "closed"
  sticky: boolean
  template: string
  format: string
  meta: Record<string, any>
  categories: number[]
  tags: number[]
  yoast_head: string
  yoast_head_json: SEO
}

export class WPPagesAdaptor extends WPAdaptor {
  async find(id: string) {
    return await this.get<Page>(`/pages/${id}`)
  }

  async all() {
     return await this.get<Page[]>(`/pages`)
  }
}