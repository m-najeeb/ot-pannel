import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Configuration from "./components/Configuration";
import DeviceSetting from "./components/DeviceSetting";
import Updates from "./components/Updates";
import ErrorPage from "./components/ErrorPage";
import RootLayout from "./components/RootLayout";
import { authLoader } from "./components/AuthUser";
import HomePage from "./components/HomePage";
import Sensor from "./components/Sensor";
import Control from "./components/controls/Control";
import TimeAndDate from "./components/TimeAndDate";
import Network from "./components/Network";
import IsolationPT from "./components/IsolationPT";
import Demo from "./components/Demo";
import DeviceInfo from "./components/DeviceInfo";
import HVAC from "./components/HVAC";
import Light from "./components/Light";
import Display from "./components/Display";
import MainDisplay from "./components/MainDisplay";

const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/configuration",
        element: <Configuration />,
        loader: authLoader,
      },
      {
        path: "/devicesetting",
        element: <DeviceSetting />,
        loader: authLoader,
        children: [
          {
            path: "sensor",
            element: <Sensor />,
            loader: authLoader,
          },
          {
            path: "control",
            element: <Control />,
            loader: authLoader,
            children: [
              {
                path: "maindisplay",
                element: <MainDisplay />,
                loader: authLoader,
              },
              {
                path: "hvac",
                element: <HVAC />,
                loader: authLoader,
              },
              {
                path: "light",
                element: <Light />,
                loader: authLoader,
              },
              {
                path: "display",
                element: <Display />,
                loader: authLoader,
              },
            ],
          },
          {
            path: "timeanddate",
            element: <TimeAndDate />,
            loader: authLoader,
          },
          {
            path: "network",
            element: <Network />,
            loader: authLoader,
          },
          {
            path: "isolationpt",
            element: <IsolationPT />,
            loader: authLoader,
          },
          {
            path: "demo",
            element: <Demo />,
            loader: authLoader,
          },
          {
            path: "deviceinfo",
            element: <DeviceInfo />,
            loader: authLoader,
          },
        ],
      },
      { path: "/updates", element: <Updates />, loader: authLoader },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
