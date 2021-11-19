import { Route, Routes } from 'react-router-dom'
import Section from '../components/Section'

const Routess = () => {
  return (
    <Routes>
      <Route path="/" element={<Section />} />
    </Routes >
  )
}

export default Routess