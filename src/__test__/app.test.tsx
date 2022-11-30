import React from 'react'
import renderer from 'react-test-renderer';
import { expect, test } from 'vitest'

import App from '../App'

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  return result as renderer.ReactTestRendererJSON
}

test('App', () => {
  const component = renderer.create(
    <App />,
  )
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
