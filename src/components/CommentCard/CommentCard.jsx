import React from 'react'
import "./CommentCard.css"

const CommentCard = ({ comment }) => {
  return (
    <div className='container-comment-card animation-comment-card'>
      <img className='container-comment-card__icon' src='/icons/comment.svg' alt='' />
      <div className="container-comment-card__header">
        <h5>{comment?.cliente}</h5>
        <div className='container-comment-card__header__puntuacion'>
          {(() => {
            let estrella = [];
            for (let i = 0; i < comment?.estrellas; i++) {
              estrella.push(<img src="/icons/estrella.svg" alt="" />);
            }
            return estrella;
          })
          ()}
        </div>
      </div>
      <div className='container-comment-card__header__content'>
        <p>{comment?.comentario}</p>
      </div>
    </div>
  )
}

export default CommentCard