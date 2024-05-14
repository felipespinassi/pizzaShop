import { Helmet } from "react-helmet-async";
import MonthRevenuecard from "./month-revenue-card";
import MounthOrdersAmountCard from "./mounth-orders-amount-card";
import DayOrdersAmountCard from "./day-oders-amount-card";
import MounthCanceledOrdersAmountCard from "./mounth-canceled-orders-amount-card";

export default function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className=" flex flex-col gap-4 ">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className=" grid grid-cols-4 gap-4">
          <MonthRevenuecard />
          <MounthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MounthCanceledOrdersAmountCard />
        </div>
      </div>
    </>
  );
}
