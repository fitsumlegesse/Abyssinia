import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import TestScreen from './screens/TestScreen'
import ProductScreen from './screens/ProductScreen'


const App =  () => {
  return (
    <Router>
    <Header/>
    <main className='py-3' className='body-color'>
      <Container > 
       <Route path='/' component={HomeScreen} exact />
       <Route path='/test' component={TestScreen} exact />
       <Route path='/product/:id' component={ProductScreen}  />
      </Container>
    </main> 
    <Footer />
    </Router>
  );
}

export default App;
