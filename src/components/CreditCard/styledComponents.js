// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const FirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: black;
  height: 100vh;
  width: 50%;
`
export const Heading = styled.h1`
  color: white;
`
export const Line = styled.hr`
  background-color: #ffd773;
  height: 4px;
  width: 130px;
`
export const CardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  width: 80%;
  height: 300px;
  background-size: cover;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  //align-items: center;
  padding-left: 50px;
  justify-content: space-around;
`
export const NameHeading = styled.p`
  color: #d3d9e0;
  font-size: 20px;
  //text-align: center;
`
export const NumberHead = styled.p`
  margin-top: 70px;
  color: white;
  font-size: 35px;
`
export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 50%;
`
export const PaymentContainer = styled.div`
  width: 80%;
  height: 200px;
  border: 1px solid;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const PaymentHeading = styled.h2`
  color: black;
  text-align: center;
`
export const Input = styled.input`
  width: 350px;
  height: 30px;
  border: 1px solid;
  border-radius: 3px;
  margin: 10px;
  margin-left: 30px;
`
