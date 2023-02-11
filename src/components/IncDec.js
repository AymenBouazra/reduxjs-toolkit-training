import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../redux/counter'

const IncDec = () => {
    const dispatch = useDispatch()
    return (
        <div className=''>
            <button className='btn btn-danger me-3' onClick={() => dispatch(decrement())} >Decrement</button>
            <button className='btn btn-primary me-3' onClick={() => dispatch(increment())} >Increment</button>
            <button className='btn btn-success' onClick={() => dispatch(incrementByAmount(10))} >Increment by 10</button>
        </div>
    )
}

export default IncDec