import Test from './Test'
import {render} from '@testing-library/vue'
test ('Test should work',() => {
    const {getByText} = render(Test)
    getByText('Count is: 0')
})