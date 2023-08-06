import React, { useState } from 'react'
import styled from 'styled-components'

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
    const { data, loading, error } = state;
    if (loading || error) {
        return (<Alert>{loading ? 'Loading...' : error}</Alert>)
    }
    return (<QuestionWrapper></QuestionWrapper>)
}

export default Question