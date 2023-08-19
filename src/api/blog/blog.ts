import { AxiosResponse } from 'axios'
import Request from '../'
import { DEV_TO_USERNAME } from '../constants'
import { ArticleMeta, SingleArticleMeta } from './Model'

class Blog {
  url = 'articles'

  async getMany(): Promise<ArticleMeta[]> {
    return await Request.get<ArticleMeta[]>(this.url, {
      params: { username: DEV_TO_USERNAME },
    }).then(({data}) => {
        const toObject = JSON.parse(String(data))
        return toObject as ArticleMeta[]
    })
  }

  async getSingle(slug: string){
    return await Request.get<SingleArticleMeta>(`${this.url}${DEV_TO_USERNAME}/${slug}`)
  }
}

export default new Blog()
