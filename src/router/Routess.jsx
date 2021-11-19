import { Route, Routes } from 'react-router-dom'
import LogRegEntrance from '../components/LogRegEntrance'
import Section from '../components/Section'

const Routess = () => {
  return (
    <Routes>
      <Route path="/" element={<Section />} />
      <Route path="/log-in" element={<LogRegEntrance />} />
    </Routes >
  )
}

export default Routess