import React from 'react'
import { Helmet } from 'react-helmet'
import { Fade } from 'react-reveal'
import Form from "../../components/Form/Form"
import { Layout } from '../../components/Layout/Layout'

const Contacto = () => {
  return (
    <>
      <Helmet>
        <title>Contacto | Casa YA</title>
      </Helmet>
      <Fade>
        <Layout>
          <Form />
        </Layout>
      </Fade>
    </>
  )
}

export default Contacto