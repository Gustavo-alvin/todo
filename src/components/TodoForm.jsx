import {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");
    const [category, steCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value || !category) return;
        // Adicionar todo
        addTodo(value,  category);
        // limpar os campos
        setValue("");
        steCategory("");
    }

  return (
    <div className='todo-form'>
        <h2>Criar tarefa</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} placeholder='Digite o Título' onChange={(e) => setValue(e.target.value)} />
            <select value={category} onChange={(e) => steCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="trabalho">Trabalho</option>
                <option value="pessoal">Pessoal</option>
                <option value="estudos">Estudos</option>
            </select>
            <button type='submit'>Criar tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm