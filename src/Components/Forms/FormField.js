export function FormField(props) {
  return (
    <div className=" container  w-full mx-auto">
      <label
        className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-800"
        htmlFor={props.id}
      >
        {props.label}
      </label>

      <input
        className="bg-gray-400 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-100 dark:border-gray-700 dark:placeholder-gray-400 dark:text-grey mb-5"
        type={props.type}
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        required={props.required}
        pattern={props.pattern}
        readOnly={props.readOnly}
        autoComplete={props.autoComplete}
      />
    </div>
  );
}
