import React from 'react';
function Menu(){
    return(
        <>
      <div className="div">
        <div className="div-2">
          <div className="div-3">
            <img 
              loading="lazy"
              srcSet="..."
              className="img"
               alt="Descripción de la imagen 1"
            /> 
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/69221bcdec04beb70b05d8aed92465fd2ee94f53f74cd94a1864e9ac1ef03406?"
              className="img-2"
               alt="Descripción de la imagen 1"
            />
            <div className="div-4">Buscador</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca843139e693a7c6dad42ab4bb8e52abf7e20f5f2c1791d45fd9439198dc97e6?"
              className="img-3"
               alt="Descripción de la imagen 1"
            />
            <div className="div-5">Subir</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ef6cbd457dcf3c4a074cf8513384cd89a64cfa01a4ffb8c6326e039a4f60898?"
              className="img-4"
               alt="Descripción de la imagen 1"
            />
          
            <div className="div-6">Guardados</div>
          </div>
        </div>
        <div className="div-7">
          <div className="div-8">
            <div className="div-9">
              Bienvenidos a la biblioteca colaborativa UDP
            </div>
            <div className="div-10">
              Explora Material y archivos creados por compañeros y pares de la
              comunidad de diseño udp.
            </div>
            <div className="div-11">
              <div className="div-12">
                <div className="div-13">Buscar material...</div>
                
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9749afd9ff6a82dd4e809cd4f5db0948d35759d20b7e84622823780839bfec82?"
                  className="img-5"
                   alt="Descripción de la imagen 1"
                />
                
              </div>
            </div>
            <div className="div-14">Explora categorías</div>
            <div className="div-15">
              <div className="div-16">
                <div className="column">
                  <div className="div-17">
                    <div className="div-18" />
                  </div>
                </div>
                <div className="column-2">
                  <div className="div-19">
                    <div className="div-20" />
                  </div>
                </div>
                <div className="column-3">
                  <div className="div-21">
                    <div className="div-22" />
                  </div>
                </div>
              </div>
            </div>
            <div className="div-23">
              <div className="div-24">
                <div className="column">
                  <div className="div-25">
                    <div className="div-26" />
                  </div>
                </div>
                <div className="column-4">
                  <div className="div-27">
                    <div className="div-28" />
                  </div>
                </div>
                <div className="column-5">
                  <div className="div-29">
                    <div className="div-30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          justify-content: center;
          background-color: #fff;
          display: flex;
          gap: 0px;
        }
        @media (max-width: 991px) {
          .div {
            flex-wrap: wrap;
          }
        }
        .div-2 {
          display: flex;
          flex-direction: column;
          font-size: 11px;
          color: var(--Grey, #888);
          font-weight: 600;
          white-space: nowrap;
          text-align: center;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .div-2 {
            display: none;
            white-space: initial;
          }
        }
        .div-3 {
          border-radius: 6px;
          background-color: var(--Light-blue, #edf5ff);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 80px 17px;
        }
        @media (max-width: 991px) {
          .div-3 {
            display: none;
            white-space: initial;
          }
        }
        .img {
          aspect-ratio: 1.56;
          object-fit: auto;
          object-position: center;
          width: 61px;
          margin-top: 63px;
        }
        @media (max-width: 991px) {
          .img {
            margin-top: 40px;
          }
        }
        .img-2 {
          aspect-ratio: 1.05;
          object-fit: auto;
          object-position: center;
          width: 21px;
          fill: var(--Blue, #4ca0fa);
          stroke-width: 1.5px;
          stroke: var(--Blue, #4ca0fa);
          border-color: rgba(76, 160, 250, 1);
          border-style: solid;
          border-width: 2px;
          margin-top: 64px;
        }
        @media (max-width: 991px) {
          .img-2 {
            margin-top: 40px;
          }
        }
        .div-4 {
          color: var(--Blue, #4ca0fa);
          font-family: Montserrat, sans-serif;
          align-self: stretch;
          margin-top: 8px;
        }
        .img-3 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 19px;
          fill: var(--Grey, #888);
          stroke-width: 1.5px;
          stroke: var(--Light-blue, #edf5ff);
          border-color: rgba(237, 245, 255, 1);
          border-style: solid;
          border-width: 2px;
          margin-top: 64px;
        }
        @media (max-width: 991px) {
          .img-3 {
            margin-top: 40px;
          }
        }
        .div-5 {
          font-family: Montserrat, sans-serif;
          margin-top: 8px;
        }
        .img-4 {
          aspect-ratio: 0.8;
          object-fit: auto;
          object-position: center;
          width: 16px;
          fill: var(--Grey, #888);
          stroke-width: 1.5px;
          stroke: var(--Grey, #888);
          border-color: rgba(136, 136, 136, 1);
          border-style: solid;
          border-width: 2px;
          margin-top: 64px;
        }
        @media (max-width: 991px) {
          .img-4 {
            margin-top: 40px;
          }
        }
        .div-6 {
          font-family: Montserrat, sans-serif;
          align-self: stretch;
          margin: 8px 0 342px;
        }
        @media (max-width: 991px) {
          .div-6 {
            margin-bottom: 40px;
          }
        }
        .div-7 {
          align-items: center;
          display: flex;
          justify-content: center;
          flex-grow: 1;
          flex-basis: 0;
          width: fit-content;
          padding: 80px 60px;
        }
        @media (max-width: 991px) {
          .div-7 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .div-8 {
          display: flex;
          margin-top: 8px;
          width: 920px;
          max-width: 100%;
          flex-direction: column;
        }
        .div-9 {
          justify-content: center;
          align-items: center;
          color: var(--Black, #000);
          text-align: center;
          padding: 7px 60px;
          font: 700 32px Montserrat, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-9 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .div-10 {
          justify-content: center;
          margin-top: 14px;
          color: var(--Black, #000);
          text-align: center;
          padding: 3px 47px;
          font: 400 18px Montserrat, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-10 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .div-11 {
          border-radius: 80px;
          border-color: rgba(136, 136, 136, 1);
          border-style: solid;
          border-width: 2px;
          background-color: var(--White, #fff);
          align-self: center;
          display: flex;
          margin-top: 94px;
          width: 735px;
          max-width: 100%;
          flex-direction: column;
          font-size: 16px;
          color: var(--Black, #000);
          font-weight: 400;
          justify-content: center;
          padding: 20px 24px;
        }
        @media (max-width: 991px) {
          .div-11 {
            margin-top: 40px;
            padding: 0 20px;
          }
        }
        .div-12 {
          display: flex;
          gap: 15px;
        }
        @media (max-width: 991px) {
          .div-12 {
            flex-wrap: wrap;
          }
        }
        .div-13 {
          font-family: Montserrat, sans-serif;
          justify-content: center;
          padding: 4px 0;
        }
        @media (max-width: 991px) {
          .div-13 {
            max-width: 100%;
          }
        }
        .img-5 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
          stroke-width: 1.5px;
          stroke: var(--Blue, #4ca0fa);
          border-color: rgba(76, 160, 250, 1);
          border-style: solid;
          border-width: 2px;
        }
        .div-14 {
          color: var(--Black, #000);
          align-self: center;
          margin-top: 65px;
          font: 600 24px Montserrat, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-14 {
            margin-top: 40px;
          }
        }
        .div-15 {
          margin: 64px 26px 0;
        }
        @media (max-width: 991px) {
          .div-15 {
            max-width: 100%;
            margin: 40px 10px 0 0;
          }
        }
        .div-16 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-16 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 33%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-17 {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .div-17 {
            margin-top: 40px;
          }
        }
        .div-18 {
          border-radius: 4px;
          background-color: var(--Grey, #888);
          height: 171px;
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 33%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-19 {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .div-19 {
            margin-top: 40px;
          }
        }
        .div-20 {
          border-radius: 4px;
          background-color: var(--Grey, #888);
          height: 171px;
        }
        .column-3 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 33%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-3 {
            width: 100%;
          }
        }
        .div-21 {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .div-21 {
            margin-top: 40px;
          }
        }
        .div-22 {
          border-radius: 4px;
          background-color: var(--Grey, #888);
          height: 171px;
        }
        .div-23 {
          margin: 64px 26px 0;
        }
        @media (max-width: 991px) {
          .div-23 {
            max-width: 100%;
            margin: 40px 10px 0 0;
          }
        }
        .div-24 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-24 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .div-25 {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .div-25 {
            margin-top: 40px;
          }
        }
        .div-26 {
          border-radius: 4px;
          background-color: var(--Grey, #888);
          height: 171px;
        }
        .column-4 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 33%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-4 {
            width: 100%;
          }
        }
        .div-27 {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .div-27 {
            margin-top: 40px;
          }
        }
        .div-28 {
          border-radius: 4px;
          background-color: var(--Grey, #888);
          height: 171px;
        }
        .column-5 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 33%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-5 {
            width: 100%;
          }
        }
        .div-29 {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .div-29 {
            margin-top: 40px;
          }
        }
        .div-30 {
          border-radius: 4px;
          background-color: var(--Grey, #888);
          height: 171px;
        }
      `}</style>
    </>
    );
}
export default Menu;