import FoodSection from "./FoodSection.jsx";
import About from "../about/About.jsx";
import CounterOld from "../../components/CounterOld.jsx";
import Theme from "../../components/Theme.jsx";
import GoogleTabs from "../../components/GoogleTabs.jsx";
import TodosApi from "../../components/TodosApi.jsx";
import TodoApp from "../../components/TodoApp.jsx";
import TodosCrud from "../../components/TodoCrud.jsx";
import Products from "../../components/Products.jsx";


export default function Home() {
  return (
    <div>
      <Products/>
      {/* <TodosCrud /> */}
      {/* <TodoApp /> */}
      {/* <TodosApi /> */}
      {/* <GoogleTabs /> */}
      {/* <Theme />
      <CounterOld/>
      <FoodSection />
      <About />
     */}
    </div>
  );
}
