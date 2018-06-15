import React, { Component } from 'react'
import ContactsTable from './ContactPage/ContactsTable.js'
import {getContacts} from '../contacts.js'


function NoContactsFound () {
    return (
        <p className='no-contacts'> No Contacts Found.</p>
    )
}


function SearchInput (props) {
    return (
        <input className='input is-medium'
        type='text'
        value={props.searchTxt}
        onChange={props.updateSearchTxt}
        placeholder='Search Contacts ...' />
    )
}



class ContactList extends Component {
    constructor () {
        super()
        this.state={
            contacts: getContacts(),
            searchTxt:''
        }
    }

updateSearchTxt (evt) {
    const newText = evt.currrentTarget.value
        this.setState({searchTxt: newText})
}

    isMatch(searchTxt, item) {
        const lcSearchTxt = searchTxt.toLowerCase()
        const lcName = item.name.loLowerCase()

        return lcName.includes(lcSearchTxt)
    }

    render () {
        const updateSearchTxt = this.updateSearchTxt.bind(this)
        const matchFn = this.isMatch.bind(null, this.state.searchTxt)
        const filterdItems = this.state.contacts.filter(matchFn)

        let bodyComponent = <ContactTable contacts = {filterdItems} />
        if (filterdItems.lenght === 0 ) {
            bodyComponent = <NoContactsFound />
        }

        return (
            <section>
                <SearchInput searchTxt={thos.state.searchTxt} updateSearchTxt={updateSearchTxt} />
                <div className='push-down'>
                    {bodyComponent}
                    </div>
                    </section>
        )
    }
}

export default ContactList