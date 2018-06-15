import React, { Component } from "react";
import { TextInputField } from "./Inputs.js";
import { addItem } from "../contacts.js";

function SuccessMsg(props) {
  return (
    <div className="notification is-success">
      <button className="delete" onClick={props.closeFn} />
      <p> Contact Added!</p>
    </div>
  );
}

function ActionBar(props) {
  return (
    <div className="field is-grouped">
      <div className="control">
        <button className="button is-link" onClick={props.onSubmit}>
          Add Contact
        </button>
      </div>
      <div className="control">
        <button className="button is-text" onClick={props.onReset}>
          Reset
        </button>
      </div>
    </div>
  );
}


class NewContactPage extends Component {
    constructor () {
        super ()

        this.state = {
            name:'',
            email:'',
            phone:'',
            address:'',
            city:'',
            state1:'',
            zip:'',
            showSuccess: false
        }
    }

    closeSuccessMsg () {
        this.setState({showSuccess: false})
    }

    submitNewContact () {

        const newContact = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            address: this.state.address,
            city: this.state.city,
            state1: this.state.state1,
            zip:this.state.zip
        }
        addItem(newContact)

        this.setState({showSuccess: true})
        this.resetFormFields()
    }

    resetFormFields () {
        this.setState ({
            name:'',
            email:'',
            phone:'',
            address:'',
            city:'',
            state1:'',
            zip:''
        })
    }

    updateProperty (fieldId, evt) {
        const newValue = evt.currentTarget.value
        this.setState(function (prevState){
            let newObj = {}
            newObj[fieldId] = newValue
            return newObj
        })
    }

    render () {
        const closeSuccessMsg = this.closeSuccessMsg.bind(this)
        const successNotification = this.state.showSuccess ? <SuccessMsg closeFn={closeSuccessMsg} /> : null


        const nameChangeFn = this.updateProperty.bind(this, 'name')
        const emailChangeFn = this.updateProperty.bind(this, 'email')
        const phoneChangeFn = this.updateProperty.bind(this, 'phone')
        const addressChangeFn = this.updateProperty.bind(this, 'address')
        const cityChangeFn = this.updateProperty.bind(this, 'city')
        const stateChangeFn = this.updateProperty.bind(this, 'state1')
        const zipChangeFn = this.updateProperty.bind(this, 'zip')

        const submitFn = this.submitNewContact.bind(this)
        const resetFn = this.resetFormFields.bind(this)

        return (
            <section>
                {successNotification}
                <TextInputField label="Contact Name" value={this.state.name} placeholderTxt = "Contact Name" onChange={nameChangeFn} />
                <TextInputField label="email" value={this.state.email} placeholderTxt = "e-mail" onChange={emailChangeFn} />
                <TextInputField label="phone" value={this.state.phone} placeholderTxt = "phone" onChange={phoneChangeFn} />
                <TextInputField label="address" value={this.state.address} placeholderTxt = "address" onChange={addressChangeFn} />
                <TextInputField label="city" value={this.state.city} placeholderTxt = "city" onChange={cityChangeFn} />
                <TextInputField label="state1" value={this.state.state1} placeholderTxt = "state" onChange={stateChangeFn} />
                <TextInputField label="zip" value={this.state.zip} placeholderTxt = "zip" onChange={zipChangeFn} />
                <ActionBar onSubmit={submitFn} onReset={resetFn} />
                </section>
        )
    }
}

export default NewContactPage
