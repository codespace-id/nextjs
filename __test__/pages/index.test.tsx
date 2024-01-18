/* eslint-disable no-undef */
import { render, RenderResult } from '@testing-library/react'
import Index from '../../pages/index'
import '@testing-library/jest-dom'

let documentBody: RenderResult
describe('Testing - pages/index', () => {
    beforeEach(() => {
        documentBody = render(<Index />)
    })

    it('Title', () => {
        const title = documentBody.getByTestId('title')
        expect(title).toBeInTheDocument()
    })

    it('Subtitle', () => {
        const subTitle = documentBody.getByTestId('subtitle')
        expect(subTitle).toBeInTheDocument()
    })

    afterAll((done) => {
        done()
    })
})
