import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { css } from 'styled-components/macro' //eslint-disable-line
import { ReactComponent as SvgDotPatternIcon } from '../../images/dot-pattern.svg'
import axios from 'axios'

const Container = tw.div`relative`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,
  textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`
const Column = tw.div`sm:w-5/12 flex flex-col`
const InputContainer = tw.div`relative py-5 mt-6`
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`
const Input = tw.input``
const TextArea = tw.textarea`h-24 sm:h-full resize-none`
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`

export default () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !phone || !email || !description) {
      setError('All Fields must be filled')
      setTimeout(() => {
        setError('')
      }, 3000)
      return
    }
    const payload = {
      name,
      email,
      phone,
      description,
    }
    setLoading(true)
    axios
      .post(`${process.env.REACT_APP_BACKEND}/sendEmail`, payload)
      .then((res) => {
        setSuccess('Request Recevied Our Executive will contact you shortly')
        setEmail('')
        setDescription('')
        setName('')
        setPhone('')
        setLoading(false)
        setTimeout(() => {
          setSuccess('')
        }, 6000)
        // document.body.scrollTop = document.documentElement.scrollTop = 0
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 2000)
      })
      .catch((error) => {
        console.log(error)
        setError('Something Happend Please Try again later')
        setTimeout(() => {
          setError('')
        }, 6000)
        setLoading(false)
      })
  }

  return (
    <Container>
      <Content>
        <FormContainer>
          <div tw='mx-auto max-w-4xl'>
            <h2>Contact Us</h2>
            <div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  alignSelf: 'center',
                }}
              >
                <h5>Address: </h5> &nbsp;&nbsp;
                <h5> 8,The Green Suite A,Dover 19901</h5>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  alignSelf: 'center',
                  marginTop: '5px',
                }}
              >
                <h5>Email : </h5> &nbsp;&nbsp;
                <h5>contact@infinitytechnologydesignsolutions.com</h5>
              </div>
            </div>
            <form>
              <TwoColumn>
                {error && (
                  <p
                    className='error'
                    style={{
                      background: '#fff0f0',
                      color: '#ff0000',
                      padding: '10px',
                    }}
                  >
                    {error}
                  </p>
                )}

                {success && (
                  <p
                    className='success'
                    style={{
                      background: '#e7f7e2',
                      color: '#0cf327',
                      padding: '10px',
                    }}
                  >
                    {success}
                  </p>
                )}
                <Column>
                  <InputContainer>
                    <Label htmlFor='name-input'>Your Name</Label>
                    <Input
                      id='name-input'
                      type='text'
                      name='name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder='E.g. John Doe'
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor='email-input'>Your Email Address</Label>
                    <Input
                      id='email-input'
                      type='email'
                      name='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='E.g. john@mail.com'
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor='email-input'>Your Phone Number</Label>
                    <Input
                      // id='email-input'
                      type='number'
                      name='phone'
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                      placeholder='1234567890'
                    />
                  </InputContainer>
                </Column>
                <Column>
                  <InputContainer tw='flex-1'>
                    <Label htmlFor='name-input'>Description</Label>
                    <TextArea
                      id='message-input'
                      name='description'
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder='E.g. Your Query'
                    />
                  </InputContainer>
                </Column>
              </TwoColumn>

              <SubmitButton
                onClick={(e) => handleSubmit(e)}
                type='submit'
                value='Submit'
                disabled={loading}
              >
                Submit
              </SubmitButton>
            </form>
          </div>
          <SvgDotPattern1 />
        </FormContainer>
      </Content>
    </Container>
  )
}
