import blog from '@/api/blog/blog'
import { useFetch } from '@/hook/useFetch/useFetch'
import { PAGES } from '@/types/pages'
import cn from 'classnames'
import { Fragment, useEffect } from 'react'
import { Loader } from '../Loader/Loader'
import { ContainerStyled } from '../common/styled'
import { SingleBlogCard } from './SingleBlogCard'

export function Blog() {
  const { loading, result } = useFetch(blog.getMany())

  useEffect(() => {
    console.log(result)
  }, [result])

  return (
    <ContainerStyled>
      <h3 className="section-heading">Articles</h3>

      <div className="boxed_layout" id={PAGES.BLOG}>
        {!loading ? (
          <div className="flex flex-wrap gap-[30px]">
            {result?.map((article, index) => (
              <Fragment key={`article_${index}`}>
                <SingleBlogCard article={article} />
              </Fragment>
            ))}
          </div>
        ) : (
          <div
            className={cn(
              'flex flex-col items-center justify-end w-full h-full'
            )}
          >
            <Loader type="ripple" w={50} h={50} />
          </div>
        )}
      </div>
    </ContainerStyled>
  )
}
export default Blog
