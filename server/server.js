import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
    const { message } = req.body;
    const API_KEY = process.env.OPENAI_API_KEY;
    const API_URL = process.env.OPENAI_API_URL;

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                temperature: 0,
                messages: [
                   {
                    role: "system",
                    content: `Eres un asistente que analiza reportes internos enviados por personal de una empresa.

                    Las personas que envían reportes pueden ser:
                    - Personal de mantenimiento
                    - Personal de aseo

                    Tu tarea es:
                    1. Corregir la ortografía, gramática y redacción del mensaje.
                    2. Identificar quién probablemente envió el reporte.
                    3. Identificar el estado de la tarea según lo que dice el mensaje.

                    Estados posibles:
                    - Pendiente (solo reporta el problema)
                    - En proceso (la persona dice que lo está arreglando o limpiando)
                    - Completado (la persona dice que ya se arregló o terminó)

                    Reglas para identificar:
                    - Si habla de arreglar cosas como bombillos, puertas, cables, daños → Mantenimiento
                    - Si habla de limpiar, basura, baño sucio, polvo → Aseo
                    - Si dice "ya se arregló", "ya quedó", "ya lo hice" → Estado: Completado
                    - Si dice "voy a arreglarlo", "lo estoy revisando", "lo estoy limpiando" → Estado: En proceso
                    - Si solo reporta el problema → Estado: Pendiente

                    Formato de respuesta obligatorio:

                    REPORTE ANALIZADO

                    Mensaje corregido:
                    [texto corregido]

                    Área que reporta:
                    [Mantenimiento o Aseo]

                    Estado de la tarea:
                    [Pendiente | En proceso | Completado]

                    No agregues consejos ni explicaciones. Solo entrega el reporte.`
                    },
                    { role: "user", content: message }
                ]
            })
        });

        const data = await response.json();
        res.json({ reply: data.choices[0].message.content });
    } catch (error) {
        res.status(500).json({ error: "Error procesando el texto" });
    }
});

app.listen(3000, () => console.log('🚀 Servidor activo en puerto 3000'));