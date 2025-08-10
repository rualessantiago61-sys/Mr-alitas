import React, { useState } from 'react';

export default function MrAlitasApp() {
  const WHATSAPP_NUMBER = '573502243390';
  const [order, setOrder] = useState([]);
  const menu = [
    { id: 1, name: 'Alitas BBQ', price: 18000 },
    { id: 2, name: 'Alitas Picantes', price: 18500 },
    { id: 3, name: 'Papas Fritas', price: 8000 }
  ];

  const addToOrder = (item) => setOrder([...order, item]);

  const sendOrder = () => {
    const orderText = order.map(i => `${i.name} - $${i.price}`).join('%0A');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hola!%20Quiero%20hacer%20este%20pedido:%0A${orderText}`);
  };

  return (
    <div className="p-4 font-sans">
      <h1 className="text-2xl font-bold mb-4">Mr Alitas - Pedido Online</h1>
      <div className="grid gap-4">
        {menu.map(item => (
          <div key={item.id} className="border p-2 rounded">
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p>${item.price}</p>
            <button
              onClick={() => addToOrder(item)}
              className="bg-red-500 text-white px-3 py-1 rounded mt-2"
            >
              Agregar
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-bold">Pedido Actual:</h2>
        {order.length === 0 && <p>No has agregado nada aún.</p>}
        <ul>
          {order.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
        {order.length > 0 && (
          <button
            onClick={sendOrder}
            className="bg-green-500 text-white px-4 py-2 rounded mt-4"
          >
            Enviar Pedido por WhatsApp
          </button>
        )}
      </div>
    </div>
  );
}
