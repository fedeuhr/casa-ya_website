import React, { useEffect, useMemo, useRef, useState } from 'react'
import './Nosotros.css'
import { Layout } from '../../components/Layout/Layout'

const Nosotros = () => {
  const refWoody = useRef(null);
  const isInViewport1 = useIsInViewport(refWoody);

  useEffect(() => {
    if (isInViewport1) {
      setTimeout(() => {
        document.querySelector(".woody-mobile").classList.add("woody-mobile--animated");
      }, 200)
      setTimeout(() => {
        document.querySelector(".container-globo-texto").classList.add("container-globo-texto--animated");
      }, 600)
      setTimeout(() => {
        document.querySelector(".descripcion").classList.add("descripcion--animated");
      }, 950)
    }
  }, [isInViewport1]);

  return (
    <div className='contenedor-background '>
      <Layout>
        <div className='contenedor-nosotros'>

          <div className='woody-contenedor'>
            <img src="./nosotros/nosotros.png" className='woody-web' alt="" />
            <img src="./nosotros/nosotros_mobile.png" className='woody-mobile' alt="" />
          </div>

          <div ref={refWoody} className='info'>

            <div className={`container-globo-texto`}>
              <img className='globo-texto' src="nosotros/globo-texto.svg" />
              <div className="centered">
                <p><strong>¡Hola!</strong> Te cuento <br /> sobre nosotros</p>
              </div>
            </div>

            <div className='descripcion'>
              <p>
                Somos una empresa especializada en desarrollar proyectos de <strong>construcción en seco. </strong>
                Nuestro equipo de profesionales trabaja con compromiso y dedicación, para que nuestros
                clientes hagan realidad el sueño de tener su <strong>casa propia.</strong>
              </p>
              <p>
                En Casa Ya, la satisfacción de nuestros clientes, su progreso económico y la mejora de su
                <strong> calidad de vida,</strong> son la motivación para dar lo mejor de nosotros cada día.
              </p>
              <p>
                Nos caracterizan los valores de liderazgo, compromiso, proactividad, calidad, eficiencia y trabajo en equipo.
              </p>
            </div>
            <div className='contenedor-1452465'>
              <div className='contenedor-contacto-nosotros'>
                <div className='contenedor-contacto-nosotros-hijo'>
                  <p>Si querés saber más sobre nosotros <br /> seguinos en nuestras <strong>redes sociales</strong></p>
                </div>
              </div>
              <div className="iconNosotros">
                <a href="https://www.facebook.com/constructoracasaya" target="_blank" rel="noreferrer">
                  <img src="/icons/facebook-blanco.svg" alt="icono celular" />
                </a>
                <a /* href="#" */ /* target="_blank" */ rel="noreferrer">
                  <img src="/icons/youtube-blanco.svg" alt="icono celular" />
                </a>
                <a href="https://www.instagram.com/constructoracasaya/" target="_blank" rel="noreferrer">
                  <img src="/icons/instagram-blanco.svg" alt="icono celular" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>

  )
}

function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}

export default Nosotros