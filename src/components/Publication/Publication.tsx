import blog from '@/api/blog/blog'
import {
  ContainerStyled,
  ContentBoxStyled,
  InnerContainerStyled,
  ListContainerStyled,
  SectionFooterStyled,
  SectionHeaderStyled,
  SectionHeaderTitleStyled,
} from '@/components/common/styled'
import { useFetch } from '@/hook/useFetch/useFetch'
import { PAGES } from '@/types/pages'
import { Loader } from '../Loader/Loader'
import SectionNavigationBar from '../SectionNavigation/SectionNavigation'
import { SingleBlogCard } from './SingleBlogCard'
import { GridListItemStyled, GridListStyled, LoaderBoxStyled } from './styled'

export function Publication() {
  const { loading, result } = useFetch(blog.getMany())

  return (
    <ContainerStyled>
      <SectionHeaderStyled>
        <SectionHeaderTitleStyled>Publications</SectionHeaderTitleStyled>
      </SectionHeaderStyled>

      <InnerContainerStyled id={PAGES.PUBLICATION}>
        <ContentBoxStyled>
          <ListContainerStyled>
            {!loading ? (
              <GridListStyled>
                {result?.map((article, index) => (
                  <GridListItemStyled key={`article_${index}`}>
                    <SingleBlogCard article={article} />
                  </GridListItemStyled>
                ))}
              </GridListStyled>
            ) : (
              <LoaderBoxStyled>
                <Loader type="ripple" w={50} h={50} />
              </LoaderBoxStyled>
            )}
          </ListContainerStyled>
        </ContentBoxStyled>
      </InnerContainerStyled>

      <SectionFooterStyled>
        <SectionNavigationBar
          leftSlot={{ content: 'Projects', to: PAGES.PROJECT }}
          rightSlot={{
            content: 'Contact',
            to: PAGES.CONTACT,
          }}
        />
      </SectionFooterStyled>
    </ContainerStyled>
  )
}
export default Publication
