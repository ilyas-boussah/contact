import { Outlet, Link, useLoaderData, Form } from 'react-router-dom';
import { getContacts } from '../contacts';

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

export default function Root() {
  const { contacts } = useLoaderData();

  return (
    <div className="flex h-screen">
      <div className="w-1/3 border-r p-4">
        <h1 className="text-2xl font-bold mb-4">Gestion des Contacts</h1>
        <div className="flex gap-2 mb-4">
          <Form method="post">
            <button 
              type="submit" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Nouveau Contact
            </button>
          </Form>
        </div>

        <div className="mb-4">
          <Form id="search-form" role="search">
            <input
              type="search"
              name="q"
              placeholder="Rechercher..."
              className="w-full p-2 border rounded"
            />
          </Form>
        </div>

        <nav className="overflow-y-auto max-h-[calc(100vh-200px)]">
          {contacts.length ? (
            <ul className="space-y-2">
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <Link 
                    to={`contacts/${contact.id}`}
                    className="block p-2 rounded hover:bg-gray-100"
                  >
                    <div className="font-medium">
                      {contact.nom || "Sans nom"}
                    </div>
                    {contact.email && (
                      <div className="text-sm text-gray-600">
                        {contact.email}
                      </div>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-center">
              Aucun contact
            </p>
          )}
        </nav>
      </div>

      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
}
