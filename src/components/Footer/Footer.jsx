import React, { useEffect, useState } from 'react'
import './Footer.css'
import { Layout } from '../../components/Layout/Layout'

const Footer = () => {

  const [currentYear, setCurrentYear] = useState();

  useEffect(() => {
    const today = new Date(Date.now())
    setCurrentYear(today.getFullYear())
  }, [])

  return (
    <footer>
      <div className='seccion1'>
        <Layout>
          <div className="footer_datos">
            <div className="footer_contacto">
              <p className="footer_encabezado">¡Contactanos!</p>
              <div className="contacto_div">
                <a className="ancla" href="tel:08008880168" rel="noreferrer">
                  <img title='Llamada teléfonica' src="/icons/CEL.svg" className="icon-contacto" alt="icono celular" />
                  0800-888-0168
                </a>
              </div>
              <div className="contacto_div">
                <a className="ancla" href="https://api.whatsapp.com/send?phone=5493516684151&amp;text=Hola, quisiera realizar una consulta." target="_blank" rel="noreferrer">
                  <img title='WhatsApp' src="/icons/WPP.svg" className="icon-contacto" alt="icono celular" />
                  +54 9 351 668-4151
                </a>
              </div>
            </div>
            <div className="footer_horario">
              <h4 className="footer_encabezado">Horarios</h4>
              <p>Lunes a Viernes • 10:00 a 18:00</p>
              <p>Sábado • 9:00 a 15:00</p>
            </div>
            <div className="footer_rss">
              <p className="footer_encabezado">Redes Sociales</p>
              <div className="iconFooter">
                <a title='Facebook' href="https://www.facebook.com/constructoracasaya" target="_blank" rel="noreferrer">
                  <img src="/icons/facebook.svg" alt="icono celular" />
                </a>
                <a title='YouTube' /* href="#" */ /* target="_blank" */ rel="noreferrer">
                  <img src="/icons/youtube.svg" alt="icono celular" />
                </a>
                <a title='Instagram' href="https://www.instagram.com/constructoracasaya/" target="_blank" rel="noreferrer">
                  <img src="/icons/instagram.svg" alt="icono celular" />
                </a>
              </div>
            </div>
          </div>
        </Layout>
      </div>
      <div className='seccion2'>
        <Layout>
          <div className="derechos_reservados">
            <p className="derechos">
              Casa YA {currentYear} © Todos los derechos reservados
            </p>
          </div>
        </Layout>
      </div>
    </footer>
  )
}

export default Footer