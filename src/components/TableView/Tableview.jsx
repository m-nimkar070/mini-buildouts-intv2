
const Tableview = ( {fetchedData} ) => {
  return (
    <>
    <div className="container">
        <h1>Employee Data Table</h1>
        <table className="table-container">
          <thead className="table-head">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </thead>

          <tbody>
            {fetchedData &&
              fetchedData.map((employee) => (
                <tr key={employee.id} className="table-content">
                  <td className="table-data">{employee.id}</td>
                  <td className="table-data">{employee.name}</td>
                  <td className="table-data">{employee.email}</td>
                  <td className="table-data">{employee.role}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Tableview
