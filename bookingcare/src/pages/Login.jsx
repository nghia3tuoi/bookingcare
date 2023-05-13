import { Button, Input } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import authApi from "api/authApi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Loading from "components/component/Loading";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required().min(4),
  })
  .required();
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const messErrLogin = useSelector((state) => state.auth.login?.data);
  //hook form login
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => handleLoginAPi(data, dispatch, navigate);
  //handle login api
  const handleLoginAPi = (data, dispatch, navigate) => {
    setLoading(true);
    setTimeout(() => {
      authApi.login(data, dispatch, navigate);
      setLoading(false);
    }, 3000);
  };
  console.log(messErrLogin?.message);
  return (
    <div id="loggin">
      <div className="w-screen h-screen bg-[#0f172a]">
        <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
          <div className=" p-10">
            <div className="text-lg font-bold uppercase text-white">
              SIGN IN
            </div>
            <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="">
                <div className="mb-2">
                  <label
                    htmlFor="email"
                    className="uppercase text-xs font-bold text-white "
                  >
                    EMAIL
                  </label>
                </div>
                <Input
                  {...register("email")}
                  id="email"
                  type="email"
                  label="Email"
                  containerProps={{
                    className: "min-w-0",
                  }}
                />
                <p className="text-red-500 text-xs">
                  {errors.email
                    ? errors.password?.message
                    : messErrLogin?.errCode === 1
                    ? messErrLogin?.message
                    : null}
                </p>
              </div>
              <div className="mt-2">
                <div className="mb-2">
                  <label
                    htmlFor="password"
                    className="uppercase text-xs font-bold text-white"
                  >
                    password
                  </label>
                </div>
                <Input
                  {...register("password")}
                  id="password"
                  type="password"
                  label="Password"
                  containerProps={{
                    className: "min-w-0",
                  }}
                />
                <p className="text-red-600 text-xs">
                  {errors.password
                    ? errors.password?.message
                    : messErrLogin?.errCode === 2
                    ? messErrLogin?.message
                    : null}
                </p>
              </div>
              <div className="flex justify-between text-xs mt-1 text-[#2563eb]">
                <button>Bạn chưa có tài khoản?</button>
                <button>Quên mật khẩu?</button>
              </div>
              <div className="mt-5">
                <Button fullWidth type="submit">
                  LOGIN
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {loading ? <Loading /> : null}
    </div>
  );
}

export default Login;
