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
                        content: `Eres un editor profesional. Tu única tarea es corregir la ortografía, gramática y mejorar la redacción del texto enviado por el usuario. 
                        Reglas estrictas:
                        1. NO respondas con consejos ni sugerencias.
                        2. NO añadas introducciones como "Aquí tienes tu texto".
                        3. NO expliques qué corregiste.
                        4. Devuelve ÚNICAMENTE el texto final corregido y organizado.
                        5. Si el texto no tiene errores, devuélvelo tal cual sin cambios.
                        6. Corrigele la estructura de las oraciones para que sean más claras y fluidas, pero sin cambiar el significado original.` 
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