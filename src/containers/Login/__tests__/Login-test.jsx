/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/*
    global describe: true
    global it: true
    global afterEach: true
    global beforeEach: true
    global before: true
    global after: true
    global context: true
    global mountWithProvider: true
    global React: true
    global expect: true
    global spy: true
    global shallow: true
    global mount: true
    global Store: true
    global mockData: true
*/
/* eslint-enable no-unused-vars */


import Login from '../Login'


describe( 'Component <Login/>', () => {
    let wrapper

    afterEach( () => {
        wrapper.unmount()
    } )

    after( () => {
        Store = Store.reset()
    } )

    it( `should have two inputs (#${_t.login.inputs.username} type=text) (#${_t.login.inputs.password} type=password)`, () => {
        wrapper = mountWithProvider( <Login /> )

        expect( wrapper.find( `#${_t.login.inputs.username}` ).hostNodes() ).to.have.length( 1 )
        expect( wrapper.find( `#${_t.login.inputs.username}` ).hostNodes() ).to.have.attr( 'type' ).equal( 'text' )
        expect( wrapper.find( `#${_t.login.inputs.password}` ).hostNodes() ).to.have.length( 1 )
        expect( wrapper.find( `#${_t.login.inputs.password}` ).hostNodes() ).to.have.attr( 'type' ).equal( 'password' )
    } )

    it( `should have a button (#${_t.login.btn} type=submit)`, () => {
        wrapper = shallow( <Login /> )

        expect( wrapper.find( `#${_t.login.btn}` ) ).to.have.length( 1 )
        expect( wrapper.find( `#${_t.login.btn}` ) ).to.have.attr( 'type' ).equal( 'submit' )
    } )

    it( `should handle (#${_t.login.form}) submit calling _events.logIn function`, () => {
        wrapper = shallow( <Login /> )

        // TODO: Spy in more elegant way when logIn is passed as props

        const logIn = wrapper.instance()._events.logIn = spy() // eslint-disable-line

        expect( logIn ).to.not.have.been.called()

        wrapper.find( `#${_t.login.form}` ).hostNodes().simulate( 'submit' )

        expect( logIn ).to.have.been.called()
    } )

    it( `should render (${_t.login.error}) on logIn error`, () => {
        wrapper = shallow( <Login /> )

        wrapper.setState( {
            error: true
        } )

        expect( wrapper.find( `#${_t.login.error}` ).hostNodes() ).to.have.length( 1 )
    } )
} )
