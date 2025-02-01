import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Verification: React.FC = () => {
  const VERIFY_CODE = gql`
    mutation VerifyCode($username: String!, $code: String!) {
      verifyCode(username: $username, code: $code) {
        code
        message
      }
    }
  `;

  const { username } = useLocation().state;

  const [formData, setFormData] = useState({
    code: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target; // Destructure name and value from the input event

    setFormData((prevData) => ({
      ...prevData, // Spread the previous state
      [name]: value, // Update the value of the field corresponding to 'name'
    }));
  };

  // const [createUser, { loading, error }] = useMutation(CREATE_USER);
  const [verifyCode] = useMutation(VERIFY_CODE);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const hasEmptyValues = Object.values(formData).some(
        (value) => value === "" || value === null || value === undefined
      );
      if (hasEmptyValues) {
        throw new Error("Please enter verification code.");
      }
      await verifyCode({ variables: { ...formData, username } });
      toast.success("Successfully verified account. Going to sign in page...", {
        onClose: () => navigate("/sign-in"),
      });
    } catch (err) {
      toast.error((err as Error).message, { autoClose: 10000 });
    }
  };

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj text-center">
          CodeHive
        </h1>

        <div className="grid max-w-lg grid-cols-1 mx-auto mt-8 gap-y-12 lg:mt-24 lg:max-w-none lg:grid-cols-2">
          <div className="lg:px-12 xl:px-16">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              Verify
            </h1>{" "}
            <br />
            <p>A verification code has been sent to your email.</p>
            <form
              action="#"
              method="POST"
              className="mt-10"
              onSubmit={handleSubmit}
            >
              <div className="space-y-3">
                <div>
                  <input
                    type="text"
                    name="code"
                    value={formData.code}
                    onChange={handleChange}
                    placeholder="Enter verification code"
                    className="block w-full px-4 py-4 overflow-hidden text-base font-normal text-gray-900 placeholder-gray-600 transition-all duration-200 border border-gray-300 caret-gray-900 rounded-xl bg-gray-50 focus:outline-none focus:bg-white focus:border-gray-900 focus:ring-gray-900 font-pj"
                  />
                </div>
              </div>

              <div className="relative mt-8">
                <button
                  type="submit"
                  className="relative flex items-center justify-center w-full px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-gray-600"
                >
                  Verify Code
                </button>
              </div>
            </form>
            {/* <p className="mt-4 text-base text-center text-gray-900 font-pj">
              Already joined?{" "}
              <Link
                to="/sign-in"
                title=""
                className="font-bold rounded hover:underline focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                Login now
              </Link>
            </p> */}
          </div>
          <div className="lg:px-12 xl:px-16">
            <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl font-pj">
              Grow your business fast with CodeHive UI Kit.
            </h3>

            <svg
              className="w-auto h-4 mt-8 text-gray-300 lg:mt-12"
              viewBox="0 0 172 16"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)"
              />
            </svg>

            <ul className="mt-8 space-y-6 lg:mt-12 md:space-y-9">
              <li className="flex items-startt">
                <img
                  className="flex-shrink-0 w-10 h-10"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/sign-up/1/icon-thumb.png"
                  alt=""
                />
                <span className="ml-6 text-xl font-normal leading-relaxed text-gray-900 font-pj">
                  {" "}
                  <span className="font-bold">Proven success rate.</span> Consec
                  tetur adipis cing elit. Sit ornare adipiscing nunc, est nec,
                  neque aliquet maecenas mi.{" "}
                </span>
              </li>

              <li className="flex items-startt">
                <img
                  className="flex-shrink-0 w-10 h-10"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/sign-up/1/icon-mailbox.png"
                  alt=""
                />
                <span className="ml-6 text-xl font-normal leading-relaxed text-gray-900 font-pj">
                  {" "}
                  <span className="font-bold">
                    Get reports every week.
                  </span>{" "}
                  Tetur adipis cing elit. Sit ornare adipiscing nunc, est nec,
                  neque aliquet maecenas mi.{" "}
                </span>
              </li>

              <li className="flex items-startt">
                <img
                  className="flex-shrink-0 w-10 h-10"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/sign-up/1/icon-sand-clock.png"
                  alt=""
                />
                <span className="ml-6 text-xl font-normal leading-relaxed text-gray-900 font-pj">
                  {" "}
                  <span className="font-bold">Task manager.</span> Tetur adipis
                  cing elit. Sit ornare adipiscing nunc, est nec, neque aliquet
                  maecenas mi.{" "}
                </span>
              </li>
            </ul>
          </div>
          <div className="lg:px-12 xl:px-16"></div>
        </div>
      </div>
    </section>
  );
};

export default Verification;
