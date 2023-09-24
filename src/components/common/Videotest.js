import React from 'react'

export default function Videotest() {
  return (
    <div className='mt-5 text-agomic col-sm-12 text-center'>
      <h2>Metaverse Solutions</h2>
      <div className='mt-2 justify-content-center'>
        <iframe
          className='vid-size'
          src="https://www.youtube.com/embed/oX54r5Z0CH8"
          // title="Best of  2023 | Arijit singh  Hits Songs | Latest Bollywood Songs | Indian songs."
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
      </div>
    </div>
  )
}