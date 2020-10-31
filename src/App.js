function App() {
  return (
    <div>
      <label htmlFor="bar"> bar</label>
      <input type="text" onClick={() => { console.log("I am click") }}></input>
    </div>
  )
}


export default App;
