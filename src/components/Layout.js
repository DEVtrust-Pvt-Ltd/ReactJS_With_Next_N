import React, { PureComponent } from 'react'
import TopNav from './TopNav'
import VendorNav from './vendors/VendorNav'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Layout extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
    }

  }
  componentDidMount() {
    let userToken = localStorage.getItem('userToken')?localStorage.getItem('userToken'):null
    if(userToken){
      this.setState({isLoggedIn:true})
    }else{
      this.setState({isLoggedIn:false})
    }
  }


  render () {

    return (
      <>
        <div className='layout'>
          <header>
            <ToastContainer />
            {
              (this.state.isLoggedIn)?<VendorNav />:<TopNav />

            }
          </header>
          { this.props.children }
        </div>
      </>
    )
  }
}

export default Layout
