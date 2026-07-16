import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { objectType, area, phone, details } = body;

    const message = `
🏢 **Категория:** ${objectType || 'Не указана'}
📐 **Площадь:** ${area || 'Не указана'}
📞 **Телефон:** ${phone || 'Не указан'}
📝 **Подробности:** ${details || 'Нет подробностей'}
    `;

    const telegramRes = await fetch('https://api.telegram.org/bot8627407412:AAEfZJ28JIiyY4gOmcwMBggFCOWETHGuIJg/sendMessage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },


      
      body: JSON.stringify({
        chat_id: '5195697636',
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    if (!telegramRes.ok) {
      const errText = await telegramRes.text();
      console.error('Telegram API Error:', errText);
      return NextResponse.json({ success: false, error: 'Telegram failed' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('API Route Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
