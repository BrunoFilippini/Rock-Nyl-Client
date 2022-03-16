export function FormsLogin(props) {
  return (
    <>
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-2xl rounded px-8 pt-4 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor={props.id}
            >
              {props.label}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type={props.type}
              id={props.id}
              name={props.name}
              onChange={props.onChange}
              value={props.value}
              required={props.required}
              pattern={props.pattern}
              readOnly={props.readOnly}
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor={props.id2}
            >
              {props.label2}
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type={props.type2}
              id={props.id2}
              name={props.name2}
              onChange={props.onChange2}
              value={props.value2}
              required={props.required2}
              pattern={props.pattern}
              readOnly={props.readOnly2}
              placeholder="******************"
            />
            <p className="hidden text-red-500 text-xs italic">
              Please choose a password.
            </p>
          </div>

          <div className="flex items-center justify-between">
            {props.btn}
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </>
  );
}
