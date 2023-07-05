import dynamic from 'next/dynamic'
import NextHead from '@/components/NextHead'

const ContactUsForm = dynamic(() => import('@/sections/contacts/ContactUsForm'))

export default function ContactPage() {
  return (
    <>
      <NextHead title='Contact Us' />
      <ContactUsForm />
    </>
  )
}
