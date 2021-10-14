import React from 'react'

export default function TodosInput() {
    return (
        <div className="row">
                <h1>TODOS</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <div className="input-field">
                            <input 
                                type="text"
                                id="todo_input"
                                name="todo"
                                className="yellow-input"
                            />
                            <label htmlFor="todo_input">Введите задачу</label>
                        </div>
                        <button 
                            className="btn yellow darken-4" 
                            style={{marginRight: 10}}
                        >
                            Подтвердить
                        </button>
                    </div>
                </div>  
            </div>
    )
}
