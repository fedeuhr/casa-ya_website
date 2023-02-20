import React from 'react'
import './PreguntasFrecuentes.css'
import { Fade } from "react-reveal"
import { Layout } from '../../components/Layout/Layout'
import { Helmet } from 'react-helmet'
import PreguntasFrecuentesJSON from "../../data/preguntasFrecuentes.json"

const PreguntasFrecuentes = () => {
  return (
    <>
      <Helmet>
        <title>
          Preguntas frecuentes | Casa YA
        </title>
      </Helmet>
      <Layout>
        <div className='preguntas-frecuentes-header'>
          <div className='contenedor-icons'>
            <div className='icon-pregunta'>
              <img src="/icons/GloboPregunta.svg" alt="" />
            </div>
            <div className='icon-respuesta'>
              <img src="/icons/GloboRespuesta.svg" alt="" />
            </div>
          </div>
          <div className="preguntas-frecuentes-encabezado">
            <h1>Preguntas Frecuentes</h1>
          </div>
          <div className="preguntas-frecuentes-descripcion">
            <p>Para obtener una respuesta inmediata, podés entrar a las siguientes preguntas frecuentes, donde encontrarás información sobre las cuestiones más consultadas</p>
          </div>
        </div>
        <Fade>
          {/* <div className='contenedor-video'>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/7wtfhZwyrcc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div> */}
          <div className="preguntas">
            <Fade cascade>
              {
                PreguntasFrecuentesJSON.map((item, index) => (
                  <div>
                    <input className="pregunta-input" type="checkbox" name="pregunta-frecuente" id={`pregunta-n${index + 1}`} />
                    <label for={`pregunta-n${index + 1}`} className="pregunta">{item?.pregunta}</label>
                    <div className="respuesta" dangerouslySetInnerHTML={{ __html: item?.repuesta }} />
                  </div>
                ))
              }
            </Fade>
          </div>
        </Fade>
      </Layout>
    </>
  )
}

export default PreguntasFrecuentes