import React from 'react'
import { Link } from 'react-router-dom'
import { formatNumber } from '../../helpers/formatNumber';
import { usePrices } from '../../hooks/usePrices';
import './CardItem.css'

const CardItem = ({ modelo }) => {
  const precioModelo = {
    contado: usePrices([modelo])[0][0],
  };

  return (
    <Link className='container-carditem__link' to={`/modelo/${modelo?.id}`}>
      <article className='container-carditem'>
        {
          modelo?.placeholder?.length === 1
            ? <p className='container-carditem__titulo'><strong> {modelo?.placeholder[0]}</strong></p>
            : <p className='container-carditem__titulo'><small>{modelo?.placeholder[0]} </small>&nbsp;|&nbsp;<strong> {modelo?.placeholder[1]}</strong></p>
        }
        <div className='container-carditem__card'>
          <figure className='container-carditem__card__contenedor-imagen'>
            <img className='container-carditem__card__contenedor-imagen__imagen' src={modelo?.tipologia == "casaPack" ? `/modelos/${modelo?.tipologia}_${modelo?.id}/Modelo_${modelo?.id}_card.webp` : `/modelos/${modelo?.tipologia}_${modelo?.id}/Modelo_${modelo?.id}_card.webp`} alt='casa-pack' />
          </figure>
          <div className='container-carditem__card__detalles'>
            <strong className='container-carditem__card__precio'>$ {formatNumber(precioModelo?.contado)}</strong>
            {
              modelo?.tipologia === "casaPack"
                ? <span className='container-carditem__card__caracteristicas'>
                  {
                    modelo?.ambientes?.cantidadDeDormitorios === 1
                      ? modelo?.ambientes?.cantidadDeDormitorios + " dormitorio"
                      : modelo?.ambientes?.cantidadDeDormitorios + " dormitorios"
                  }
                </span>
                : <span className='container-carditem__card__caracteristicas'>
                  {
                    modelo?.ambientes?.cantidadDeDormitorios === 1
                      ? modelo?.ambientes?.cantidadDeDormitorios + " dormitorio"
                      : modelo?.ambientes?.cantidadDeDormitorios + " dormitorios"
                  }  | {
                    modelo?.superficies?.superficieCubierta + modelo?.superficies?.superficieSemicubierta
                  }m²
                </span>
            }
          </div>
        </div>
        <buuton className='container-carditem__calltoaction' href='#'>
          <div className='container-carditem__calltoaction__fecha'>
            <img src='/icons/arrow.svg' alt='flecha' />
          </div>
          <span>Construí Ya</span>
        </buuton>
      </article>
    </Link>
  )
}

export default CardItem