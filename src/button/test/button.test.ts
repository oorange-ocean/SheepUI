import {render} from '@testing-library/vue'
import Button from '../src/button'

test ('Button should work',() => {
    const {getByRole} = render(Button)
    getByRole('button')
})

test ('Button should work with slot',() => {
    const {getByText} = render(Button,{
        slots: {
            default() {
                return 'hello'
            }
        }
    })
    getByText('hello')
    
})

test ('default type should be seconodary',() => {
    const {getByRole} = render(Button)
    expect(getByRole('button').classList).toContain('s-btn--secondary')
})

test('props type should work', () => {
    const {getByRole} = render(Button,{
        props: {
            type: 'primary'
        }
    })
    expect(getByRole('button').classList).toContain('s-btn--primary')
})