import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const QuestionWrapper = styled.div`
 display: flex;
 justify-content: space-between;
 flex-direction: column;
 margin: 5%
`
const Alert = styled.div`
 text-align: center;
`

const Question = () => {
    const initialState = {
        data: [],
        loading: true,
        error: ''
    }
    const [state, setState] = useState(initialState);
    const ROOT_API = 'https://api.stackexchange.com/2.2/';
    const { id } = useParams();
    const { data, loading, error } = state;
    useEffect(() => {
        const getQuestion = async () => {
            try {
                const URL = `${ROOT_API}questions/${id}?site=stackoverflow`;
                const data = await fetch(URL, { mode: 'no-cors'})
                const dataJSON = await data.json();
                console.log(`ANSWER ${JSON.stringify(dataJSON)}`)
                setState({...initialState, data: dataJSON, loading: false })
            } catch(e) {
                setState({...initialState, error: e.message })
            }
          }
        getQuestion()
    }, [])

    if (loading || error) {
        return (<Alert>{loading ? 'Loading...' : error}</Alert>)
    }
    return (<QuestionWrapper></QuestionWrapper>)
}

export default Question