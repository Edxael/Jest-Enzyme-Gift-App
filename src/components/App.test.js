import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'

  // Code for the test...
Enzyme.configure({ adapter: new Adapter() })
const app = Enzyme.shallow(<App />)

it('renders correctly', () => {
  expect(app).toMatchSnapshot()
})
