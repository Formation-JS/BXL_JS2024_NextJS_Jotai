import ClassicInteraction from '@/components/classic-interaction/classic-interaction';
import ServerInteractionV1 from '@/components/server-interaction/server-interaction-v1';
import ServerInteractionV2 from '@/components/server-interaction/server-interaction-v2';

export default function HomePage() {
  return (
    <div className="p-3">
      <ClassicInteraction />
      <hr/>
      <ServerInteractionV1 />
      <hr/>
      <ServerInteractionV2 />
    </div>
  );
}
