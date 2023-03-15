import styled from "styled-components"
import trackit from "../images/trackit.png"
import perfil from "../images/perfil.png"
import bolinha from "../images/bolinha.png"
import check from "../images/check.png"

export default function Hoje () {
    return (
        <Container>

        <ContainerTopo>
         <NavBar>
             <img src={trackit} alt={trackit}/>
             <img src={perfil} alt={perfil}/>
         </NavBar>
        </ContainerTopo>
        
         <Principal>
         < Cima>
        <Meus>
        <p>
        Segunda, 17/05
        </p>
        </Meus>
        <h1>
        Nenhum hábito concluído ainda
        </h1>
        </Cima>




        <ContainerTarefa>
        <TarefaCriada>
        <Textos>
        <h1>Ler 1 capítulo de livro</h1>
        <h2>Sequência atual: 3 dias <br />Seu recorde: 5 dias</h2>
        </Textos>
        <Quadrado>
        <img src={check} alt={check}/>
        </Quadrado>
        </TarefaCriada>
        </ContainerTarefa>

        <ContainerTarefa>
        <TarefaCriada>
        <Textos>
        <h1>Ler 1 capítulo de livro</h1>
        <h2>Sequência atual: 3 dias <br />Seu recorde: 5 dias</h2>
        </Textos>
        <Quadrado>
        <img src={check} alt={check}/>
        </Quadrado>
        </TarefaCriada>
        </ContainerTarefa>

        <ContainerTarefa>
        <TarefaCriada>
        <Textos>
        <h1>Ler 1 capítulo de livro</h1>
        <h2>Sequência atual: 3 dias <br />Seu recorde: 5 dias</h2>
        </Textos>
        <Quadrado>
        <img src={check} alt={check}/>
        </Quadrado>
        </TarefaCriada>
        </ContainerTarefa>
        
       




        </Principal>
        <ContainerLow>
         <Low>
             <Habits>
                 Hábitos
             </Habits>
             <img src={bolinha} alt={bolinha}/>
             <Historic>
                 Histórico
             </Historic>
         </Low>
        </ContainerLow> 
        </Container>
    )
}

const ContainerTopo = styled.div`
    width:100vw;
    margin:0;
    background-color: #126BA5;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const NavBar = styled.div`
    height:70px;
    width:100%;
    margin:0;
    background-color: #126BA5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    img {
    margin-left: 18px;
    margin-right: 18px;
    }
`

const Principal= styled.div`
    width: 100vw;
    min-height: 85vh;
    background-color: #E5E5E5;
    display: flex;
   
    margin-top: 70px;
    flex-direction: column;
   
`

const ContainerLow = styled.div`
    width:100vw;
    margin:0;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: fixed;
    bottom: 0;
`

const Low = styled.div`
    height:70px;
    width:100%;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position:fixed;

    img {
        margin-bottom: 60px;
        position: relative;
    }
`

const Habits = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #52B6FF;
    font-style: normal;
    margin-left: 36px;
`

const Historic = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #52B6FF;
    font-style: normal;
    margin-right: 31px;
`

const Cima = styled.div`
    display: flex;
    height: 100px;
    width: 100%;
    flex-direction: column;

    h1{
    color: #BABABA;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 18px;
    margin-left: 15px;
    }
`

const Meus = styled.div `

    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 23px;
    color: #126BA5;
    margin-left: 15px;
    margin-top:28px;
    margin-bottom: 5px;
`

const TarefaCriada = styled.div`
    background-color: #FFFFFF;
    width: 340px;
    height: 94px;
    border-radius: 5px;
    display: flex;
    

    h1 {
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: #666666;
    margin-left: 10px;
    margin-top: 10px;
    
    }

    h2 {
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 13px;
    color: #666666;
    margin-left: 10px;
    margin-top: 8px;
    line-height:17px;
    }
`

const ContainerTarefa = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`

const Quadrado = styled.div`
    background-color: #EBEBEB;
    width: 69px;
    height: 69px;
    margin-top: 13px;
    margin-left: 35px;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Textos = styled.div`
`