import { Form, useLoaderData, redirect } from 'react-router-dom'
import { updateContact } from '../contacts'


export async function action({ request, params }) {
  const formData = await request.formData()
  const updates = Object.fromEntries(formData)
  await updateContact(params.contactId, updates)
  return redirect(`/contacts/${params.contactId}`)
}

export default function EditContact() {
  const { contact } = useLoaderData()
  return (
    <Form method="post" className="space-y-4">
      <div>
        <label>
          Nom: 
          <input
            type="text"
            name="nom"
            defaultValue={contact.nom}
            className="w-full p-2 border rounded"
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            defaultValue={contact.email}
            className="w-full p-2 border rounded"
          />
        </label>
      </div>
      <div>
        <label>
          Tel:
          <input
            type="text"
            name="tel"
            defaultValue={contact.tel}
            className="w-full p-2 border rounded"
          />
        </label>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Sauvegarder
      </button>
    </Form>
  )
}
console.log(useLoaderData)