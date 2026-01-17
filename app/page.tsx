import Sidebar from '@/components/Sidebar';
import Widgets from '@/components/Widgets';
import Postfed from '@/components/Postfed';
import SignUpPrompt from '@/components/SignUpPrompt';
import CommentsModal from '@/components/modal/CommentsModal';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
  return (
    <>
      <div className='text-[#0F1419] min-h-screen max-w-[1400px] 
        mx-auto flex flex-row justify-center'>
        <Sidebar />
        <Postfed />
        <Widgets />
      </div>
      <CommentsModal />
      <SignUpPrompt />
      <LoadingScreen />
    </>

  );
}
