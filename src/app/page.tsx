import {Button, Htag, P} from "@/components";
export default function Home() {
  return (
    <div>
      <Htag  tag='h1'>Текст</Htag>
      <Button appearance='primary' arrow="down">Кнопка</Button>
      <Button appearance='ghost' arrow="right">Вторая кнопка</Button>
      <P size="s">Я пришел и ушел, а потом опять пришел и увидел как земля расцветает. Это очень хорошо, что на улице тепло.
      девка в платье загорает.</P>
    </div>
  );
}
