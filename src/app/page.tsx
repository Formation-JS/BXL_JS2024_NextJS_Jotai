import ClassicInteraction from '@/components/classic-interaction/classic-interaction';
import ServerInteraction from '@/components/server-interaction/server-interaction';

export default function HomePage() {
  return (
    <div className="p-3">
      <ClassicInteraction />
      <hr/>
      <ServerInteraction />
    </div>
  );
}
