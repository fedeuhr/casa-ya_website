import React, { useEffect, useState } from 'react'
import './Home.css'
import { Fade } from 'react-reveal'
import CardItem from '../../components/CardItem/CardItem'
import PromoHome from '../../components/PromoHome/PromoHome'
import promosJSON from "../../data/promosHome.json"
import modelosJSON from "../../data/modelos.json"
import commentsJSON from "../../data/comentariosClientes.json"
import { Layout } from '../../components/Layout/Layout'
import Slider from "../../components/Slider/Slider"
import CommentCard from '../../components/CommentCard/CommentCard'
import Nosotros from '../../components/Nosotros/Nosotros'
import { goTop } from '../../helpers/goTop'
import { Helmet } from 'react-helmet'
import Form from '../../components/Form/Form'

const Home = () => {

  useEffect(() => {
    goTop();
  }, []);

  const [key, setKey] = useState(0);
  const [key1, setKey1] = useState(1);
  const [key2, setKey2] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((key) => key + 1);
      setKey1((key1) => key1 + 1);
      setKey2((key2) => key2 + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  var numComentarios = commentsJSON.length

  if (key === numComentarios) {
    setKey((key) => key * 0);
  }
  if (key1 === numComentarios) {
    setKey1((key1) => key1 * 0);
  }
  if (key2 === numComentarios) {
    setKey2((key2) => key2 * 0);
  }

  return (
    <>
      <Helmet>
        <title>Casa YA</title>
      </Helmet>
      <Slider />
      {
        promosJSON.map((item) => {
          return item.numeroDePromo === 1 && (
            <PromoHome promo={item} />
          )
        })
      }
      <section className='section-home'>
        <div className='header-section' id="pack">
          <div className='header-section__logo'>
            <div className='header-section__logo__fondo' alt="" >
              <div className='header-section__logo__filtro' alt="" />
              <img className='header-section__logo__logo' src="/logos/casaPack-home.svg" alt="" />
            </div>
          </div>
          <div className='header-section__leyenda'>
            <p>Construí tu Casa Pack hecha 100% con Wood Frame, en simples pasos.</p>
          </div>
        </div>
        <Layout>
          <div className="enunciado-section">
            <p>Gracias a nuestros materiales de <strong>calidad premium</strong>, podés construir <strong>la casa de tus sueños</strong> de forma rápida y sencilla.</p>
          </div>
          <Fade>
            <div className='container-grid-cards'>
              {
                modelosJSON.map((item, key) => {
                  return item.tipologia === "casaPack" && (
                    <CardItem modelo={item} />
                  )
                })
              }
            </div>
          </Fade>
        </Layout>
      </section>
      {
        promosJSON.map((item) => {
          return item.numeroDePromo === 2 && (
            <PromoHome promo={item} />
          )
        })
      }
      <section className='section-home'>
        <div className='header-section' id='pro'>
          <div className='header-section__logo'>
            <div className='header-section__logo__fondo' alt="" >
              <div className='header-section__logo__filtro' alt="" />
              <img className='header-section__logo__logo' src="/logos/casaPro-home.svg" alt="" />
            </div>
          </div>
          <div className='header-section__leyenda'>
            <p>Tené la Casa Pro que siempre quisiste, terminada en 30 días.</p>
          </div>
        </div>
        <Layout>
          <div className="enunciado-section">
            <p>Elegí el <strong>modelo ideal</strong> para vos y tu familia, nosotros lo hacemos realidad.</p>
          </div>
          <Fade>
            <div className='container-grid-cards'>
              {
                modelosJSON.map((item, key) => {
                  return item.tipologia === "casaPro" && (
                    <CardItem modelo={item} />
                  )
                })
              }
            </div>
          </Fade>
        </Layout>
      </section>
      {
        promosJSON.map((item) => {
          return item.numeroDePromo === 3 && (
            <PromoHome promo={item} />
          )
        })
      }
      <section className='container-comments'>
        <div className='container-comments__borde'></div>
        <div className='container-comments__background'>
          <Layout>
            {window.innerWidth < 750 ? (
              <div className='container-comments__grid-1'>
                <CommentCard comment={commentsJSON[key]} />
              </div>
            ) :
              (window.innerWidth < 1000 && window.innerWidth > 750 ?
                (
                  <div className='container-comments__grid-2'>
                    <CommentCard comment={commentsJSON[key]} />
                    <CommentCard comment={commentsJSON[key1]} />
                  </div>
                ) :
                (
                  <div className='container-comments__grid'>
                    <CommentCard comment={commentsJSON[key]} />
                    <CommentCard comment={commentsJSON[key1]} />
                    <CommentCard comment={commentsJSON[key2]} />
                  </div>
                )
              )}
          </Layout>
        </div>
        <div className='container-comments__borde borde2'></div>
      </section>
      <Nosotros />
      <section className='contacto-section'>
        <Layout>
          <Form />
        </Layout>
      </section>
    </>
  )
}

export default Home