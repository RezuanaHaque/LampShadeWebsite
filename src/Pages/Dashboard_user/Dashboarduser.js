import * as React from 'react';
import Divider from '@mui/material/Divider';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import HomeIcon from '@mui/icons-material/Home';
import PaymentIcon from '@mui/icons-material/Payment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

function Dashboarduser(props) {
  const { logOut, admin, user } = UseAuth()
  // console.log(admin);

  return (
    <Container>
      {admin ? <h1>Hi, you are logged in as ADMIN</h1> : <h1>hi, you are logged in as USER</h1>}
      <h4>Please Select Where You Want To Visit</h4>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6} md={6}>
          <Divider />

          <List>
            {
              admin ?
                //admin side dashboard
                <>
                  <NavLink to="/manageproducts" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button>
                      <ManageAccountsIcon /><ListItemText primary='Manage All Products' />
                    </ListItem>
                  </NavLink>
                  <NavLink to="/makeadmin" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button>
                      <AdminPanelSettingsIcon /><ListItemText primary='Make Admin' />
                    </ListItem>
                  </NavLink>
                  <NavLink to="/manageorders" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button>
                      <ManageAccountsIcon /><ListItemText primary='Manage All Orders' />
                    </ListItem>
                  </NavLink>
                  <NavLink to="/addproduct" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button>
                      <ManageAccountsIcon /><ListItemText primary='Add Products' />
                    </ListItem>
                  </NavLink>
                </>
                //client side dashboard
                :
                <>
                  <NavLink to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button>
                      <HomeIcon /><ListItemText primary='Home' />
                    </ListItem>
                  </NavLink>
                  <NavLink to="/pay" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button>
                      <PaymentIcon /><ListItemText primary='Pay' />
                    </ListItem>
                  </NavLink>
                  <NavLink to="/myorders" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button>
                      <ShoppingCartIcon /><ListItemText primary='My Orders' />
                    </ListItem>
                  </NavLink>
                  <NavLink to="/writereview" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button>
                      <RateReviewIcon /><ListItemText primary='Write Review' />
                    </ListItem>
                  </NavLink>
                </>

            }
            <ListItem button>
              <LogoutIcon /><ListItemText onClick={logOut} primary='Logout' />
            </ListItem>
          </List>
          <Divider />
        </Grid>
        <Grid item xs={12} lg={6} md={6} sx={{ marginTop: '-100px' }}>
          <img width='550' src="https://www.salonbookingsystem.com/wp-content/uploads/2019/11/salon_booking_system_scheduling_features.png" alt="" />
        </Grid>
      </Grid>
    </Container>
  );
}


export default Dashboarduser;