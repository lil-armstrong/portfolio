import { ArticleMeta } from '@/api/blog/Model'
import cn from 'classnames'
import { ArticleStyled } from './styled'
import useTheme from '@/hook/useTheme/useTheme'
import { ListItemStyled, ListStyled } from '@/components/common/styled'

export const SingleBlogCard = ({
  article: { url, title, cover_image, description, tag_list, slug },
}: {
  article: ArticleMeta
}) => {
  const { mode } = useTheme()
  return (
    <ArticleStyled role="presentation">
      <a
        role="link"
        tabIndex={0}
        href={url}
        rel="noreferrer"
        target="_blank"
        title={title}
      >
        <h4 className={cn('title', mode === 'dark' ? 'opacity-[.75]' : '')}>
          {title}
        </h4>

        <picture
          className={cn(
            'block my-[10px] h-[200px] rounded-[14px] overflow-hidden'
          )}
        >
          <img
            src={cover_image}
            alt={slug}
            className={cn(
              (mode === 'dark' && 'opacity-[.65]') || '',
              'w-full  h-full object-cover',
              'transition-transform ease-in-out delay-150',
              'hover:opacity-1 hover:scale-110 hover:-translate-y-2'
            )}
          />
        </picture>

        <p className={cn('prose description')}>{description}</p>

        <ListStyled
          className={cn('flex flex-row gap-[8px] flex-wrap my-[8px]')}
        >
          {tag_list?.map((tag, ind) => (
            <ListItemStyled className="tag" key={`tag_${ind}`}>
              {tag}
            </ListItemStyled>
          ))}
        </ListStyled>
      </a>
    </ArticleStyled>
  )
}
