import React, {useState, useEffect} from 'react'
import { App, InputNumber, CalcBar, InputLabel, Result, PeopleIcon, TextAboutDiv, BillAbountBar, BillValueBox, ContentBox, NumberOfPeopleBar, ResultBox, TipButtonsBar, DollarIcon, ButtonsBar, TipButton, CustomTipInput, CalculationsBar, SummaryButtonsBar, CalcTextBar, CalcTextTitle, CalcExtraInfo, ResetButton, PayButton} from './homeElements'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);

    const buttons = [5, 10, 15, 25, 50];
    const oneOfButtons = buttons.map(button => <TipButton onClick = {e => setTipValue(e.target.value)} value = {button}>{button}%</TipButton>)

    const [billValue, setBillValue] = useState('');
    const billAmountHandler = e => setBillValue(e.target.value);

    const [tipValue, setTipValue] = useState('');
    const tipValueHandler = e => setTipValue(e.target.value)

    const [peopleAmount, setPeopleAmount] = useState(1);
    const peopleAmountHandler = e => setPeopleAmount(e.target.value);


    const reset = () => {
        setBillValue(0);
        setTipValue(5);
        setPeopleAmount(1);
    }

    return (
        <>
            <App>
                <ContentBox data-aos="fade-right">


                    {/* Left Side -------------- */}
                    
                    <BillValueBox>

                        {/* BillAmount */}

                        <BillAbountBar>
                            <TextAboutDiv>
                                Bill
                            </TextAboutDiv>
                            
                            <InputLabel>
                                <DollarIcon/>
                                <InputNumber onChange = {billAmountHandler} value = {billValue}>
                                    
                                </InputNumber>
                            </InputLabel>
                        </BillAbountBar>


                        {/* TipAmount */}

                        <TipButtonsBar>
                            <TextAboutDiv>
                                Tip Amount
                            </TextAboutDiv>

                            <ButtonsBar>
                                {oneOfButtons}
                                <CustomTipInput onChange = {tipValueHandler} value = {tipValue}/>
                            </ButtonsBar>
                        </TipButtonsBar>


                        {/* PeopleAmount */}

                        <NumberOfPeopleBar>
                            <TextAboutDiv>
                                Number of People
                            </TextAboutDiv>
                            <InputLabel>
                                <PeopleIcon/>
                                <InputNumber onChange = {peopleAmountHandler} value = {peopleAmount}/>
                            </InputLabel>
                        </NumberOfPeopleBar>
                    </BillValueBox>




                    {/* Right Side -------------- */}

                    <ResultBox>
                        <CalculationsBar>   
                            <CalcBar>
                                <CalcTextBar>
                                    <CalcTextTitle>
                                        Tip amount
                                    </CalcTextTitle>
                                    <CalcExtraInfo>
                                        / person
                                    </CalcExtraInfo>
                                </CalcTextBar>

                                <Result>
                                    ${billValue ? ((billValue * (tipValue / 100)) / (peopleAmount ? peopleAmount : 1)).toFixed(2) : '0'}
                                </Result>
                            </CalcBar>

                            <CalcBar>
                                <CalcTextBar>
                                    <CalcTextTitle>
                                        Total
                                    </CalcTextTitle>
                                    <CalcExtraInfo>
                                        / person
                                    </CalcExtraInfo>
                                </CalcTextBar>

                                <Result>
                                    ${billValue ? (billValue / (peopleAmount ? peopleAmount : 1)).toFixed(2) : 0.00}
                                </Result>
                            </CalcBar>
                        </CalculationsBar>

                        <SummaryButtonsBar>
                            <ResetButton onClick = {reset}>
                                Reset
                            </ResetButton>

                            <PayButton onClick = {reset}>
                                Pay
                            </PayButton>
                        </SummaryButtonsBar>
                    </ResultBox>
                </ContentBox>
            </App>  
        </>
    )
}

export default Home
