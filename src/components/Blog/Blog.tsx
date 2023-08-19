import blog from '@/api/blog/blog'
import { useFetch } from '@/hook/useFetch/useFetch'
import { PAGES } from '@/types/pages'
import cn from 'classnames'
import { Fragment, useEffect } from 'react'
import { Loader } from '../Loader/Loader'
import { ContainerStyled } from '../common/styled'
import { SingleBlogCard } from './SingleBlogCard'
import BottomNavigation from '../BottomNavigation/bottom_navigation'

export function Blog() {
  const { loading, result } = useFetch(blog.getMany())

  useEffect(() => {
    console.log(result)
  }, [result])

  return (
    <ContainerStyled>
      <h3 className="section-heading">Articles</h3>

      <div className="boxed_layout" id={PAGES.BLOG}>
        <div className="py-[30px]">
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
      </div>
      <div className="absolute bottom-0 w-full left-0">
        <BottomNavigation
          leftSlot={{ content: 'Projects', to: PAGES.PROJECT }}
          rightSlot={{
            content: 'Contact',
            to: PAGES.CONTACT,
          }}
        />
      </div>
    </ContainerStyled>
  )
}
export default Blog
