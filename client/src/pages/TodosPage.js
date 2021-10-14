import React from 'react'
import TodosInput from '../components/TodosInput'
import TodosList from '../components/TodosList'

export default function TodosPage() {
    return (
        <div className="container">
            <TodosInput/>
            <TodosList />
        </div>

    )
}
