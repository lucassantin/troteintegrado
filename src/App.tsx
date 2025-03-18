import { ButtonBase, Stack, Typography } from "@mui/material"
import { amber, blue, brown, deepOrange, green, pink } from "@mui/material/colors"
import logoTroteIntegrado from './assets/logoTroteIntegrado.png'
import ingressosTI from './assets/ingressosTI.png'
import pokeBola from './assets/pokeBola.png'
import roupas from './assets/roupas.png'
import Card from "./components/Card"
import trigo from './assets/trigo.png'
import coins from './assets/coins.png'

function App() {
  return (
    <Stack sx={{
      width: '100vw',
      minWidth: '320px',
      height: 'auto',
      backgroundColor: blue[500],
      paddingBottom: '2rem',
      }}>
        <Stack sx={{
          display: 'flex',
          alignContent: 'center',
          alignItems: 'center'
        }}>
          <a target="_blank" href="https://www.instagram.com/troteintegrado/?__coig_challenged=1"><img style={{display:'flex', width: '7rem', height: '7rem' }} alt="Trote Integrado" src={logoTroteIntegrado}/></a>
        </Stack>
        <Stack sx={{width: '100%', alignContent: 'center', alignItems: 'center'}}>
          <Stack sx={{
            width: '80%',
          }}>
            <img style={{display: 'flex', width:'100%', height:'auto', borderTopRightRadius:'.6rem', borderTopLeftRadius:'.6rem' }} alt="ingressos TI" src={ingressosTI}/>
            <a target="_blank" href="https://wa.link/am9fuj">
              <ButtonBase sx={{width: '100%'}}>
                <Stack sx={{
                  width: '100%',
                  alignContent: 'center',
                  alignItems: 'center',
                  backgroundColor: blue[200],
                  marginTop: '.3rem',
                  paddingY: '.3rem',
                  borderBottomRightRadius:'.6rem',
                  borderBottomLeftRadius:'.6rem',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1.2rem'
                }}>COMPRE AQUI</Stack>
              </ButtonBase>
            </a>
            <Stack>
              <Stack sx={{
                alignContent: 'center',
                alignItems: 'center',
                marginTop: '.8rem',
                backgroundColor: amber[600],
                paddingBottom: '.6rem',
                borderRadius: '1.3rem',
                border: `2px solid ${brown[900]}`,
                boxShadow: `4px 4px 0 ${brown[900]}`
              }}>
                <Typography sx={{
                  color: brown[900],
                  fontWeight: 800,
                  fontSize: '1.6rem',
                }}>CAMPANHA SOLIDÁRIA</Typography>
                <Typography sx={{
                  color: brown[900],
                  fontWeight: 600,
                  fontSize: '.8rem',
                  lineHeight: 0
                }}>TROTE INTEGRADO DO CTC - 2025.1</Typography>
              </Stack>
              <Stack sx={{
                alignContent: 'center',
                alignItems: 'center',
                marginTop: '1.2rem',
                backgroundColor: 'white',
                border: `2px solid ${brown[900]}`,
                boxShadow: `3px 3px 0 ${brown[900]}`,
                position: 'relative',
              }}>
                <Stack sx={{
                  position: 'absolute',
                  top: -18,
                  left: -18,
                }}><img style={{display: 'flex', width: '3rem', height: 'auto'}} alt="pokeBola" src={pokeBola} /></Stack>
                <Typography sx={{
                  width: '85%',
                  color: brown[900],
                  fontWeight: 'light',
                  fontSize: '.65rem',
                  textAlign: 'center',
                  marginY: '.8rem',
                }}>
                  Olá! Somos do curso de Sistemas de Informação da UFSC e estamos participando
                  do Trote Integrado em 2025. Uma grande parte desse evento envolve a arrecadação
                  de doações solidárias Por isso, pedimos a sua ajuda!
                </Typography>
              </Stack>
              
              
              <Card 
                title="DOAÇÕES DE ROUPAS"
                description="Aceitamos peças de roupas e calçados em boas condições! Se você tiver algo para doar, contate: "
                img={roupas}
                linkButton="https://wa.link/xxq9p3"
                bgColorTitle={deepOrange[600]} // Insert deepOrange[600] here
                positionImg="right"
                textHref="(48) 9184-2909"
              />

              <Card 
                title="DOAÇÕES ALIMENTOS"
                description="Para a doação de alimentos não perecíveis, contate: "
                img={trigo}
                linkButton="https://wa.link/xxq9p3"
                bgColorTitle={pink[300]} // Insert deepOrange[600] here
                positionImg="left"
                textHref="(48) 9184-2909" />

              <Card 
                title="DOAÇÕES MONETÁRIAS"
                description="Todas as doações em dinheiro/PIX recebidas serão utilizadas
                para a compra de cestas básicas! Chave PIX clique para copiar: "
                img={coins}
                linkButton=""
                bgColorTitle={green[500]} // Insert deepOrange[600] here
                positionImg="right"
                textHref="pedro.henrique.loren@gmail.com"
                copy="yes" />
              
              <a style={{textDecoration: 'none', color:'inherit'}} href="https://www.instagram.com/troteintegrado/"><Typography sx={{
                color: brown[900],
                fontWeight: 'bold',
                fontSize: '.62rem',
                marginTop: '4rem',
              }}>Todas as doações arrecadadas serão destinadas a campanha solidária do Trote Integrado, mais informações em <span style={{color:'black'}}>@troteintegrado</span></Typography></a>
            </Stack>
          </Stack>
        </Stack>
    </Stack>
  )
}

export default App
