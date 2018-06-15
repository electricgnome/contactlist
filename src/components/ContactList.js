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

updateSearchTxt (evt)

}
