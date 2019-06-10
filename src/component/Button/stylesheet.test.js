import stylesheet from './stylesheet'

describe('stylesheet', ()=>{
    it('return an object', ()=>{
        const props={
            hasHover:false
        }

        const styles = stylesheet(props)
        expect(styles).toEqual(
            expect.any(Object)
        )
    })
    it('when not hover',()=>{
        const props={
            hasHover:false
        }
        const styles = stylesheet(props)
        expect(styles.boxShadow).not.toBeDefined()
    })
    it('when not pressed',()=>{
        const props={
            isPressed:false
        }
        const styles = stylesheet(props)
        expect(styles.boxShadow).not.toBeDefined()
    })
})