import PocketBase from 'pocketbase';

// Use a global variable to store the PocketBase instance during development
// to prevent multiple instances from being created during hot-reloading.
const globalForPocketBase = global as unknown as { pb: PocketBase };

export const pb = globalForPocketBase.pb || new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);

if (process.env.NODE_ENV !== 'production') globalForPocketBase.pb = pb;

// Disable auto-cancellation to avoid issues with React Strict Mode in dev
pb.autoCancellation(false);
