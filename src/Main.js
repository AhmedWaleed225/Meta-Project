import './Main.css';
 
function Main() {
  return (
    <header>
      <main>
        <div className='main-header'>
            <h2>This Week Specials!</h2>
            <button>Online Menu</button>
        </div>
        <div className='Menu'>
            <div className='Menu-item'>
                <img src='https://hips.hearstapps.com/hmg-prod/images/greek-salad-index-642f292397bbf.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*' alt='Greek Salad'></img>
                <h5>Greek Salad</h5>
                <h5 className='price'>4.99$</h5>
                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                <h4>Order for delivery</h4>
            </div>
            <div className='Menu-item'>
                <img src='https://www.eatyourselfskinny.com/wp-content/uploads/2017/09/bruschetta-4-1200x1793.jpg' alt='Greek Salad'></img>
                <h5>Bruchetta</h5>
                <h5 className='price'>5.99$</h5>
                <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.  </p>
                <h4>Order for delivery</h4>
            </div>
            <div className='Menu-item'>
                <img src='https://www.mybakingaddiction.com/wp-content/uploads/2023/07/plated-layered-lemon-dessert-hero-500x375.jpg' alt='Greek Salad'></img>
                <h5>Lemon Dessert</h5>
                <h5 className='price'>5.00$</h5>
                <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. </p>
                <h4>Order for delivery</h4>
            </div>
        </div>
      </main>
    </header>
  );
}

export default Main;
