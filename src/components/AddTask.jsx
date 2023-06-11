const AddTask = () => {
  return (
    <form className="add-form">
      <div className="form-control">
        <label>Title</label>
        <input 
          type="text" 
          placeholder="Add Task" 
        />
      </div>
      <div className="form-control">
        <label>Day</label>
        <input
          type="text"
          placeholder="Add Day" 
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
        />
      </div>

      <input type="Submit" value="Save Task" className="btn btn-block"/>
    </form>
  )
}

export default AddTask