import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { SectionHeading as HeadingTitle } from '../misc/Headings.js'
import { ReactComponent as SvgDecoratorBlob1 } from '../../images/svg-decorator-blob-1.svg'
import { ReactComponent as SvgDecoratorBlob2 } from '../../images/svg-decorator-blob-3.svg'
import CRM5 from '../../images/CRM5.jpg'
import CRM6 from '../../images/CRM6.jpg'
import CRM7 from '../../images/CRM7.jpg'
import CRM8 from '../../images/CRM8.jpg'

const Container = tw.div`relative`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`
const Column = tw.div`mt-24 lg:w-1/3`

const HeadingInfoContainer = tw.div`flex flex-col items-center`
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm lg:max-w-xs`
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded`,
])
const Category = tw.div`mt-4 text-secondary-100 font-bold text-sm`
const Title = tw.h4`mt-2 leading-relaxed font-bold text-lg`
const Link = tw.a`inline-block mt-2 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`

export default () => {
  const blogPosts = [
    {
      imageSrc: CRM5,
      category: 'Salesforce consulting',
      title:
        'Rely on our skilled consultants to solve your specific CRM challenges – from low sales productivity and deficient alignment between departments to CRM performance issues. Our experts will train your employees to fulfill the potential of Salesforce.',
      url: '',
    },
    {
      imageSrc: CRM6,
      category: 'Salesforce implementation',
      title:
        'Our team is ready to perform Salesforce implementation for you to get a reliable solution. From implementation consulting to after-launch support, we work on the solution that will efficiently address your business needs.',
      url: '',
    },
    {
      imageSrc: CRM7,
      category: 'Salesforce customization',
      title:
        'Get a solution designed to fit the requirements of your industry and business. Unlock all capabilities of the Salesforce platform with fine-tuned modules for sales and marketing automation, lead and opportunity management, performance management, reporting and more.',
      url: '',
    },
    {
      imageSrc: CRM8,
      category: 'Salesforce application development',
      title:
        'Get a custom Salesforce application to go far beyond default functionality in improving your sales, marketing and customer service processes, or an AppExchange app to generate revenue from it, or an app to integrate your software product with Salesforce.',
      url: '',
    },
  ]
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>Our Salesforce Services </HeadingTitle>
          <HeadingDescription>
            Infinity Technology Design Solutions provides a full set of
            Salesforce professional services to support your CRM strategy with
            an appropriate software solution.
          </HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>
          {blogPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <Category>{post.category}</Category>
                <Title>{post.title}</Title>
                {/* <Link href={post.url}>Read Post</Link> */}
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  )
}
