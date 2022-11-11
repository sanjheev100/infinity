import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { ReactComponent as SvgDotPatternIcon } from '../../images/dot-pattern.svg'
import { SectionHeading as HeadingTitle } from '../misc/Headings.js'
import CRM1 from '../../images/CRM1.jpg'
import CRM2 from '../../images/CRM2.jpg'
import CRM3 from '../../images/CRM3.jpg'
import CRM4 from '../../images/CRM4.png'
const Container = tw.div`relative`

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`

const HeadingInfoContainer = tw.div`flex flex-col items-center`
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`

const Content = tw.div`mt-16`

const Card = styled.div((props) => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : 'flex-row',
])
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
])
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`
const Title = tw.h4`text-3xl font-bold text-gray-900`
const Description = tw.p`mt-2 text-sm leading-loose`
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`

export default () => {
  const cards = [
    {
      imageSrc: CRM1,
      subtitle: '',
      title: 'CRM selection',
      description:
        'We start the CRM selection process with the analysis of your requirements to envision the system you need. Then we take an unbiased look at the CRM software market and provide you with a comparative analysis of the most suited options.',
      url: '',
    },

    {
      imageSrc: CRM2,
      subtitle: '',
      title: 'CRM implementation consulting',
      description:
        'We analyze the tasks you want to perform in a CRM system and design the workflows with pre-built or custom functionality to support them. Knowing how CRM data is critical for any customer interaction, we plan how to connect multi-faceted data sets into unified customer profiles.',
      url: '',
    },

    {
      imageSrc: CRM3,
      subtitle: '',
      title: 'Custom CRM consulting',
      description:
        'If we prove custom CRM development to be the best scenario for your business, we plan all functional modules and assemble them into a cohesive system.',
      url: '',
    },
    {
      imageSrc: CRM4,
      subtitle: '',
      title: 'CRM migration consulting',
      description:
        'Have you reached the limits of patience with your current CRM? We can help you migrate risk-free to a better system capable of supporting all the required functions and collecting more data for advanced customer profiling. No loss of current data, no process disruption – we guarantee!',
      url: '',
    },
  ]

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>
            How Infinity Contributes to Your Customer Management Success
          </HeadingTitle>
          <HeadingDescription>
            INFINTIY will help you map out CRM implementation or improvement in
            line with your customer management strategy. With a good CRM, you
            get comprehensive customer analytics, keep the communication history
            and always stay up-to-date, and enjoy enterprise-wide process
            automation.
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                <Subtitle>{card.subtitle}</Subtitle>
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
                {/* <Link href={card.url}>See Event Details</Link> */}
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  )
}
