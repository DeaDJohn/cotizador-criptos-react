import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    gap: 3rem;
    margin-top: 30px;
`
const Imagen = styled.img`
    display: block;
    width: 120px;
`

const Texto = styled.p`
    font-size: 18px;
`
const Precio = styled.p`
    font-size: 23px;
    span{
        font-weight: 700;
    }
`

const Resultado = ({resultado}) => {
    console.log( resultado );
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado;

  return (
    <Contenedor>
        <Imagen src={`http://cryptocompare.com/${IMAGEURL}`} alt="Imagen cripto" />
        <div>
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <Texto>Precio más alto del día:  <span>{HIGHDAY}</span></Texto>
            <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
            <Texto>Última actualización:  <span>{CHANGEPCT24HOUR}</span></Texto>
        </div>
    </Contenedor>
  )
}

export default Resultado