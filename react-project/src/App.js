import React from 'react';

import { Container,H1,Image,ContainerItens,Label, LabelInput, Button} from './styles';

function App(){
  return (
  
    <Container>
    <H1 >Olá </H1>
    <Image></Image>

    <ContainerItens>
      <Label> Nome </Label>
      <LabelInput placeholder="Nome"></LabelInput>

      <Label>Idade</Label>
      <LabelInput placeholder="Idade"></LabelInput>
    
      <Button>Cadastrar</Button>

    </ContainerItens>
    </Container>
    )
    
} 
export default App

