const ErrorMessage = ({ message }) => {
    return (
      <h1 className="w-full rounded-lg text-gray-900 text-3xl mx-auto px-4 py-2 max-w-md">
        {message}
      </h1>
    );
  };
  
  export default ErrorMessage;