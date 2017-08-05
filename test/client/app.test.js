import './setup-dom'
import test from 'ava'
import React from 'react'
import { shallow, mount } from 'enzyme'

import App from '../../client/components/App'
import * as api from '../../client/api'

App.prototype.componentDidMount = () => {}

test('<App />', t => {
  const wrapper = shallow(<App />)
  t.is(wrapper.find('h1').text(),'TEST IT!')
})

test.cb('mount <App />', t => {
  const wrapper = mount(<App />)
  t.is(wrapper.find('.app-container').exists(),true)
  t.is(wrapper.find('h4').text(), 'Test it real good.')
  t.end()
})
