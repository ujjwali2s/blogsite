import React from 'react'

const App = () => {
  return (
    <div >
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div className="shrink-0">
    <img className="size-12" src="/img/logo.svg" alt="ChitChat Logo"/>
  </div>
  <div>
    <div className="text-xl font-medium text-white bg-blue">ChitChat</div>
    <p className="text-slate-500 font-serif" >You have a new message!</p>
  </div>
</div>
    </div>
  )
}

export default App
