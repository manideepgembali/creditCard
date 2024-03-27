// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  FirstContainer,
  Heading,
  Line,
  CardContainer,
  NameHeading,
  NumberHead,
  SecondContainer,
  PaymentContainer,
  PaymentHeading,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [value1, setFunction] = useState('')

  const [value2, setFunction2] = useState('')

  const onChangeNumber = event => {
    setFunction(event.target.value)
  }

  const onChangeName = event => {
    setFunction2(event.target.value)
  }
  return (
    <MainContainer>
      <FirstContainer>
        <div>
          <Heading>Credit Card</Heading>
          <Line />
        </div>
        <CardContainer data-testid="creditCard">
          <div>
            <NumberHead>{value1}</NumberHead>
          </div>
          <div>
            <NameHeading>CARDHOLDER NAME</NameHeading>
            <NumberHead>{value2.toUpperCase()}</NumberHead>
          </div>
        </CardContainer>
      </FirstContainer>
      <SecondContainer>
        <PaymentContainer>
          <PaymentHeading>Payment Method</PaymentHeading>
          <Input
            type="text"
            placeholder="Card Number"
            onChange={onChangeNumber}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            onChange={onChangeName}
          />
        </PaymentContainer>
      </SecondContainer>
    </MainContainer>
  )
}
export default CreditCard
