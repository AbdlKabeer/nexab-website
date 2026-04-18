import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('nexab_landing_page');
    const collection = db.collection('waitlist');

    // Check if email already exists
    const existing = await collection.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { error: 'You are already on the waitlist!' },
        { status: 409 }
      );
    }

    // Insert new entry
    await collection.insertOne({
      email,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { message: 'Success! You have been added to the waitlist.' },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Waitlist API Error:', error);
    
    // Specifically detect IP whitelisting issues (Commonly causes SSL Alert 80)
    if (error.message?.includes('SSL alert number 80') || error.name === 'MongoServerSelectionError') {
      return NextResponse.json(
        { error: 'Connection refused by MongoDB Atlas. Please ensure your IP is whitelisted in your Atlas Dashboard.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
