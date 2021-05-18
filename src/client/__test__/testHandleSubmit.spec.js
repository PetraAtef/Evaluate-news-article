// to solve ReferenceError: regeneratorRuntime is not defined
// https://knowledge.udacity.com/questions/174638
import 'babel-polyfill'

import {event_handler} from '../js/formHandler'

describe('Testing the submit event handlers functionality', () => {
  test('Testing the event_handler() function', () => {
    expect(event_handler).toBeDefined()
  })
})
