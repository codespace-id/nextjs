/* eslint-disable no-undef */
import { render, screen, RenderResult, within } from '@testing-library/react'
import Home from '../../pages/index'
import '@testing-library/jest-dom'

// let documentBody: RenderResult;
describe('Testing - pages/index', () => {
    it('show hello world!', () => {
        render(<Home />)
        const main = within(screen.getByTestId('hello'))

        expect(main.getByText('Hello World!')).toBeInTheDocument()
    })

    afterAll((done) => {
        done()
    })
})
