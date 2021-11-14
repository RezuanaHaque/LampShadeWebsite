import AuthProvider from './Context/AuthProvider';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
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
import Footer from './Pages/Footer/Footer';
import Error from './Pages/Error/Error';
import Navig from './Pages/Navigation/Navig';
import NavigAdmin from './Pages/Navigation/NavigAdmin';

function App() {
  // const {admin}=UseAuth()
  // console.log(admin);
  return (
    <AuthProvider>
      <BrowserRouter>

        <Switch>
          <Route exact path='/'>
            <Navig></Navig>
            <Home></Home>
            <HomeProducts></HomeProducts>
            <OfferSection></OfferSection>
            <HomeReview></HomeReview>
          </Route>
          <Route path='/home'>
            <Navig></Navig>
            <Home></Home>
            <HomeProducts></HomeProducts>
            <OfferSection></OfferSection>
            <HomeReview></HomeReview>
          </Route>
          <Route path='/login'>
            <Navig></Navig>
            <Login></Login>
          </Route>

          <Route path='/morelamps'>
            <Navig></Navig>
            <AllProducts></AllProducts>
          </Route>

          <Route path='/pay'>
            <Navig></Navig>
            <Pay></Pay>
          </Route>

          <Route path='/myorders'>
            <Navig></Navig>
            <MyOrders></MyOrders>
          </Route>
          <PrivateRoute path='/products/:singleproductID'>
            <Navig></Navig>
            <SingleProduct></SingleProduct>
          </PrivateRoute>
          <Route path='/register'>
            <Navig></Navig>
            <Register></Register>
          </Route>
          <Route path='/writereview'>
            <Navig></Navig>
            <WriteReview></WriteReview>
          </Route>
          <Route path='/manageorders'>
            <NavigAdmin></NavigAdmin>
            <ManageAllOrders></ManageAllOrders>
          </Route>
          <Route path='/manageproducts'>
            <NavigAdmin></NavigAdmin>
            <ManageProduct></ManageProduct>
          </Route>
          <Route path='/makeadmin'>
            <NavigAdmin></NavigAdmin>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path='/reviews'>
            <Navig></Navig>
            <Review></Review>
          </Route>
          <PrivateRoute path='/dashboard'>
            <Dashboarduser></Dashboarduser>
          </PrivateRoute>
          <Route path='/addproduct'>
            <NavigAdmin></NavigAdmin>
            <AddProduct></AddProduct>
          </Route>
          <Route path='*'>
            <Navig></Navig>
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
