import { Form, useLoaderData } from 'react-router-dom'
import { getContact } from '../contacts'

export async function loader({ params }) {
  const contact = await getContact(params.contactId)
  return { contact }
}

export default function Contact() {
  const { contact } = useLoaderData()
  return (
    <div>
      <h1 className="text-2xl mb-4">{contact.nom}</h1>
      <div className="mb-4">
        <p>Email: {contact.email}</p>
        <p>Tel: {contact.tel}</p>
      </div>
      <div className="flex gap-2">
        <Form action="edit">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Modifier
          </button>
        </Form>
        <Form
          method="post"
          action="destroy"
          onSubmit={(event) => {
            if (!confirm("Confirmer la suppression ?")) {
              event.preventDefault()
            }
          }}
        >
          <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">
            Supprimer
          </button>
        </Form>
      </div>
    </div>
  )
}