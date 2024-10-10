import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import SmartphoneForm from "../components/SmartPhoneForm";
import TabletForm from "../components/TabletForm";
import LaptopForm from "../components/LaptopForm";
import OtherDeviceForm from "../components/OtherForm";

const Form = () => {
  const { type } = useParams();

  if (type === "SmartPhone") {
    return (
      <>
        <SmartphoneForm />
      </>
    );
  }
  if (type === "smartphone") {
    return (
      <>
        <SmartphoneForm />
      </>
    );
  } else if (type === "tablet") {
    return (
      <>
        <TabletForm />
      </>
    );
  } else if (type === "laptop") {
    return (
      <>
        <LaptopForm />
      </>
    );
  } else {
    return (
      <>
        <OtherDeviceForm />
      </>
    );
  }
};

export default Form;
