import CoinDetails from '../../../features/coin/components/CoinDetails';

type Props = {
  params: { id: string };
};

export default async function CoinPage({ params }: Props) {
  const { id } = await params;

  return <CoinDetails id={id} />;
}
