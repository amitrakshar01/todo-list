import React from 'react'

export const AddTodo = () => {
  return (
    <div className="container">
        <h3>Add a Todo</h3>
        <form>
  <div className="mb-3">
    <label for="title" className="form-label">Todo title</label>
    <input type="text" className="form-control" id="title" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="desc" className="form-label">Todo description</label>
    <input type="text" className="form-control" id="desc"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
</form>
    </div>
  )
}
