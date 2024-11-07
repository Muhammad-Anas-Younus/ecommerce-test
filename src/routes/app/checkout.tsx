import { Button, Input, Radio, RadioGroup } from "@nextui-org/react";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Cart from "../../components/cart";
import useAppDispatch from "../../hooks/useAppDispatch";
import { emptyCart } from "../../store/slices/cart";

export const Checkout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formState = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      country: "",
      paymentMethod: "cod",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email().required("This field is required"),
      firstName: Yup.string().required("This field is required"),
      lastName: Yup.string().required("This field is required"),
      address: Yup.string().required("This field is required"),
      city: Yup.string().required("This field is required"),
      country: Yup.string().required("This field is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      toast.success("Order placed successfully");
      dispatch(emptyCart());
      resetForm();
      navigate("/");
    },
  });

  console.log(formState.values);

  return (
    <div className="flex gap-10 container py-4">
      <div className="w-[60%] space-y-4">
        <h1 className="text-lg font-medium">Contact information</h1>
        <div className="grid gap-4 grid-cols-2">
          <Input
            variant="bordered"
            label="Email "
            className="w-full col-span-2"
            name="email"
            onChange={formState.handleChange}
            onBlur={formState.handleBlur}
            isInvalid={Boolean(
              formState.touched.email && formState.errors.email
            )}
            type="email"
            errorMessage={formState.errors.email}
          />
          <Input
            variant="bordered"
            label="First Name "
            className="w-full"
            name="firstName"
            onChange={formState.handleChange}
            onBlur={formState.handleBlur}
            isInvalid={Boolean(
              formState.touched.firstName && formState.errors.firstName
            )}
            errorMessage={formState.errors.firstName}
          />
          <Input
            variant="bordered"
            label="Last Name "
            className="w-full"
            name="lastName"
            onChange={formState.handleChange}
            onBlur={formState.handleBlur}
            isInvalid={Boolean(
              formState.touched.lastName && formState.errors.lastName
            )}
            errorMessage={formState.errors.lastName}
          />
          <Input
            variant="bordered"
            label="Address "
            className="w-full col-span-2"
            name="address"
            onChange={formState.handleChange}
            onBlur={formState.handleBlur}
            isInvalid={Boolean(
              formState.touched.address && formState.errors.address
            )}
            errorMessage={formState.errors.address}
          />
          <Input
            variant="bordered"
            label="City "
            className="w-full"
            name="city"
            onChange={formState.handleChange}
            onBlur={formState.handleBlur}
            isInvalid={Boolean(formState.touched.city && formState.errors.city)}
            errorMessage={formState.errors.city}
          />
          <Input
            variant="bordered"
            label="Country "
            className="w-full"
            name="country"
            onChange={formState.handleChange}
            onBlur={formState.handleBlur}
            isInvalid={Boolean(
              formState.touched.country && formState.errors.country
            )}
            errorMessage={formState.errors.country}
          />
        </div>
        <h1 className="text-lg font-medium">Payment Method</h1>
        <RadioGroup value={formState.values.paymentMethod}>
          <Radio value="cod">Cash On Delivery</Radio>
        </RadioGroup>
        <Button
          onClick={() => formState.handleSubmit()}
          color="primary"
          className="w-56 py-6"
        >
          Confirm Order
        </Button>
      </div>
      <div className="w-[40%] space-y-4">
        <h1 className="text-lg font-medium">Order Summary</h1>
        <div className="bg-gray-100 overflow-auto p-4 rounded">
          <Cart productContainerClassName="max-h-96" variant="checkout" />
        </div>
      </div>
    </div>
  );
};
