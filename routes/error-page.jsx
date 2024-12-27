import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Oops!</h1>
      <p className="mb-2">Désolé, une erreur est survenue.</p>
      <p className="text-gray-600">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}