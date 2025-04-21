// components/ErrorMessage.tsx
const ErrorMessage = ({ message }) => (
    <div className="bg-red-100 text-red-700 p-4 rounded-md text-center">
      <p>{message}</p>
    </div>
  );
  
  export default ErrorMessage;
  