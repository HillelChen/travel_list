import { useState } from "react";

export default function Form({ onAddItem }) {

    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState('1');

    function handleSubmit(e) {
        e.preventDefault();
        if (!description) return;

        const newItem = { id: Date.now(), description, quantity: amount, packed: false }

        console.log(newItem);

        onAddItem(newItem);
        setDescription("");
        setAmount(1);
    }

    return <form className="add-form" onSubmit={handleSubmit}>


        <h3>What do you need for your trip?</h3>
        <select value={amount} onChange={e => setAmount(Number(e.target.value))}>
            {Array.from({ length: 20 }, (_, i) => i + 1).
                map(num => <option value={num} key={num} >{num}</option>)}

        </select>
        <input type="text" placeholder="item..." value={description} onChange={(e) => setDescription(e.target.value)} />
        <button>Add</button>
    </form>
}