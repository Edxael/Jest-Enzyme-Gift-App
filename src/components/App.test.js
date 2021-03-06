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

it('initializes the `state` with an empty list of gifts', () => {
  expect(app.state().gifts).toEqual([])
})

it('adds  a new gift to `state` when clicking the `add gift button`', () => {
  app.find('.btn-add').simulate('click')
  expect(app.state().gifts).toEqual([ { id: 1} ])
})
