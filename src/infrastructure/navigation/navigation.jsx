import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
/*Import the Header component */
// import Header from "../../components/header/header.component";
import UserType from "../../features/UserType/UserType.page";
// import { FlexibleDiv } from "../../components/flexibleDiv/flexibleDiv.component";
import Test from "../../features/Test/Test.screen";
import SignIn from "../../features/Authentication/SignIn/SignIn.page";
import Overview from "../../features/Overview/Overview.page";
import Customers from "../../features/Customers/Customers.page";
import IOU from "../../features/IOU/IOU.page";
import Fixed from "../../features/Fixed/Fixed.page";
import AmountDeposited from "../../features/AmountDeposited/AmountDeposited.page";
import AmountWithdrawn from "../../features/AmountWithdrawn/AmountWithdrawn.page";
import CustomerReached from "../../features/CustomerReached/CustomerReached.page";

const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route exact element={<UserType />} path="/" />
        <Route element={<Test />} path="/test" />
        <Route element={<SignIn />} path="/signin" />
        <Route element={<Overview />} path="/overview" />
        <Route element={<AmountDeposited />} path="/amountDeposited" />
        <Route element={<AmountWithdrawn />} path="/amountWithdrawn" />
        <Route element={<CustomerReached />} path="/customerReached" />
        <Route element={<Customers />} path="/customers" />
        <Route element={<IOU />} path="/iou" />
        <Route element={<Fixed />} path="/fixed" />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's No Page like this!!!</p>
            </main>
          }
        />
      </Routes>
    </Router>
  );
};

export default Navigation;
