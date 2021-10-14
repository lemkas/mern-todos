import React from 'react'
import TodosItem from './TodosItem'

export default function TodosList() {
    return (
        <div className="card grey lighten-3">
            <div className="card-content white-text">
                <ul class="collection" style={{border: 0}}>
                    <TodosItem />
                    <TodosItem />
                    <TodosItem />
                    <TodosItem />
                    <TodosItem />
                    
                </ul>
            </div>
        </div>
    )
}
