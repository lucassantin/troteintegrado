import { ButtonBase, Stack, Typography } from "@mui/material";
import { brown } from "@mui/material/colors";

interface PropsCard {
    title: string;
    description: string;
    img: string;
    bgColorTitle: string;
    positionImg: string;
    textHref: string;
    linkButton: string;
    copy?: string;
}

export default function Card({title, copy, description, img, linkButton, bgColorTitle, positionImg, textHref}: PropsCard) {
    
    let position = {};

    if(positionImg === 'left'){
        position = {
        position: 'absolute', 
        top: -20,
        left: -20,
        }
    }

    if(positionImg === 'right'){
        position = {
        position: 'absolute', 
        top: 65,
        right: -25,
        transform: 'rotate(25deg)',
        }   
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(textHref)
            .then(() => {
                alert("Texto copiado para a área de transferência!")
            })
            .catch(err => {
                console.error("Erro ao copiar o texto: ", err)
            })
    }

    return(
        <Stack sx={{
            width: '100%',
            height: 'auto',
            alignContent: 'center',
            alignItems: 'center',
            marginTop: '2rem',
            backgroundColor: 'white',
            border: `2px solid ${brown[900]}`,
            boxShadow: `3px 3px 0 ${brown[900]}`,
            position: 'relative',
          }}>
            <ButtonBase href={linkButton} target="_blank" sx={{
              width: '80%',
              height: 'auto',
              backgroundColor: bgColorTitle,
              color: brown[900],
              fontWeight: 800,
              fontSize: '1.2rem',
              paddingY: '.6rem',
              borderRadius: '1.3rem',
              boxShadow: `3px 3px 0 ${brown[900]}`,
              border: `2px solid ${brown[900]}`,
              position: 'relative',
              top: -18
            }}>{title}</ButtonBase>
            <Typography sx={{
              textAlign: 'center',
              color: brown[900],
              fontWeight: 'light',
              fontSize: '.65rem',
              marginBottom: '.8rem',
            }}>{description}<a 
            style={{textDecoration:'none', color:'black', fontWeight: 'bold', cursor: copy === "yes" ? 'pointer' : 'default'}} 
            target="_blank" 
            href={copy === "yes" ? undefined : linkButton} 
            onClick={copy === "yes" ? handleCopy : undefined}
          >
            {textHref}
          </a></Typography>
            <Stack sx={{
              position,
              width: '4rem',
            }}><img style={{width: '100%', height:'auto'}} alt="camisa pokemon" src={img}/></Stack>
          </Stack>
    )
}