// LIBRARIES
import * as Yup from "yup";

// * Validation schema for email forms only
export const loginSchema = Yup.object({
  password: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
});

// * Validation schema for new account resgistration forms only
export const registerNewAccountSchema = Yup.object({
  nickname: Yup.string()
    .max(15, "Must be above 4 characters (max 15)")
    .min(5, "Must be above 4 characters (max 15)")
    .required("Please enter your favorite genre!"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .max(15, "Must be above 4 characters (max 15)")
    .min(5, "Must be above 4 characters (max 15)")
    .matches(/^(?=.*[a-z])/, " Must Contain One Lowercase Character")
    .matches(/^(?=.*[A-Z])/, "  Must Contain One Uppercase Character")
    .matches(/^(?=.*[0-9])/, "  Must Contain One Number Character")
    .matches(/^(?=.*[0-9])/, "  Must Contain One Number Character")
    .matches(
      /^(?=.*[!@#\$%\^&\*])/,
      "  Must Contain  One Special Case Character"
    )
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords do not match!.")
    .required("Please Confirm Password!"),
});
