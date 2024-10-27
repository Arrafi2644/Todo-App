import background from '../src/assets/todo-bg.jpg'
import Main from './Main/Main'

export default function App() {
  return (
    <div className="max-w-6xl mx-auto p-6 font-bold" style={{
      backgroundImage: `url(${background})`
    }}>
      <h1 className='text-3xl md:text-4xl text-gray-800 text-center my-12 md:my-16'>ToDo APP</h1>


       <Main></Main>


    </div>
  )
}