'use server';

import { auth } from '@/auth';
import { Logo } from '@/components/logo';
import { SignOutForm } from '@/components/sign-out-form';
import { cookies } from 'next/headers';
import ProtectedResource from '@/components/ProtectedResource';
import FetchJSONExample from '@/components/FetchJSONExample';


export default async function HomePage() {
  const cookieStore = cookies()
  const session = await auth();
  const userName = session?.user?.name || 'Unknown user';
  const userImage = session?.user?.image || undefined;

  let resourcePath: string
  resourcePath = cookieStore.get('resourcePath')?.value || '/'

  return (
    <main aria-label='Home page'>
      <Logo src={userImage} />
      <h1>Hello, {userName}</h1>
      <ProtectedResource resourcePath={resourcePath + '/page.html'} />
      <FetchJSONExample resourcePath={resourcePath + '/inspData.json'} />
      <SignOutForm />
    </main>
  );
}
