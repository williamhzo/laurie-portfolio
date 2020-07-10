/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const contactWrapper = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, auto)',
  gridTemplateRows: 'repeat(2, 1fr)',
  gap: '1rem',
})

const emojiStyle = css({
  height: '2rem',
  marginRight: '1rem',
})

const ContactCard = () => {
  return (
    <div css={contactWrapper}>
      <div className="flex">
        <img
          css={emojiStyle}
          src={
            'https://res.cloudinary.com/flextance/image/upload/v1594333249/laurie-bonneau-folio/emojis/contact_n6hrhj.png'
          }
          alt={'contact emoji'}
        ></img>
        <p>laurie@lauriebonneau.fr</p>
      </div>
      <div className="flex">
        <img
          css={emojiStyle}
          src={
            'https://res.cloudinary.com/flextance/image/upload/v1594333249/laurie-bonneau-folio/emojis/telephone_oh239a.png'
          }
          alt={'contact emoji'}
        ></img>
        <p>06 31 66 43 07</p>
      </div>
      <div className="flex">
        <img
          css={emojiStyle}
          src={
            'https://res.cloudinary.com/flextance/image/upload/v1594333249/laurie-bonneau-folio/emojis/adresse_t2lfkf.png'
          }
          alt={'contact emoji'}
        ></img>
        <p>PARIS 20ème</p>
      </div>
      <div className="flex">
        <img
          css={emojiStyle}
          src={
            'https://res.cloudinary.com/flextance/image/upload/v1594333250/laurie-bonneau-folio/emojis/instagram_dsdso1.png'
          }
          alt={'contact emoji'}
        ></img>
        <p>@marsoucreve</p>
      </div>
    </div>
  )
}

export default ContactCard
