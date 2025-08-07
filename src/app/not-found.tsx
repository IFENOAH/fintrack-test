// app/not-found.tsx
'use client';

import { Button } from '@/components/forms/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-gray-50 text-center">
            <Image
                src={'/404.jpg'}
                width={500}
                height={400}
                alt="Page not found illustration"
                className="w-full max-w-md mb-8 animate-fade-in"
            />
            <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Oops! Page Not Found</h1>
            <p className="text-lg text-gray-600 mb-6">
                We can't seem to find the page you're looking for.
            </p>
            <Button
                onClick={() => router.replace('/')}
            >
                Go Back Home
            </Button>
        </div>
    );
}
