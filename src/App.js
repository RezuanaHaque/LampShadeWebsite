import AuthProvider from './Context/AuthProvider';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Navigation from './Pages/Navigation/Navigation';
import Home from './Pages/Home/Home';
import HomeProducts from './Pages/Home/HomeProducts';
import Review from './Pages/Review/Review';
import Pay from './Pages/Pay/Pay';
import AllProducts from './Pages/AllProducts/AllProducts';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import MyOrders from './Pages/MyOrders/MyOrders';
import WriteReview from './Pages/Review/WriteReview';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';
import ManageProduct from './Pages/ManageProduct/ManageProduct';
import AddProduct from './Pages/AddProduct/AddProduct';
import MakeAdmin from './Pages/MakeAdmin/MakeAdmin';
import Dashboarduser from './Pages/Dashboard_user/Dashboarduser';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import HomeReview from './Pages/Home/HomeReview';
import OfferSection from './Pages/OfferSection/OfferSection';
import NavigationAdmin from './Pages/Navigation/NavigationAdmin';
import UseAuth from './Hooks/UseAuth';
import Footer from './Pages/Footer/Footer';
import Error from './Pages/Error/Error';

function App() {
  // const {admin}=UseAuth()
  // console.log(admin);
  return (
    <AuthProvider>
      <BrowserRouter>

        <Switch>
          <Route exact path='/'>
            <Navigation></Navigation>
            <Home></Home>
            <HomeProducts></HomeProducts>
            <OfferSection></OfferSection>
            <HomeReview></HomeReview>
          </Route>
          <Route path='/home'>
            <Navigation></Navigation>
            <Home></Home>
            <HomeProducts></HomeProducts>
            <OfferSection></OfferSection>
            <HomeReview></HomeReview>
          </Route>
          <Route path='/login'>
            <Navigation></Navigation>
            <Login></Login>
          </Route>

          <Route path='/morelamps'>
            <Navigation></Navigation>
            <AllProducts></AllProducts>
          </Route>

          <Route path='/pay'>
            <Navigation></Navigation>
            <Pay></Pay>
          </Route>
          <Route path='/myorders'>
            <Navigation></Navigation>
            <MyOrders></MyOrders>
          </Route>
          <PrivateRoute path='/products/:singleproductID'>
            <Navigation></Navigation>
            <SingleProduct></SingleProduct>
          </PrivateRoute>
          <Route path='/register'>
            <Navigation></Navigation>
            <Register></Register>
          </Route>
          <Route path='/writereview'>
            <Navigation></Navigation>
            <WriteReview></WriteReview>
          </Route>
          <Route path='/manageorders'>
            <NavigationAdmin></NavigationAdmin>
            <ManageAllOrders></ManageAllOrders>
          </Route>
          <Route path='/manageproducts'>
            <NavigationAdmin></NavigationAdmin>
            <ManageProduct></ManageProduct>
          </Route>
          <Route path='/makeadmin'>
            <NavigationAdmin></NavigationAdmin>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path='/reviews'>
          <Navigation></Navigation>
            <Review></Review>
          </Route>
          <PrivateRoute path='/dashboard'>
            <Dashboarduser></Dashboarduser>
          </PrivateRoute>
          <Route path='/addproduct'>
            <NavigationAdmin></NavigationAdmin>
            <AddProduct></AddProduct>
          </Route>
          {/* <Route path='/footer'>
            <Footer></Footer>
          </Route> */}
          <Route path='*'>
            <Navigation></Navigation>
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
