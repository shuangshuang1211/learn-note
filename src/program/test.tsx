import React from 'react';

const initData = [
  {
    id: 1,
    name: '学习英语',
    status: 'complete',
    createAt:  Date.now(),
  },
  {
    id: 2,
    name: '学习程序',
    status: 'pending',
    createAt:  Date.now(),
  },
];


export default function App() {
  const [todoList, setTodoList] = useState(initData);
  const [inputText, setInputText] = useState('');

  const handleInput = (ev) => {
    console.log('++++ ev', ev);
  }

  const handleAdd = () => {
    setTodoList(prevList => {
      prevList.push({
        id: prevList[prevList.length - 1]?.id + 1,
        name: inputText,
        status: 'pending',
        createAt:  Date.now(),
      })
    })
  };

  const handleDelete = (id) => () => {
    setTodoList((prevList) => {
      return prevList.filter(item => item.id !== id)
    });
  }


  return (
    <div className='App'>
      <input type="text" onClick={handleInput}/>
      <button onClick={handleAdd}>Add</button>
      {todoList.map((item) => (
        <div
          key={item.id}
        >
          <input type="checkbox"  checked={item.status === 'complete'} />
          <span>{item.name}</span>
          <button onClick={handleDelete(item.id)}>{'delete'}</button>
        </div>
      ))}
    </div>
  );
}