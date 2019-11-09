import React from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import firebase from "firebase"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faExclamation } from "@fortawesome/free-solid-svg-icons"

var firebaseConfig = {
  apiKey: "AIzaSyA3wHtlQll7NBIrwJzw7yivcKdezUbe90g",
  authDomain: "pixel-heart-production-mails.firebaseapp.com",
  databaseURL: "https://pixel-heart-production-mails.firebaseio.com",
  projectId: "pixel-heart-production-mails",
  storageBucket: "pixel-heart-production-mails.appspot.com",
  messagingSenderId: "815179189670",
  appId: "1:815179189670:web:4bf32f435e221a5087d367",
  measurementId: "G-8HRC3N4N2Z",
}
// Initialize Firebases
firebase.initializeApp(firebaseConfig)
firebase.analytics()
const db = firebase.firestore()

class Mailer extends React.Component {
  notifyB = message =>
    toast(message, {
      containerId: "B",
    })
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      title: "",
      message: "",
      date: "",
      isDisabled: false,
    }
  }
  componentDidMount() {
    console.log(db)
    const today = new Date()
    let date =
      today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
    this.setState({ date: date })
  }
  handleSubmit = () => {
    const { name, email, message, title } = this.state
    const successStyle = {
      display: "flex",
      flexDirection: "row",
      marginBottom: -20,
    }
    const messageStyle = {
      marginLeft: 15,
    }
    if (name !== "" && email !== "" && message !== "" && title !== "") {
      this.notifyB(
        <div style={successStyle}>
          <FontAwesomeIcon icon={faCheck} color="green" />
          <h4 style={messageStyle}> Your message was sent!</h4>
        </div>
      )
      fetch("http://api.ipify.org/?format=json")
        .then(results => results.json())
        .then(data => {
          if (data !== undefined) {
            this.clearTextInputs(data.ip)
          }
        })
    } else {
      this.notifyB(
        <div style={successStyle}>
          <FontAwesomeIcon icon={faExclamation} color="orange" />
          <h4 style={messageStyle}> Fill all fields!!</h4>
        </div>
      )
    }
  }
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  clearTextInputs = ip => {
    const { name, email, message, date } = this.state
    db.collection("messages").add({
      date,
      email,
      name,
      locationIP: ip,
      message,
    })
    this.setState({ isDisabled: true })
    setTimeout(function() {
      window.location.reload()
    }, 2000)
  }
  render() {
    const styles = {
      container: {
        padding: 15,
        backgroundColor: "gray",
        borderRadius: 5,
        boxShadow: "3px 3px 3px gray",
      },
      text: {
        color: "white",
        marginBottom: 0,
      },
      textInput: {
        display: "flex",
        border: "none",
        borderRadius: 1,
      },
      textInputLong: {
        height: 200,
        display: "flex",
        flex: 1,
        borderRadius: 1,
        width: "100%",
      },
      button: {
        marginTop: 10,
        borderRadius: 5,
        width: 125,
        height: 35,
      },
      twoColumn: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      },
    }
    return (
      <div style={styles.container}>
        <ToastContainer
          enableMultiContainer
          containerId={"B"}
          position={toast.POSITION.TOP_RIGHT}
          autoClose={3000}
          hideProgressBar={true}
        />
        <form>
          <div style={styles.twoColumn}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                marginRight: 10,
              }}
            >
              <p style={styles.text}>Name:</p>
              <input
                style={styles.textInput}
                type="text"
                placeholder="Name"
                name="name"
                onChange={this.handleInputChange}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                marginLeft: 10,
              }}
            >
              <p style={styles.text}>Email:</p>
              <input
                style={styles.textInput}
                type="text"
                placeholder="Email"
                name="email"
                onChange={this.handleInputChange}
              />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <p style={styles.text}>Title:</p>
            <input
              style={styles.textInput}
              type="text"
              placeholder="Title"
              name="title"
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <p style={styles.text}>Message:</p>
            <textarea
              height={220}
              style={styles.textInputLong}
              placeholder="Message"
              name="message"
              onChange={this.handleInputChange}
            />
          </div>
          <input
            style={styles.button}
            type="button"
            disabled={this.state.isDisabled}
            value="Send"
            onClick={() => {
              this.handleSubmit()
            }}
          />
        </form>
      </div>
    )
  }
}

export default Mailer
