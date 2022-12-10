
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path='' element={hello}/>
      </Routes>
    </Router>
   </>
  )
}

export default App;
