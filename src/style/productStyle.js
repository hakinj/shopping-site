function productStyle() {

  const prodStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: '150px 0px 0px 0px'
  }

  const prodStyle2 = {
    textAlign: 'center',
    margin: '0.5rem',
    padding: 'px',
    fontSize: '0.9rem',
    width: '200px'


  }

  const imageStyle = {


    margin: '1rem',
    width: '200px',
    height: '200px'

  }

  const CartContainer = {
    margin: '120px 0px 0px 0px'

  }

  const cart = {
    display: 'flex',
    textAlign: 'center',
    border: '2px solid #FAF9F9',
    background: '#FAF9F9',
    margin: '5px ',
    height: '250px',
    fontSize: '0.5rem',
    width: '900px'



  }

  const wrapper = {
    
    display: 'flex'
  }

  const cartImageStyle = {
    margin: '1rem',
    width: '200px',
    height: '200px'
  }

  const cart2 = {
    margin: '100px 0px 0px 150px ',
    fontSize: '1rem'
  }
  const cart3 = {
    width: '400px',
    height: ' 250px',
    background: '#FAF9F9',
    border: '2px solid #FAF9F9',
    margin:'0px 0px 0px 920px',
    marginTop: '125px',
    borderRadius: '10px',
    position: 'fixed' 


  }

  const imgh1 = {
    display: 'flex'

  }
  const tags ={
    margin: '100px'
  }



  return { prodStyle, prodStyle2, imageStyle, CartContainer, cart, cartImageStyle, cart2, cart3, wrapper, imgh1,tags }

}

export default productStyle