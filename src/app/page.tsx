import useCoins from './hooks/useCoins';

export default function Home() {
  const { data: coins, isError, isPending } = useCoins();

  return (
    <>
      <h1 className="">Testing</h1>
    </>
  );
}
