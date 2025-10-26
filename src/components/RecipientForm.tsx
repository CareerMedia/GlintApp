import { useState } from 'react'
import Modal from './ui/Modal'
import Input from './ui/Input'
import Button from './ui/Button'

export type Recipient = { name: string, accountId: string, note?: string }

export default function RecipientForm({ open, onClose, onSubmit, initial }: {
  open: boolean
  onClose: () => void
  onSubmit: (recipient: Recipient) => void
  initial?: Recipient
}) {
  const [name, setName] = useState(initial?.name ?? '')
  const [accountId, setAccountId] = useState(initial?.accountId ?? '')
  const [note, setNote] = useState(initial?.note ?? '')

  const valid = name.trim().length > 1 && accountId.trim().length > 3

  return (
    <Modal open={open} onClose={onClose} title="Recipient info">
      <div className="space-y-4">
        <Input label="Recipient name" placeholder="e.g., Asha Kumar" value={name} onChange={(e) => setName(e.target.value)} />
        <Input label="Mobile / Account ID" placeholder="e.g., +91 90345 12345" value={accountId} onChange={(e) => setAccountId(e.target.value)} />
        <Input label="Add a note (optional)" placeholder="Dinner reimbursement" value={note} onChange={(e) => setNote(e.target.value)} />
        <div className="flex gap-2 justify-end">
          <button className="px-4 py-2 rounded-lg hover:bg-white/5" onClick={onClose}>Cancel</button>
          <Button onClick={() => { if (valid) { onSubmit({ name: name.trim(), accountId: accountId.trim(), note: note.trim() }) ; onClose() }}} disabled={!valid}>
            Save
          </Button>
        </div>
      </div>
    </Modal>
  )
}
