import './Promo.css'
import React, { useEffect, useState } from 'react'
import { Fade } from "react-reveal"
import { Layout } from '../../components/Layout/Layout'
import { useParams } from "react-router-dom"
import promosJSON from "../../data/promosModelos.json"
import { formatNumber } from '../../helpers/formatNumber'
import Fancybox from "../../components/Fancybox/Fancybox";
import { goTop } from '../../helpers/goTop'
import Form from '../../components/Form/Form'
import { scroller } from '../../helpers/scroller'
import { Helmet } from 'react-helmet'

const Promo = () => {
  const { promo } = useParams();
  const [promoData, setPromoData] = useState();

  useEffect(() => {
    setPromoData(
      () => promosJSON.filter((promoFilter) => promoFilter.id == promo)[0]
    );
  }, [promo]);

  useEffect(() => {
    goTop();
  }, []);

  return (
    <>
      <Helmet>
        <title>{`${promoData?.placeholder} - PROMO | Casa YA`}</title>
      </Helmet>
      <Fade>
        <Layout>
          <div className='container-promo'>
            <div className='container-promo__gallery__header'>
              <div className='container-promo__gallery__header__titulo'>
                <h1>Promo {promoData?.id}</h1>
              </div>
              <div className='container-promo__gallery__header__leyenda' dangerouslySetInnerHTML={{ __html: promoData?.titulo }} />
              <div className='container-promo__gallery__header__filtro'></div>
            </div>
            <div className='container-promo__gallery'>
              <div className='container-promo__gallery__content'>
                <Fancybox>
                  <Fade>
                    <figure className='container-promo__gallery__content__container-imagen'>
                      <img className='container-promo__gallery__content__container-imagen__imagen' data-fancybox="gallery" src={`/promos/promo-${promoData?.id}/promo_${promoData?.id}_1.webp`} alt={`${promoData?.placeholder}`} srcset="" />
                    </figure>
                    <figure className='container-promo__gallery__content__container-imagen'>
                      <img className='container-promo__gallery__content__container-imagen__imagen' data-fancybox="gallery" src={`/promos/promo-${promoData?.id}/promo_${promoData?.id}_2.webp`} alt={`${promoData?.placeholder}`} srcset="" />
                    </figure>
                    <figure className='container-promo__gallery__content__container-imagen'>
                      <img className='container-promo__gallery__content__container-imagen__imagen' data-fancybox="gallery" src={`/promos/promo-${promoData?.id}/promo_${promoData?.id}_3.webp`} alt={`${promoData?.placeholder}`} srcset="" />
                    </figure>
                    <figure className='container-promo__gallery__content__container-imagen'>
                      <img className='container-promo__gallery__content__container-imagen__imagen' data-fancybox="gallery" src={`/promos/promo-${promoData?.id}/promo_${promoData?.id}_4.webp`} alt={`${promoData?.placeholder}`} srcset="" />
                    </figure>
                  </Fade>

                </Fancybox>
              </div>
            </div>
            <div className='container-promo__info'>
              <p className='container-promo__info__text1'><span>¡No te pierdas <strong>esta oportunidad!</strong></span></p>
              <p className='container-promo__info__text2'><small>POR SÓLO</small></p>
              <div className='container-promo__precio'>
                <span>$ {formatNumber(promoData?.precio)}
                  <div className='container-promo__precio__fondo'></div>
                </span>
              </div>
              <div className='container-promo__info__caracteristicas'>
                <div className='container-promo__info__caracteristicas__icon'>
                  <figure>
                    <img src="/icons/cama.svg" alt="Dormitorios" />
                  </figure>
                  {
                    Number.isInteger(promoData?.ambientes.cantidadDeDormitorios)
                      ? promoData?.ambientes.cantidadDeDormitorios === 1
                        ? <span>{promoData?.ambientes?.cantidadDeDormitorios} Dormitorio</span>
                        : <span>{promoData?.ambientes?.cantidadDeDormitorios} Dormitorios</span>
                      : <span>{promoData?.ambientes?.cantidadDeDormitorios}</span>
                  }
                </div>
                <div className='container-promo__info__caracteristicas__icon'>
                  <figure>
                    <img src="/icons/bano.svg" alt="Baños" />
                  </figure>
                  {
                    promoData?.ambientes.cantidadDeBanos === 1
                      ? <span>{promoData?.ambientes?.cantidadDeBanos} Baño</span>
                      : <span>{promoData?.ambientes?.cantidadDeBanos} Baños</span>
                  }
                </div>
                <div className='container-promo__info__caracteristicas__icon'>
                  <figure>
                    <img src="/icons/cocina-comedor.svg" alt="Estar + Cocina + Comedor" />
                  </figure>
                  <span>Estar + Cocina + Comedor</span>
                </div>
                {
                  promoData?.ambientes.pergola
                  && <div className='container-promo__info__caracteristicas__icon'>
                    <figure>
                      <img src="/icons/pergola.svg" alt="Estar + Cocina + Comedor" />
                    </figure>
                    <span>Pérgola</span>
                  </div>
                }

              </div>
              {promoData?.detalle != "" ? <span className='detalle_align'>{promoData?.detalle}</span> : null}
            </div>
            <div className="container-promo__info__superficies">
              <h2>Superficies</h2>
              <p>Cubierta: {
                promoData?.superficies?.superficieCubierta
              }m² {
                  promoData?.superficies?.superficieSemicubierta
                  && ` | Semicubierta: ${promoData?.superficies?.superficieSemicubierta}m²`
                }
                <br />
                Total a construir: {
                  promoData?.superficies?.superficieSemicubierta
                    ? promoData?.superficies?.superficieCubierta + promoData?.superficies?.superficieSemicubierta
                    : promoData?.superficies?.superficieCubierta
                }m²
              </p>
            </div>
            <div className="container-promo__info__descripcion">
              <h2>Descripción</h2>
              <p>{promoData?.descripcion}</p>
            </div>
            <div className="container-promo__info__compra">
              <button className='container-promo__info__compra__button' onClick={() => scroller(".signupFrm", 180)}>Comprá ya</button>
              <div className="container-promo__info__compra__legenda">
                <figure>
                  <img src="/icons/compra-protegida.svg" alt="" />
                </figure>
                <p>Compra protegida. Recibí el producto que esperabas o te devolvemos tu dinero.</p>
              </div>
              <div className="container-promo__info__compra__legenda">
                <figure>
                  <img src="/icons/garantia.svg" alt="" />
                </figure>
                <p>7 días de garantía de fábrica.</p>
              </div>
            </div>
            <div className="container-promo__info__2">
              <Fade>
                <div className="container-promo__info__2__ficha-tecnica">
                  <h2>Ficha técnica</h2>
                  <ul className='container-promo__info__2__ficha-tecnica__list'>
                    {
                      promoData?.fichaTecnica.map((item) => {
                        return (
                          <li className='container-promo__info__2__ficha-tecnica__list__item'><span className='container-promo__info__2__ficha-tecnica__list__item__name'>{item?.name}</span>
                            <div className='container-promo__info__2__ficha-tecnica__list__item__borde'></div>
                            <span className='container-promo__info__2__ficha-tecnica__list__item__valor'>{item?.placeholder}</span>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </Fade>
            </div>
          </div>
          <Form />
        </Layout>
      </Fade>
    </>
  )
}

export default Promo