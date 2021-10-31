import styled from 'styled-components';
import {BiDollarCircle} from 'react-icons/bi';
import {MdPersonOutline} from 'react-icons/md'

export const App = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #76D7C4;
`

export const ContentBox = styled.div`
    height: 80vh;
    width: 60vw;
    background-color: white;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    -webkit-box-shadow: 17px 17px 37px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 17px 17px 37px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 17px 17px 37px 0px rgba(0, 0, 0, 0.3);
    position: relative;



    @media screen and (max-width: 1100px)
    {
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 100vh;
        border-radius: 0;
    }

    @media screen and (max-width: 920px)
    {
        width: 100%;
    }
`

export const BillValueBox = styled.div`
    height: 80%;
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 1100px)
    {
        width: 90%;
        margin-top: 50px;
    }
`

export const ResultBox = styled.div`
    height: 90%;
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #006652;
    border-radius: 5px;

    @media screen and (max-width: 1100px)
    {
        width: 80%;
        margin-bottom: 50px;
        margin-top: 30px;
    }
`

export const BillAbountBar = styled.div`
    height: 25%;
    width: 90%;
    display: flex;
    flex-direction: column;
`

export const InputLabel = styled.label`
    background: #F5F5F5;
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 5px;
    justify-content: space-between;
    border-radius: 3px;
`

export const TipButtonsBar = styled.div`
    height: 50%;
    width: 90%;
    margin-top: 30px;
`

export const NumberOfPeopleBar = styled.div`
    height: 25%;
    width: 90%;

    @media screen and (max-width: 920px)
    {
        margin-top: 20px;
    }
`

export const TextAboutDiv = styled.span`
    font-family: 'Roboto Mono', sans-serif;
    color: #76D7C4;
`

export const InputNumber = styled.input.attrs(() => ({
    type: 'number',
    max: '2000',
}))`
    border-radius: 3px;
    border: 0;
    padding: 10px 20px;
    height: 40px;
    font-size: 25px;
    outline: none;
    font-weight: bold;
    text-align: right;
    width: 50%;
    background: #F5F5F5;
    color: #006652;
`

export const DollarIcon = styled(BiDollarCircle)`
    font-size: 25px;
    width: 50px;
    color: #D4D4D4;
`

export const ButtonsBar = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
`

export const TipButton = styled.button`
    background: #006652;
    padding: 15px;
    width: 32%; 
    flex-wrap: wrap;
    height: 45%;
    border: 0;
    text-align: center;
    font-weight: bold;
    font-size: 3vh;
    font-family: 'Roboto Mono', sans-serif;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    transition: 0.3s;

    &:hover
    {
        color: black;
        background-color: #03E7BA;
    }
`

export const CustomTipInput = styled.input.attrs(() => ({
    type: 'number',
    placeholder: 'Custom'
}))`
    width: 32%; 
    flex-wrap: wrap;
    height: 45%; 
    padding: 0;
    border: 0;
    outline: none;
    text-align: center;
    font-weight: bold;
    font-size: 15px;
    font-family: 'Roboto Mono', sans-serif;
    border-radius: 5px;
    background: #F5F5F5;
`

export const PeopleIcon = styled(MdPersonOutline)`
    font-size: 25px;
    width: 50px;
    color: #D4D4D4;
`

export const CalculationsBar = styled.div`
    height: 35%;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 920px)
    {
        margin-top: 30px;
    }
`

export const CalcBar = styled.div`
    height: 45%;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const SummaryButtonsBar = styled.div`
    height: 20vh;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const CalcTextBar = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center
`

export const CalcTextTitle = styled.span`
    font-family: 'Roboto Mono', sans-serif;
    color: white;
    font-size: 2.5vh;
`

export const CalcExtraInfo = styled.span`
    font-family: 'Roboto Mono', sans-serif;
    color: #D4D4D4;
    font-size: 12px;
`

export const Result = styled.span`
    font-family: 'Roboto Mono', sans-serif;
    color: #03E7BA;
    font-size: 2.5em;
`

export const ResetButton = styled.button`
    background: none;
    border: 0;
    font-family: 'Roboto Mono', sans-serif;
    color: #03E7BA;
    font-size: 1.5em;
    cursor: pointer;
    transition: 0.3s;

    &:hover
    {
        color: white;
    }
`

export const PayButton = styled.button`
    background: #03E7BA;
    padding: 15px;
    width: 55%; 
    height: 45%;
    border: 0;
    text-align: center;
    font-weight: bold;
    font-size: 3vh;
    font-family: 'Roboto Mono', sans-serif;
    border-radius: 5px;
    color: black;
    cursor: pointer;
    transition: 0.3s;

    &:hover
    {
        color: black;
        background-color: white;
    }
`