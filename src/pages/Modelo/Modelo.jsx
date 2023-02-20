import './Modelo.css'
import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/Layout/Layout'
import { useParams } from "react-router-dom"
import { usePrices } from "../../hooks/usePrices"
import modelosJSON from "../../data/modelos.json"
import { formatNumber } from '../../helpers/formatNumber'
import Fancybox from "../../components/Fancybox/Fancybox";
import { goTop } from '../../helpers/goTop'
import { scroller } from '../../helpers/scroller'
import Form from '../../components/Form/Form'
import { Helmet } from 'react-helmet'
import { Fade } from 'react-reveal'

const Modelo = () => {
  const { modelo } = useParams();
  const [modeloData, setModeloData] = useState({});

  const preciosModelo = {
    contado: usePrices(
      modelosJSON.filter((modeloFilter) => modeloFilter.id == modelo)
    )[0][0],
  };

  useEffect(() => {
    setModeloData(
      () => modelosJSON.filter((modeloData) => modeloData.id == modelo)[0]
    );
  }, [modelo]);

  useEffect(() => {
    goTop();
  }, []);

  return (
    <>
      <Helmet>
        <title>{`${modeloData?.nombre} - ${modeloData?.tipologia?.substr(0, 4).toUpperCase()} ${modeloData?.tipologia?.substr(4, 10).toUpperCase()} | Casa YA`}</title>
      </Helmet>
      <Fade>
        <Layout>
          <div className='container-modelo'>
            <div className='container-modelo__gallery'>
              <div className='container-modelo__gallery__header'>
                <span>{modeloData?.nombre}</span>
                <img src={`/logos/${modeloData?.tipologia}.svg`} alt="" srcset="" />
              </div>
              <div className='container-modelo__gallery__content'>
                <Fancybox>
                  <Fade>
                    <figure className='container-modelo__gallery__content__container-imagen'>
                      <img className='container-modelo__gallery__content__container-imagen__imagen' data-fancybox="gallery" src={`/modelos/${modeloData?.tipologia}_${modeloData?.id}/Modelo_${modeloData?.id}_1.webp`} alt="" srcset="" />
                    </figure>
                    <figure className='container-modelo__gallery__content__container-imagen'>
                      <img className='container-modelo__gallery__content__container-imagen__imagen' data-fancybox="gallery" src={`/modelos/${modeloData?.tipologia}_${modeloData?.id}/Modelo_${modeloData?.id}_2.webp`} alt="" srcset="" />
                    </figure>
                    <figure className='container-modelo__gallery__content__container-imagen'>
                      <img className='container-modelo__gallery__content__container-imagen__imagen' data-fancybox="gallery" src={`/modelos/${modeloData?.tipologia}_${modeloData?.id}/Modelo_${modeloData?.id}_3.webp`} alt="" srcset="" />
                    </figure>
                    <figure className='container-modelo__gallery__content__container-imagen'>
                      <img className='container-modelo__gallery__content__container-imagen__imagen' data-fancybox="gallery" src={`/modelos/${modeloData?.tipologia}_${modeloData?.id}/Modelo_${modeloData?.id}_4.webp`} alt="" srcset="" />
                    </figure>
                  </Fade>
                </Fancybox>
              </div>
            </div>
            <div className='container-modelo__info'>
              <p><span>¡Comprá ahora tu casa con este <strong>precio exclusivo!</strong></span></p>
              <div className='container-modelo__precio'>
                <span>$ {formatNumber(preciosModelo?.contado)}
                  <div className='container-modelo__precio__fondo'></div>
                </span>
              </div>
              <div className='container-modelo__info__caracteristicas'>
                <div className='container-modelo__info__caracteristicas__icon'>
                  <figure>
                    <img src="/icons/cama.svg" alt="Dormitorios" />
                  </figure>
                  {
                    modeloData?.ambientes?.cantidadDeDormitorios === 1
                      ? <span>{modeloData?.ambientes?.cantidadDeDormitorios} Dormitorio</span>
                      : <span>{modeloData?.ambientes?.cantidadDeDormitorios} Dormitorios</span>
                  }
                </div>
                <div className='container-modelo__info__caracteristicas__icon'>
                  <figure>
                    <img src="/icons/bano.svg" alt="Baños" />
                  </figure>
                  {
                    modeloData?.ambientes?.cantidadDeBanos === 1
                      ? <span>{modeloData?.ambientes?.cantidadDeBanos} Baño</span>
                      : <span>{modeloData?.ambientes?.cantidadDeBanos} Baños</span>
                  }
                </div>
                <div className='container-modelo__info__caracteristicas__icon'>
                  <figure>
                    <img src="/icons/cocina-comedor.svg" alt="Estar + Cocina + Comedor" />
                  </figure>
                  <span>Estar + Cocina + Comedor</span>
                </div>
                {
                  modeloData?.ambientes?.pergola
                  && <div className='container-modelo__info__caracteristicas__icon'>
                    <figure>
                      <img src="/icons/pergola.svg" alt="Estar + Cocina + Comedor" />
                    </figure>
                    <span>Pérgola</span>
                  </div>
                }

              </div>

            </div>
            <div className="container-modelo__info__superficies">
              <h2>Superficies</h2>
              <p>Cubierta: {
                modeloData?.superficies?.superficieCubierta
              }m² {
                  modeloData?.superficies?.superficieSemicubierta
                  && ` | Semicubierta: ${modeloData?.superficies?.superficieSemicubierta}m²`
                }
                <br />
                Total a construir: {
                  modeloData?.superficies?.superficieSemicubierta
                    ? modeloData?.superficies?.superficieCubierta + modeloData?.superficies?.superficieSemicubierta
                    : modeloData?.superficies?.superficieCubierta
                }m²
              </p>
            </div>
            <div className="container-modelo__info__descripcion">
              <h2>Descripción</h2>
              <p>{modeloData?.descripcion}</p>
            </div>
            <div className="container-modelo__info__compra">
              <button className='container-modelo__info__compra__button' onClick={() => scroller(".signupFrm", 180)}>Comprá ya</button>
              <div className="container-modelo__info__compra__legenda">
                <figure>
                  <img src="/icons/compra-protegida.svg" alt="" />
                </figure>
                <p>Compra protegida. Recibí el producto que esperabas o te devolvemos tu dinero.</p>
              </div>
              <div className="container-modelo__info__compra__legenda">
                <figure>
                  <img src="/icons/garantia.svg" alt="" />
                </figure>
                <p>7 días de garantía de fábrica.</p>
              </div>
            </div>
            <div className="container-modelo__info__2">
              <Fade>
                <div className="container-modelo__info__2__ficha-tecnica">
                  <h2>Ficha técnica</h2>
                  <ul className='container-modelo__info__2__ficha-tecnica__list'>
                    {
                      modeloData?.fichaTecnica?.map((item) => {
                        return (
                          <li className='container-modelo__info__2__ficha-tecnica__list__item'><span className='container-modelo__info__2__ficha-tecnica__list__item__name'>{item?.name}</span>
                            <div className='container-modelo__info__2__ficha-tecnica__list__item__borde'></div>
                            <span className='container-modelo__info__2__ficha-tecnica__list__item__valor'>{item?.placeholder}</span>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
                <div className="container-modelo__info__2__regalo">
                  <p>Además, con la compra de tu casa <strong>te regalamos:</strong></p>
                  <div className='container-modelo__info__2__regalo__enunciado'>
                    <img className='container-modelo__info__2__regalo__enunciado__vector-regalo' src="/icons/Vector-regalo.svg" alt="regalo" />
                    <div className='container-modelo__info__2__regalo__enunciado__texto'>¡Manual de decoración + kit de bienvenida de CasaYa!</div>
                    <div className='container-modelo__info__2__regalo__enunciado__fondo'></div>
                  </div>
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

export default Modelo