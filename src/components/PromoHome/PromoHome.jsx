import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom'
import { formatNumber } from '../../helpers/formatNumber'
import { Layout } from '../Layout/Layout'
import "./PromoHome.css"

const PromoHome = ({ promo }) => {
  const refPromoHeader = useRef(null);
  const isInViewport1 = useIsInViewport(refPromoHeader);

  useEffect(() => {
    if (isInViewport1) {
      document.querySelector(`.promo-titulo-${promo?.numeroDePromo}`).classList.add("contenedor-promohome-background__contenedor-promohome__header__titulo--animated")
    }
  }, [isInViewport1]);

  return (
    <Link ref={refPromoHeader} className="contenedor-promohome-background__link" to={`/promo/${promo?.numeroDePromo}`}>
      <div className={`contenedor-promohome-background promo${promo?.numeroDePromo}`}>
        <div className='contenedor-promohome-background__contenedor-promohome'>
          <Layout>
            <div className='contenedor-promohome-background__contenedor-promohome__header'>
              <div className={`contenedor-promohome-background__contenedor-promohome__header__titulo promo-titulo-${promo?.numeroDePromo}`}>
                <h1>Promo {promo?.numeroDePromo}</h1>
              </div>
              <Fade cascade>
                <div dangerouslySetInnerHTML={{ __html: promo?.messageCaption }} className="contenedor-promohome-background__contenedor-promohome__header__leyenda" />
              </Fade>
            </div>
            <div className="contenedor-promohome-background__contenedor-promohome__info">
              <figure>
                <img className='contenedor-promohome-background__contenedor-promohome__info__imagen' src={`${promo?.image.src}`} alt={`${promo?.image.alt}`} />
              </figure>
              <div className="contenedor-promohome-background__contenedor-promohome__info__descripcion">
                <p>SÓLO POR</p>
                <div className='container-promo-home__precio'>
                  <div className='container-promo-home__precio__text'>
                    <span>$ {formatNumber(promo?.precio)}
                    </span>
                  </div>
                </div>
                <Link to={`/promo/${promo?.numeroDePromo}`} className="contenedor-promohome-background__contenedor-promohome__info__descripcion__calltoaction">
                  <div className={`contenedor-promohome-background__contenedor-promohome__info__descripcion__calltoaction__html calltoaction__html-${promo?.numeroDePromo}`} dangerouslySetInnerHTML={{ __html: promo?.messageCallToAction }} />
                  <img className='contenedor-promohome-background__contenedor-promohome__info__descripcion__calltoaction__flecha' src="/icons/arrow-promo.svg" alt="" />
                </Link>
              </div>
            </div>
          </Layout>
        </div >
      </div >
    </Link>
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

export default PromoHome